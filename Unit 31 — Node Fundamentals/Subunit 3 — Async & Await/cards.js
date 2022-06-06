// Make a request to the Deck of Cards API
// to request a single card from a newly shuffled deck.
// console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

const part1 = async () => {
  let res = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=2');
  let { suit, value } = data.cards[0];
  console.log(`${value} of ${suit}`)
}

///////////////////////////////////////////////////////////////////////////////////


// Request a single card from a newly shuffled deck.
// Once you have the card, make another request to get one more card from the same deck.
// console.log the values and suits of both cards.

const part2 = async () => {
  let res1 = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1');
  let deckID = data.data.deck_id;
  let res2 = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  [firstCard, secondCard].forEach(card => {
    let { suit, value } = card.cards[0];
    console.log(`${value} of ${suit}`);
  }
}


///////////////////////////////////////////////////////////////////////////////////


// Build an HTML page that lets you draw cards from a deck.
// When the page loads, go to the Deck of Cards API to create a new deck,
// and show a button on the page that will let you draw a card.
// Every time you click the button, display a new card, until there are no cards left in the deck.

let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let button = document.querySelector('button');


const part3 = async () => {
  let res = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  let deckID = data.data_deck_id;
  let res2 = await axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
  console.log(res2);
}
