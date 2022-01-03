from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def homepage():
    html = """
    <html>
      <body>
        <h1>Homepage</h1>
        <p>Welcome to this simple website!</p>
        <a href='/hi'>Click Here for Hello Page</a>
        <a href='/bye'>Click Here for Bye Page</a>
      </body>
     </html>
    """
    return html


@app.route('/hi')
def sayHi():
    html = """
    <html>
      <body>
        <h1>Hi</h1>
      </body>
     </html>
    """
    return html

@app.route('/bye')
def sayBye():
    html = """
    <html>
      <body>
        <h1>Goodbye</h1>
      </body>
     </html>
    """
    return html

@app.route('/search')
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    print("term... ", term)
    return f"<h1>Search results for... {term} Sorted by... {sort}<h1>"

    
