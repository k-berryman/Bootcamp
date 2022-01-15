# JavaScript Promises

## Welcome Back to JS
Wohoo! We're going to revist async functions.
This is a deep dive into Promises.
Promises help avoid callback hell & is more readable. 

## Async Callbacks Review

JS is typically synchronous

Some things take a long time - like sending a request or setting a timer or adding animations..  The **browser** handles this delay - it notifies JS when it's time to run a callback.

Not all callbacks are async -  remember to check the docs! 
 

    console.log("first print");
    
    setTimeout(function() {
      console.log("this prints third because of a 1 second delay");
     }, 1000);
     
     console.log("second print");

Remember passing in callbacks? oh yeah! 

[This tool](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4=) helps visualize async callbacks & the call stack.

Remember Async + AJAX? oh yeah!
Let's pull some data with jQuery - axios doesn't support callbacks - jQuery does.

    let planet;
    
    $.getJSON("https://swapi.co/api/planets/1/", response => {
        planet = response;
        console.log(planet);

        $.getJSON(planet.residents[0], response => {
            resident = response;
            console.log(resident);

            $.getJSON(resident.films[0], response => {
                film = response;
                console.log(film);
            });
        });
    });
    
    console.log("waiting...");
    
^ the `console.log()` needs to wait for the request to be done, so it's inside the request instead of after.

Note the nested requests. Each new request depends on the previous request being finished. Uncomfy... and no error handling... Error handling with `$.getJSON()` involves a second callback per request.. our code would double.. Our code is getting hideous. It's callback hell. 

There's a better way - I promise ;)

## Promises Intro
A one-time guarantee of a future value

"I promise you'll get presents this year if you're a good boy"

Not all promises are kept...

Run code when the future value comes back

We're going back to axios - we don't need callback hell anymore. Axios is a promise-based AJAX library.

In `index.html` ,
add `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>` in the body, right before 
`<script src="app.js"></script>`

    let url = "https://swapi.co/api/planets/1/";
    let ourFirstPromise = axios.get(url);
    console.log(ourFirstPromise);
    // Promise {<pending>}
  
Promises in JS are objects as of ES2015.

A Promise has 3 potential states
  * Pending
  * Resolved - Successful
  * Rejected - Failed


Promise { < resolved/rejected > : some value }

How do we know when it's available? Keep reading!

## then and catch
Axios makes the Promise & returns it to us. 

To get the resolved/rejected value, we must chain a method on the end of the promise. Promises provide `.then` and `.catch` which accept callbacks. These will wait until the promise is resolved/rejected. These have access to the values!

`.then` runs after a resolved promise 
`.catch` runs after a rejected promise

    let url = "https://swapi.co/api/planets/1/";
    let ourFirstPromise = axios.get(url);
    
    ourFirstPromise.then(() => console.log("resolved!"));
    ourFirstPromise.catch(() => console.log("rejected..."));

The data from the promise is automatically passed into the callback. You can reference it!

    let url = "https://swapi.co/api/planets/1/";
    let ourFirstPromise = axios.get(url);

    ourFirstPromise.then(res => console.log("resolved!", res));
    ourFirstPromise.catch(err => console.log("rejected...", err));
    
    console.log("I print first lol, at least most of the time");


## Promises Chaining
Let's clean this up & also add more requests. Promises flatten our code & avoid nesting.


    let url = "https://swapi.co/api/planets/1/";
    axios.get(url)
      .then(res =>
         axios.get(res.data.residents[0])
           .then(res => {
             console.log(res);
           })
           .catch(err => {
             console.log("ERROR", err);
           })
      )
      .catch(err => console.log(err))

um... this is still grossly nested?

Promise Chaining!!!!
Inside of a `.then` callback, you can return a new promise. This allows chaining multiple async operations together without nesting.

    let url = "https://swapi.co/api/planets/1/";
    axios.get(url)
          .then(res => {
              console.log(res.data)
              return axios.get(res.data.residents[0])
          })
          .then(res => {
              console.log(res.data);
              return axios.get(res.data.films[0])
          })
          .then(res => {
              console.log(res.data)
          })
          .catch(err => console.log(err))

We only a single `.catch` :D it'll catch any rejected promise. Remember, the following `.then` will only run when/if the previous promise resolves. Remember to return a new promise in the previous `.then` if you want to chain it -- chaining is on the same level!

## Refactoring Callback Hell

## Writing Promises

## Mock AJAX Promises Demo

## Recreating Axios

## Promise.all and Promise.race

## JS Promises Exercise




