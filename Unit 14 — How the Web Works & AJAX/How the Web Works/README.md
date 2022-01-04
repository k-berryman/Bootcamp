# How the Web Works Exercise
Springboard Software Engineering
Kaitlin Berryman

## Part One: Solidify Terminology

### In your own terms, define the following terms
**HTTP** -- A web standard/protocol for communication between browsers & servers

**URL** -- A string specifying exactly where and how to look for a resource on the network by specifying protocols.

**DNS** -- The phonebook of the internet. DNS translates domain names to IP addresses.

**Query String** -- Provides extra information such as search terms, sort criteria, etc. 

**What are the HTTP verbs and how are they different?** -- POST, GET, PUT, PATCH, and DELETE are used for CRUD operations (create, read, update, delete). GET reads data, thus causing no side effects. POST updates info on a sever, thus causing side effects.

**HTTP Request** -- When a web browser communicates to a server with an HTTP verb, HTTP protocol version, URL, and headers

**HTTP Response** -- When a server communicates back to a web browser with an HTTP verb, response code, and headers.

**What is an HTTP header? Give a couple examples of request and response headers you have seen.** -- Relevant info from the browser/server. Hostname, browser date, browser language, cookies, content type, server date/time, caching info.

**What are the processes that happen when you type “[http://somesite.com/some/page.html” into a browser?** 
1. DNS turns "somesite.com" into an IP address like `123.45.67.89`
2. Connect to `123.45.67.89` 
3. Use HTTP protocol
4. Ask server for `/some/page.html`


## Part Two: Practice Tools
**1. Using  curl, make a  GET  request to the  _icanhazdadjoke.com_ API to find all jokes involving the word “pirate”**

curl https://icanhazdadjoke.com/search\?term\=pirate
> What did the pirate say on his 80th birthday? Aye Matey!
> 
> Why couldn't the kid see the pirate movie? Because it was rated arrr!
> 
> What does a pirate pay for his corn? A buccaneer!
> 
> Why are pirates called pirates? Because they arrr!
> 
> Why do pirates not know the alphabet? They always get stuck at "C".

**2. Use  dig  to find what the IP address is for  _icanhazdadjoke.com_**
172.67.211.64
104.21.37.176

**3. Make a simple web page and serve it using  python3 -m http.server. Visit the page in a browser.**
Answers

## Part Three: Explore Dev Tools
### Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

### Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

### Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.

stuff

## Part Four: Explore the URL API
### At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

### [Read about the URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)

### Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.
