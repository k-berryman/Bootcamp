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

# Extract data from the url query string
@app.route('/search')
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    print("term... ", term)
    return f"<h1>Search results for... {term} Sorted by... {sort}<h1>"

# Set up this end point to accept GET requests
# In terminal, type the following to make an HTTP GET request
# curl http://127.0.0.1:5000/demo
@app.route('/demo')
def getDemo():
    return "You made a get request"

# Set the same endpoint/path to also accept POST requests
# In terminal, type the following to make an HTTP POST request
# curl -X POST http://127.0.0.1:5000/demo
@app.route('/demo', methods=["POST"])
def postDemo():
    return "You made a post request"


# Now, let's use a form
# The name attribute in input stores the value to send it to the server
@app.route('/add-comment')
def addCommentForm():
    return """
        <h1>Add Comment</h1>
        <form method="POST">
          <input type='text' placeholder='Username' name='username'/>
          <input type='text' placeholder='Password' name='password'/>
          <button>submit</button>
        </form>
    """

# This is triggered when the above form is submitted
# To extract form data, use request.form
@app.route('/add-comment', methods=["POST"])
def saveComment():
    username = request.form['username']
    password = request.form['password']
    return f"""
        <h1>Your username -- {username}</h1>
        <h2>Your password -- {password}</h2
    """


# At the moment, all our paths are hard-coded
# We don't want all of those end-points.. let's look for patterns in the url
# Wrapping the query string in <> turns it into a variable
# It needs to be passed to the function too
@app.route('/r/<subreddit>')
def showSubreddit(subreddit):
    return f"<h1>this is a subreddit for {subreddit}</h1>"


POSTS = {
  1: "I like coffee",
  2: "Mayo is soft",
  3: "I don't know what to write"
}

# Cast id to int. This forces the url to follow this format.
# .get here provides a default error handle
@app.route('/posts/<int:id>')
def showPosts(id):
    post = POSTS.get(id, "Error -- no post here");
    return f"{post}"


# Let's try multiple variables
@app.route('/r/<subreddit>/comments/<int:postid>')
def showCommends(subreddit, postid):
    return f"<h1>Viewing comment {postid} from {subreddit}</h1>"

# Distinction between route variables and query strings
# Both pass in information to a get requests
# URL Param/route variable is like the subject of the page .. feels required
# URL Param/route variables aka /shop/<toy>
# Query Params aka /shop?toy=spinneer
# Query Params feels like extra info. Info often comes from a form...?
