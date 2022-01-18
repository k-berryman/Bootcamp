/* Giphy Party Project
 * Kaitlin Berryman
 * Use AJAX & Axios to get gifs based on the search term
 * Springboard's Software Engineering Bootcamp
 * https://developers.giphy.com/dashboard/ */

const searchTerm = document.querySelector('#search-term');
const submitButton = document.querySelector('#submit-button');
const removeButton = document.querySelector('#remove-button');
const gifs = document.querySelector('#gifs');
const apiKey = 'KzhPUMJFG6I8UYa8Zd87sQwa5st1LJ6n';
const baseUrl = 'http://api.giphy.com/v1/gifs';
let fullUrl = '';

submitButton.onclick = async function() {
  // To make request for /resource?a=1&b=2, can either use:
  // axios.get("/resource?a=1&b=2")
  // axios.get("/resource", {params: {a: 1, b: 2}})
  fullUrl = `${baseUrl}/search?q=${searchTerm.value}&api_key=${apiKey}`
  let response = await axios.get(`${fullUrl}`)
  let source = response.data.data[0].images.original.url;
  let img = `<img src='${source}'>`
  gifs.insertAdjacentHTML('afterend', img)
}

removeButton.onclick = function() {
  while (gifs.firstChild) {
    gifs.removeChild(gifs.firstChild);
  }

  console.log(gifs)
  gifs.append('')
  location.reload()
}
