# Python Intro

## Back-End (Intro)
Server-side code! Connecting to databases, figuring out what's trending, auth, behind the scenes stuff, adding more complicated logic, etc.

## Why Python?
It's widely used, high level, "clean", large community
Used in data science, machine learning, making servers, etc
Learning another language is a good thing

## Install Python
Python 2 vs. Python 3
Python 2 is the default on OSX. Python 3 is downloaded automatically in Ubuntu
Python 3 is the latest & has major differences
Python 2 & Python 3 aren't completely compatible
We'll be using Python 3

Go to [https://www.python.org/downloads/](https://www.python.org/downloads/)

In a new terminal, `python3 -- version` Do you see any output? Awesome

Type `python3` and then to quit, type `quit()` or `Control D`

Type `which python3` to see where it's installed

Type `python` to open Python 2 — be careful!

## Python Docs
python.org, go to documentation
Shows syntax differences between Python 2 & 3	

## iPython & pip
Python REPL (Read, Evaluate, Print, Loop)
Type `python3` to open the REPL interactive environment
Type `help()` to access the help utility. Then type topics to see available info. Hit `q` to get out of there.
Helpful for trying things out

pip (Python package installer)
Comes with Python 3
Packages are like libraries

`ipython` is an alternative /enhancement to the python3 repl
It has debugging features, line numbers, syntax highlighting, tab completion, type `?` to access an enhanced help, error formatting add a question mark after some data to give us info about that data
Install it by `pip3 install ipython`
Start it up by typing `ipython`
type `clear` to make room

## Neural Art Demo
`pip3 install neuralart`
`neuralart --help`
It works!

`pip3 uninstall neuralart`

## Declaring Variables
Naming convention is **lower_snake_case**
No keyword like let or const
Just type `num_dogs = 69`
Reassign this variable as many times as you want

There are no constants in Python. The convention is to write constants **LIKE_THIS**, but this doesn't actually enforce anything

Variables a scoped to functions

## Python Numbers
Separate types for integers and floats
`type(5)` returns int
`type(5.0)` returns float
There's also complex numbers too

`+, -, *, /` Division returns floats
`x // y` is integer division .. division with the answer floored. `10 // 3` returns 3
`10 % 3` is modulus. 10 mod 3 takes the remainder, which returns 1
Division by zero is an error
`abs(x)` is absolute value
`int(x)` casts something to an int
`float(x)` casts something to an float
`x ** y` or `pow(x, y)` is x to the power of y
`round(3.14159, 2)` rounds numbers .. the second number is the amount of decimal places to round to. this returns 3.14
To test if a float is an integer, `4.56.is_integer()` returns False

`print(1,2,3)` prints `1 2 3`

## Strings
Use single or double quotes
Multi-line quotes are triple quoted `"""` or `'''`

f string .. formatted string, which allows string interpolation
`food = 'brownies'`
`print(f'I love {food}')`

\n gives a new line
\t gives a new tab

## Lists
The Python array
They're ordered
Can be heterogenous ... `[2, 'pineapple', 14.2]`

## Boolean Comparisons
`True` and `False` .. Uppercase 
`< ... <= ... > ... >= ... == ... != ... is ... is not`

Cannot compare data of different types - an error pops up

## Equality Operators
`==` is the equality operator. 
     
 Yes, it cares about types
  `7 == "7"` returns `False`

 When comparing lists, Python doesn't care about the reference. It looks at the contents.
 `[1,2,3] == [1,2,3]` returns `True`

To check for equality of reference, use `is` 
`is` cares about object identity
 `[1,2,3] is [1,2,3]` returns `False`

     nums = [7,8]
     copy = nums
     nums is copy`

`nums is copy` returns True

There's also `!=` and `is not`

## Indentation
No curly braces .. all that matters is the indentation
Always use 4 spaces as a convention, even though any consistently spaced indentation works

## Running Files
Execute it manually

In terminal, type `python3 filename.py`
-or- 
In terminal, type `ipython` then `%run filename.py`

ipython allows you to interact with your variables afterwards

## Conditional Logic
`if: ...` `elif: ...` `else: ...`

Nesting is allowed

## Ternary Operators
`msg = print("sure, drink") if (age >= 21) else print("here's water")`

## Boolean Operations
Logical `or`, `and`, `not` in that priority order

They're short-circuit operators. The right side of `or` will only run when the left side is false. Same idea for `and`

## Truthiness & Falsiness
Python falsy values —
`0`, `0.0`, `""`, `None`, 	`False`, 
`[]` (empty list), `{}` (empty dictionary), `set()` (empty set)

Verify by `not not ""` or put in a conditional

Can use `None` to initialize .. `db_connection = None`
JS interprets this stuff differently

## While Loops

    count = 5
    while count > 0:
        print(count)
        count -= 1
    print('liftoff!')

Make sure to avoid infinite loops
There is no `count--` or `count++` 

`break` breaks out of the loop

`input()` is a way to get user input from the terminal
`guess = input('enter your guess')`
It sets the user input as a string saved under guess

    target = 45
    guess = None
    
        while guess != target:
            guess = input('enter your guess...')
            if guess == 'quit':
                break
            guess = int(guess)
        print('you got it')

## For Loops
Iterate through iterables

    for dessert in ["brownie", "ice cream", "chocolate bar"]:
        print(dessert)

Strings, lists, etc are iterables
No traditional 3 part for loop .. use ranges instead

## Ranges
To loop 5 times...

    for num in range(5): 
        print(num)

prints 0 1 2 3 4

`range(stop)`
`range(start, stop, step)`

Only stores start, stop, and step values, so it always takes the same amount of memory
`range(5)` makes `range(0,9)`

`list(range(5))` makes `[0, 1, 2, 3, 4]`
Note - 5 isn't included
`start` defaults to 0
`step` defaults to 1

`list(range(-20, 20, 2))`

Go backwards with a negative step
`list(range(10, 0, -2))`

## Python Functions

    def add_nums(a, b):
        if type(a) is int and type(b) is int:
            sum = a + b
            return f"the sum is {sum}"
        return "a and b must be integers!"
        
    add_nums(5, 7)

Functions without a return simply return None
A return statement ends the function

## Function Arguments
Providing too many or too few arguments makes an error

With certain `=` syntax, function argument order doesn't need to matter

    def send_email(to_email, from_email, subject, cc, bcc, body):
        print('email')
    
    send_email('parrot@gmail.com', 'dog@gmail.com', 'bark', 'cat@gmail.com, 'pig@gmail.com', 'bark bark')
    send_email(subject="meow", cc='dog@gmail.com', bcc='pig@gmail.com', body='meow meow', from_email='cat@gmail.com', to_email='parrot@gmail.com'

Adding defaults

    def power(num, pow=2):
        return num ** pow

`pow` defaults to 2, and now we can leave off an argument
Default arguments need to be listed last. Required arguments come first in the parameter list.

## Comments & Docstrings
`#` is the comment symbol
There's no block comments, only single line

How do we document our functions so someone can run `help()` on our stuff...? docstrings! At the beginning of a file/function, include a triple quoted string that describes what the file/function does. It needs to be the first thing. Don't just reiterate the parameters - be descriptive.

    def add(a, b):
        """Add two numbers"""
        return a + b

Now when we run `help(add)` it gives us the docstring!! Cool

## Python Syntax Exercise
[Click Here](https://github.com/k-berryman/Bootcamp/tree/main/Unit%2018%20%E2%80%94%20Python%20Fundamentals/Python%20Intro)

## Extra Notes
Python is not strictly typed. An int variable can be changed into a string.
`thing = 10` then `thing = 'kaitlin'`

`None` is an object with the type of `NoneType` .. it's basically null

Type checking isn't pythonic

`help(send_email)` gives me the function signature of my function. Type `q` to escape.

`dir()` Pass in an object. It returns a list of all of the methods and attributes the object contains

`help()` enters the Python help utility type 'keywords', 'print', or something like that to access Python docs. `help(25)` gives internal documentation on this number. Help gives more information than dir. How do we document our functions so someone can run help on our stuff... docstrings!
