// Make a request to the Deck of Cards API
// to request a single card from a newly shuffled deck.
// console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

let url1 = 'http://deckofcardsapi.com/api/deck/new/draw/?count=2';
let promise1 = axios.get(url1)
  .then(data => {
    //data.data.cards.forEach(card => console.log(card.value + ' of ' + card.suit));
  })
  .catch(err => console.log(err));


///////////////////////////////////////////////////////////////////////////////////


// Request a single card from a newly shuffled deck.
// Once you have the card, make another request to get one more card from the same deck.
// console.log the values and suits of both cards.

let url2 = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1';
let promise2 = axios.get(url2)
  .then(data => {
    let deckId = data.data.deck_id;
    //console.log(data.data.cards[0].value + ' of ' + data.data.cards[0].suit);

    let url3 = `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    let promise3 = axios.get(url3)
      //.then(data => console.log(data.data.cards[0].value + ' of ' + data.data.cards[0].suit))
  })
  .catch(err => console.log(err));


///////////////////////////////////////////////////////////////////////////////////


// Build an HTML page that lets you draw cards from a deck.
// When the page loads, go to the Deck of Cards API to create a new deck,
// and show a button on the page that will let you draw a card.
// Every time you click the button, display a new card, until there are no cards left in the deck.

let newCards = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let button = document.querySelector('button');

let deckPromise = axios.get(newCards)
  .then(data => {
    deckID = data.data.deck_id;
    drawCards = `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
    h1.innerText = `Deck (id: ${deckID})`;
  })
  .then(data => {
     button.addEventListener("click", function onClick() {
       let drawPromise = axios.get(drawCards)
         .then(data => {
           let drawn = data.data.cards[0].value + ' of ' + data.data.cards[0].suit;
           h3.innerText = 'You drew ' + drawn;
         })
       });
  })
  .catch(err => console.log(err));
