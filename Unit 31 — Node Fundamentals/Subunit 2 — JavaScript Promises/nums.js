// Make a request to the Numbers API (http://numbersapi.com/)
// to get a fact about your favorite number.
// Make sure you get back JSON by including the json query key, specific to this API

let faveNum = 17;
let url = `http://numbersapi.com/${faveNum}?json`;
let promise1 = axios.get(url)
  .then(data => console.log(data.data))
  .catch(err => console.log(err));


///////////////////////////////////////////////////////////////////////////////////


// Figure out how to get data on multiple numbers in a single request.
// Make that request and put the facts on the page.

let url2 = `http://numbersapi.com/`;
let output = '';
let nums = [1,12,33]
nums.forEach(num => url2 = url2 + String(num) + ',')
url2 = url2.substring(0, url2.length - 1); // delete trailing comma
const h1 = document.querySelector('h1');

let promise2 = axios.get(url2)
  .then(data => {
    nums.forEach(num => output = output + data.data[num] + '\n')
    h1.innerText=output;
  })
  .catch(err => console.log(err));


///////////////////////////////////////////////////////////////////////////////////


// Use the API to get 4 facts on your favorite number.
// Once you have them all, put them on the page.
// It’s okay if some of the facts are repeats.

let faveNum2 = 1;
let url3 = `http://numbersapi.com/${faveNum2}?json`;
let output2 = '';

let promise3 = axios.get(url3)
  .then(data => {
    output2 = output2 + data.data.text + '\n';
  })
  .then(axios.get(url3)
    .then(data => {
      output2 = output2 + data.data.text + '\n';
    })
  )
  .then(axios.get(url3)
    .then(data => {
      output2 = output2 + data.data.text + '\n';
    })
  )
  .then(axios.get(url3)
    .then(data => {
      output2 = output2 + data.data.text + '\n';
      h1.innerText=output2;
    })
  )
  .catch(err => console.log(err));
