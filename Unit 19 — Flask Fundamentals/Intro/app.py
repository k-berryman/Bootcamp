# Flask Jinja

Respond to HTTP requests with HTML **seperated/organized in a separate HTML file** .

## Introduction to Templates

### Review 
- Views are functions that return a string of HTML. So far, we've written all our HTML in-line.
- Routes are declared by @decorators right before a view function. These also determine that URL which runs a view function.

### What are Templates ... ?
- Separate, stand-alone files which produce HTML
- Allows dynamic responses by using variables passed from the views. Can also include loops & conditionals.
- Repeat the same pattern with different content (like post/comment formats on social media)
- Inherit from other templates to reduce repetition

### What's Jinja ... ?
A template system for Python that comes with the Flask install

To use Jinja, create a templates directory. Flask is looking for a directory with that name in the same directory as our main app.py file.

In your Flask directory with a functioning app.py, do the following
 - [ ] mkdir templates
 - [ ] touch hello.html
 - [ ] add some html to hello.html\
 - [ ] in app.py, `from flask import render_template`


To tie the view to the template, use a function called `render_template("fileName.html")`. This will automatically find **fileName.html** in **templates/**

    from flask import Flask, request, render_template
    
    app = Flask(__name__)
        
    @app.route('/hi')
        def sayHi():
            return render_template("hello.html")

This is just a static HTML file.

## Debug Toolbar
Install it

    (venv) pip3 install flask-debugtoolbar
    
Add it as a dependency

   `(venv) pip3 freeze > requirements.txt`

Add it to add.py

    from flask_debugtoolbar import DebugToolbarExtension

After `app = Flask(__name__)`, config a secret key

    app.config['SECRET_KEY'] = "someRandomKey"
    debug = DebugToolbarExtension(app)

Now, look in your browser!! The debug bar is on the side of every route using a template

The debugging tool shows us...
* Request Vars
* HTTP Headers
* Templates
* Route List

## Jinja Variables
Currently, our template is static HTML.
Let's add variables! Jinja will replace **{{ message }}** with the value of **message** passed in app.py. Anything inside of those curly braces will run as python.

app.py

    from random import randint
    
    @app.route('/rand')
    def randNum():
        num = randint(1, 100)
        return render_template('rand.html', random_number=num)

rand.html

    <h1>Random Number - {{random_number}}</h1>

It works! We have a dynamic template

## Greeter Demo
Receives username through a form & greets the username with a random compliment

app.py

    COMPLIMENTS = ["cool","clever","smart"]

    @app.route('/form')
    def showForm():
        return render_template('form.html')
    
    # Connect by editing form.html form action="/greet"
    # greet.html now has access to username and compliment
    @app.route('/greet')
    def getGreeting():
        username = request.args["username"]
        compliment = choice(COMPLIMENTS)
        return render_template('greet.html', username=username, compliment=compliment)

form.html

    <body>
      <form action="/greet">
        <input type="text" placeholder="Your Name" name="username">
        <button>Submit</button>
      </form>
    </body>

greet.html

    <h1>Greetings, {{username}}! You are {{compliment}}</h1>

## Jinja Conditionals
How we display different content in the same template depending on something such as if a post has been liked or not.

app.py

    from flask import Flask, request, render_template
    from flask_debugtoolbar import DebugToolbarExtension
    from random import randint, choice
    
    app = Flask(__name__)
    
    app.config['SECRET_KEY'] = "someRandomKey"
    debug = DebugToolbarExtension(app)

    # Jinja Conditionals Demo
    # In lucky.html, add {% if condition %} do-xyz {% endif %}
    @app.route('/lucky')
    def luckyNum():
        num = randint(1, 10)
        return render_template('lucky.html', random_number=num)


lucky.html

    <h1>Random Number - {{random_number}}</h1>
    
    {% if random_number == 3 %}
      <h2>That's your lucky number!</h2>
    {% else %}
      <h2>Try again</h2>
    {% endif %}

## Jinja Loops
For every comment in this post, do this logic.

    {% for VAR in ITERABLE %} ... {% endfor %}
 app.py

    # Jinja Loops Demo
    # Spell the word in new h3s
    @app.route('/spell/<word>')
    def spell(word):
        return render_template('spelling.html', word=word)

spelling.html

    <body>
      <h1>Your word is {{word}}</h1>
    
      {% for char in word %}
        <h3>{{char.upper()}}</h3>
      {% endfor %}
    </body>

## Greeter Demo v2
app.py

    # Jinja Greeter Demo v2
    @app.route('/form-2')
    def showForm2():
        return render_template('form2.html')
    
    @app.route('/greet-2')
    def getGreeting2():
        username = request.args["username"]
    
        # Use .get - if it's there, use it. if not, no errors please
        wants_compliments = request.args.get("wants_compliments")
        compliments = sample(COMPLIMENTS, 3)
        return render_template("greet2.html", username=username, wants_compliments=wants_compliments, compliments=compliments)

form2.html

    <body>
      <form action="/greet-2">
        <input type="text" placeholder="Your Name" name="username">
    
        <label for="compliments">Do you want compliments?</label>
        <input type="checkbox" id="compliments" name="wants_compliments">
        <button>Submit</button>
      </form>
    </body>

greet2.html

    <body>
      <h1>Hi there, {{username}}!</h1>
    
      {% if wants_compliments %}
        <h3>Here's your compliments!</h3>
        <ul>
          {% for compliment in compliments %}
            <li>You are {{compliment}}</li>
          {% endfor %}
        </ul>
      {% endif %}
    </body>
