/* Connect Four
 * Springboard Software Engineering Bootcamp
 * Kaitlin Berryman
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie) */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

document.addEventListener("DOMContentLoaded", function() {
  makeBoard();
  makeHtmlBoard();
})

// Set board to empty HEIGHT x WIDTH matrix array
function makeBoard() {
  const arr = new Array(HEIGHT);
  for (let i=0; i<arr.length; i++) {
    arr[i] = new Array(WIDTH).fill(null); // Creating an array of size 4 and filled of 1
  }
  board = arr;
  return board;
}


// Make HTML table and row of column tops.
function makeHtmlBoard() {
  // Create htmlBoard variable from the HTML item w/ID of "board"
  const htmlBoard = document.getElementById("board")

  // Create the top table row
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  // Populate the top table row for the given width
  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // Create the rest of the table rows for the given height & width
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}


// Given column x, return top empty y (null if filled)
function findSpotForCol(x) {
  for(let y = HEIGHT - 1; y >= 0; y--) {
    if(!board[y][x]) {
      return y;
    }
  }
}


// Update DOM to place piece into board HTML table
function placeInTable(y, x, color) {
  // Make a div
  const div = document.createElement("div");
  div.classList.add(`${color}`);

  // Insert div into correct table cell
  const spot = document.getElementById(`${y}-${x}`);
  spot.append(div)
}



// Announce game end
function endGame(msg) {
  // TODO: pop up alert message
  alert(msg)
}


// Handle click of column top to play piece
function handleClick(evt) {
  // Get x from ID of clicked cell
  let x = +evt.target.id;

  // Get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // Update piece color depending on currPlayer
  let currColor = '';
  if(currPlayer == 1) {
    currColor = "red";
  } else {
    currColor = "blue";
  }

  // Place piece in board
  placeInTable(y, x, currColor);

  // Update in-memory board
  board[y][x] = currPlayer;

  // Check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} (${currColor}) won!`);
  }

  // Check for tie
  if (board.every(row => row.every(cell => cell))) {
     return endGame('It\'s a tie!');
   }

  // Switch players
  if(currPlayer == 1) {
    currPlayer = 2;
  } else {
    currPlayer = 1;
  }
}

// Check board cell-by-cell for "does a win start here?"
function checkForWin() {
  // Returns true if all are legal coordinates & all match currPlayer
  function _win(cells) {
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // Different win condition set-ups
      let horiz =  [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert =   [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      // Check to see if win conditions are met
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}
