// Make a request to the Numbers API (http://numbersapi.com/)
// to get a fact about your favorite number.
// Make sure you get back JSON by including the json query key, specific to this API

let faveNum = 17;
let url = `http://numbersapi.com/${faveNum}?json`;

const faveNumReq = async () => {
  let res = await axios.get(url);
  console.log(res);
}

faveNumReq();

///////////////////////////////////////////////////////////////////////////////////


// Figure out how to get data on multiple numbers in a single request.
// Make that request and put the facts on the page.

let url2 = `http://numbersapi.com/`;
let output = '';
let nums = [1,12,33]
nums.forEach(num => url2 = url2 + String(num) + ',')
url2 = url2.substring(0, url2.length - 1); // delete trailing comma
const h1 = document.querySelector('h1');

const part2 = async () => {
  let res = await axios.get(url2);
  console.log(res);
}
part2();

///////////////////////////////////////////////////////////////////////////////////


// Use the API to get 4 facts on your favorite number.
// Once you have them all, put them on the page.
// It’s okay if some of the facts are repeats.

let faveNum2 = 1;
let url3 = `http://numbersapi.com/${faveNum2}?json`;

const part3 = async () => {
  let res = await axios.get(url3);
  console.log(res);
}
part3();
