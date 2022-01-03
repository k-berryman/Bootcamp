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
