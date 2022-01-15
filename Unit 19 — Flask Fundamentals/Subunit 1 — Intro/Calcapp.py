from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def add_route():
    a = int(request.args["a"])
    b = int(request.args["b"])
    return str(add(a, b))

@app.route('/sub')
def sub_route():
    a = int(request.args["a"])
    b = int(request.args["b"])
    return str(sub(a, b))

@app.route('/mult')
def mult_route():
    a = int(request.args["a"])
    b = int(request.args["b"])
    return str(mult(a, b))

@app.route('/div')
def div_route():
    a = int(request.args["a"])
    b = int(request.args["b"])
    return str(div(a, b))
