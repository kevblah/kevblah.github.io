<img src="https://i.imgur.com/B3jbImk.jpg">

# Let's Code Connect-Four!

## Intro

So far, we've covered the fundamentals of:

- HTML
- CSS
- JavaScript
- The DOM

Now let's bring these technologies together and learn more about programming as we code the fun game of [Connect-Four](https://en.wikipedia.org/wiki/Connect_Four)!

As I code, I will be following the concepts we covered in the [Guide on How to Build a Browser Game](https://gist.github.com/jim-clark/6f1919291f6007b2c0b2c93d925d6bac).

In addition, I will be describing my thought process as we make programming decisions in regards to using data structures, coding functions, etc.

I hope you're as excited as I am - let's get started!

## Planning & Project Setup

### 1. Analyze the app's functionality

Hopefully, you're aware of how Connect-Four is played.

If not, you can read about it [here](https://en.wikipedia.org/wiki/Connect_Four), but in summary:

- It's a two-player game.
- The players alternate "dropping" their color disc into one of the seven columns.
- First player to have four in a row of their color wins.
- The four in a row can be either horizontal, vertical, or either of the two diagonals.

### 2. Determine the overall design (look & feel) of the app
	
Our game of Connect-Four is going to have a clean/minimalist UI.

### 3. Wireframe the UI
 
Wireframes provide a blueprint for the HTML & CSS.

They also help reveal what state variables need to be defined.

Here's the wireframe that will guide us today:

<img src="https://i.imgur.com/suIQoiw.png">

### 4. Pseudocode

Pseudocode outlines the app's logic using plain language. It provides a road map to writing the code itself.
   
I'll regularly be typing pseudocode as comments within the functions as I code.

### 5. Identify the application's state (application-wide data)
	
What information does the application need to "remember" throughout its execution?

Use the wireframe and pseudocode to help identify what state needs to be tracked.

### 6. Set up the project

To make it easier for you to submit this project and your instructional team to check it, we'll deviate from the setup instructions of the Guide on How to Build a Browser Game.

Create an HTML/CSS/JS-based Repl on [replit.com](https://replit.com/~) and name it **Connect-Four Game**.

### 7. **Organize the app's JS into sections**

Copy/paste the following comment headings to help you organize your app's code:

```js
/*----- constants -----*/


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

```

The above headings are gold!

> 🚀 With the setup complete, please navigate to the next page where we will begin the code-along!

## Code away!

Again, programming is as much art as science.

I'm going to be developing from scratch while following the process described in Guide on How to Build a Browser Game!

### Start with some HTML & CSS

Our goal is to code the HTML & CSS that results in a UI that looks like our wireframe.

We will need to add elements in **index.html** for the following from top to bottom:

- The heading
- The message
- The column "markers"
- The board
- The `[PLAY AGAIN]` button

If an element's content is going to come from the `render()` function, you may want to temporarily include mocked content in the HTML to help with layout and styling. However, once the content is being provided by the `render()` function, you should remove the mocked content from **index.html**.

Along the way, we'll code CSS in **style.css** to layout and style the UI.
	
<details>
<summary>
 🆘 Click for help if you've tried but unable to get your project to look like mine.
</summary>

```html
<!-- index.html -->

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script defer src="script.js"></script>
</head>

<body>
  <header>CONNECT FOUR</header>
  <h1>PURPLE's Turn</h1>
  <section id="markers">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
  <section id="board">
    <div id="c0r5"></div>
    <div id="c1r5"></div>
    <div id="c2r5"></div>
    <div id="c3r5"></div>
    <div id="c4r5"></div>
    <div id="c5r5"></div>
    <div id="c6r5"></div>

    <div id="c0r4"></div>
    <div id="c1r4"></div>
    <div id="c2r4"></div>
    <div id="c3r4"></div>
    <div id="c4r4"></div>
    <div id="c5r4"></div>
    <div id="c6r4"></div>

    <div id="c0r3"></div>
    <div id="c1r3"></div>
    <div id="c2r3"></div>
    <div id="c3r3"></div>
    <div id="c4r3"></div>
    <div id="c5r3"></div>
    <div id="c6r3"></div>

    <div id="c0r2"></div>
    <div id="c1r2"></div>
    <div id="c2r2"></div>
    <div id="c3r2"></div>
    <div id="c4r2"></div>
    <div id="c5r2"></div>
    <div id="c6r2"></div>

    <div id="c0r1"></div>
    <div id="c1r1"></div>
    <div id="c2r1"></div>
    <div id="c3r1"></div>
    <div id="c4r1"></div>
    <div id="c5r1"></div>
    <div id="c6r1"></div>

    <div id="c0r0"></div>
    <div id="c1r0"></div>
    <div id="c2r0"></div>
    <div id="c3r0"></div>
    <div id="c4r0"></div>
    <div id="c5r0"></div>
    <div id="c6r0"></div>
  </section>
  <button>PLAY AGAIN</button>
</body>

</html>
```

```css
/* style.css */

* {
  box-sizing: border-box;
}

body {
  /* viewport units: vh (viewport height), vw, vmin (smallest between vh & vw) */
  height: 100vh;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  font-size: 4vmin;
  color: darkgrey;
  letter-spacing: 1vmin;
}

h1 {
  color: grey;
  font-size: 3vmin;
}

#markers {
  display: grid;
  grid-template-columns: repeat(7, 10vmin);
  gap: 1vmin;
  margin-top: 1.5vmin;
}

#markers > div {
  height: 10vmin;
  border-width: 5vmin;
  border-style: solid;
  border-color: lightgrey transparent transparent;
  transform: scale(0.7);
}

#markers > div:hover {
  transform: scale(0.9);
  transition: transform 150ms ease-in;
  border-top-color: darkgrey;
}

#board {
  display: grid;
  grid-template-columns: repeat(7, 10vmin);
  grid-template-rows: repeat(6, 10vmin);
  gap: 1vmin;
  margin-top: -4vmin;
}

#board > div {
  border-radius: 50%;
  border: 0.1vmin solid grey;
}

button {
  margin-top: 4vmin;
  padding: 2vmin;
  font-size: 2vmin;
  border-radius: 4vmin;
  border: 0.1vmin solid grey;
  color: grey;
}

button:hover {
  color: white;
  background-color: darkgrey;
}
```

```js
/*----- constants -----*/


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/


```

</details>

> 🚀 Please navigate to the next page where we will declare and initialize the state variables in **script.js**...

### Initialize the State Variables

Declare, but don't initialize, the application-wide state variables.

The initialization of the variables to their "initial" state should be done within an `initialize()`, or similarly named function, e.g., `init()`.
	
Write that `init()` function.
	
Invoke `init()` to "kick off" the app.

Now that the `init()` function has initialized the state variables, the last line in `init()` should call `render();` to render that state to the DOM for the first time.

<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

```js
// script.js

/*----- constants -----*/


/*----- state variables -----*/
let board;  // array of 7 column arrays
let turn;  // 1 or -1
let winner;  // null = no winner; 1 or -1 = winner; 'T' = Tie

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  // To visualize the board's mapping to the DOM,
  // rotate the board array 90 degrees counter-clockwise
  board = [
    [0, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0],  // col 2
    [0, 0, 0, 0, 0, 0],  // col 3
    [0, 0, 0, 0, 0, 0],  // col 4
    [0, 0, 0, 0, 0, 0],  // col 5
    [0, 0, 0, 0, 0, 0],  // col 6
  ];
  turn = 1;
  winner = null;
  render();
}

function render() {
  
}

```

</details>

> 🚀 Please navigate to the next page where we will code the `render()` function...

### Code the `render()` function

Stub up the main `render()` function.
  
Call and code a `renderBoard()` function.

Call and code a `renderMessage()` function.

Call and code a `renderControls()` function used to show/hide the column markers & [PLAY AGAIN] button.

<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

```js
// script.js

/*----- constants -----*/
const COLORS = {
  '0': 'white',
  '1': 'purple',
  '-1': 'orange',
};

/*----- state variables -----*/
let board;  // array of 7 column arrays
let turn;  // 1 or -1
let winner;  // null = no winner; 1 or -1 = winner; 'T' = Tie

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = document.querySelectorAll('#markers > div');

/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  // To visualize the board's mapping to the DOM,
  // rotate the board array 90 degrees counter-clockwise
  board = [
    [0, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0],  // col 2
    [0, 0, 0, 0, 0, 0],  // col 3
    [0, 0, 0, 0, 0, 0],  // col 4
    [0, 0, 0, 0, 0, 0],  // col 5
    [0, 0, 0, 0, 0, 0],  // col 6
  ];
  turn = 1;
  winner = null;
  render();
}

// Visualize all state in the DOM
function render() {
  renderBoard();
  renderMessage();
  // Hide/show UI elements (controls)
  renderControls();
}

function renderBoard() {
  board.forEach(function(colArr, colIdx) {
    // Iterate over the cells in the cur column (colArr)
    colArr.forEach(function(cellVal, rowIdx) {
      const cellId = `c${colIdx}r${rowIdx}`;
      const cellEl = document.getElementById(cellId);
      cellEl.style.backgroundColor = COLORS[cellVal];
    });
  });
}

function renderMessage() {
  if (winner === 'T') {
    messageEl.innerText = "It's a Tie!!!";
  } else if (winner) {
    messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
  } else {
    // Game is in play
    messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
  }
}

function renderControls() {
  // Ternary expression is the go to when you want 1 of 2 values returned
  // <conditional exp> ? <truthy exp> : <falsy exp>
  playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
  // Iterate over the marker elements to hide/show
  // according to the column being full (no 0's) or not
  markerEls.forEach(function(markerEl, colIdx) {
    const hideMarker = !board[colIdx].includes(0) || winner;
    markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
  });
}
```

</details>

> 🚀 Please navigate to the next page where we will code the event listeners...
	
### Code the `handleDrop()` event listener function

> _"In response to user interaction, update all impacted state, then call render()"_

Time to handle when the user clicks a column marker!

We'll be sure to use event delegation.
	
Let's add an event listener for when the `[PLAY AGAIN]` button is clicked - this is a one-liner because all we have to do is call the `init()` function.

<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

```js
// script.js

/*----- constants -----*/
const COLORS = {
  '0': 'white',
  '1': 'purple',
  '-1': 'orange',
};

/*----- state variables -----*/
let board;  // array of 7 column arrays
let turn;  // 1 or -1
let winner;  // null = no winner; 1 or -1 = winner; 'T' = Tie

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);

/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  // To visualize the board's mapping to the DOM,
  // rotate the board array 90 degrees counter-clockwise
  board = [
    [0, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0],  // col 2
    [0, 0, 0, 0, 0, 0],  // col 3
    [0, 0, 0, 0, 0, 0],  // col 4
    [0, 0, 0, 0, 0, 0],  // col 5
    [0, 0, 0, 0, 0, 0],  // col 6
  ];
  turn = 1;
  winner = null;
  render();
}

// In response to use interaction, update all impacted
// state, then call render();
function handleDrop(evt) {
  const colIdx = markerEls.indexOf(evt.target);
  // Guards...
  if (colIdx === -1) return;
  // Shortcut to the column array
  const colArr = board[colIdx];
  // Find the index of the first 0 in colArr
  const rowIdx = colArr.indexOf(0);
  // Update the board state with the cur player value (turn)
  colArr[rowIdx] = turn;
  // Switch player turn
  turn *= -1;
  // Check for winner
  winner = getWinner();
  render();
}

function getWinner() {

}


// Visualize all state in the DOM
function render() {
  renderBoard();
  renderMessage();
  // Hide/show UI elements (controls)
  renderControls();
}

function renderBoard() {
  board.forEach(function(colArr, colIdx) {
    // Iterate over the cells in the cur column (colArr)
    colArr.forEach(function(cellVal, rowIdx) {
      const cellId = `c${colIdx}r${rowIdx}`;
      const cellEl = document.getElementById(cellId);
      cellEl.style.backgroundColor = COLORS[cellVal];
    });
  });
}

function renderMessage() {
  if (winner === 'T') {
    messageEl.innerText = "It's a Tie!!!";
  } else if (winner) {
    messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
  } else {
    // Game is in play
    messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
  }
}

function renderControls() {
  // Ternary expression is the go to when you want 1 of 2 values returned
  // <conditional exp> ? <truthy exp> : <falsy exp>
  playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
  // Iterate over the marker elements to hide/show
  // according to the column being full (no 0's) or not
  markerEls.forEach(function(markerEl, colIdx) {
    const hideMarker = !board[colIdx].includes(0) || winner;
    markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
  });
}
```

</details>

> 🚀 Please navigate to the next page where we will code the win logic...

### Code the `getWinner()` function

We will need to code the win logic to check for a win in the following four directions:

- Vertically
- Horizontally
- Diagonally (NE-SW)
- Diagonally (NW-SE)

To stay DRY, we'll be coding a reusable `countAdjacent()` function.

<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

```js
// script.js

/*----- constants -----*/
const COLORS = {
  '0': 'white',
  '1': 'purple',
  '-1': 'orange',
};

/*----- state variables -----*/
let board;  // array of 7 column arrays
let turn;  // 1 or -1
let winner;  // null = no winner; 1 or -1 = winner; 'T' = Tie

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  // To visualize the board's mapping to the DOM,
  // rotate the board array 90 degrees counter-clockwise
  board = [
    [0, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0],  // col 2
    [0, 0, 0, 0, 0, 0],  // col 3
    [0, 0, 0, 0, 0, 0],  // col 4
    [0, 0, 0, 0, 0, 0],  // col 5
    [0, 0, 0, 0, 0, 0],  // col 6
  ];
  turn = 1;
  winner = null;
  render();
}

// In response to use interaction, update all impacted
// state, then call render();
function handleDrop(evt) {
  const colIdx = markerEls.indexOf(evt.target);
  // Guards...
  if (colIdx === -1) return;
  // Shortcut to the column array
  const colArr = board[colIdx];
  // Find the index of the first 0 in colArr
  const rowIdx = colArr.indexOf(0);
  // Update the board state with the cur player value (turn)
  colArr[rowIdx] = turn;
  // Switch player turn
  turn *= -1;
  // Check for winner
  winner = getWinner(colIdx, rowIdx);
  render();
}

// Check for winner in board state and
// return null if no winner, 1/-1 if a player has won, 'T' if tie
function getWinner(colIdx, rowIdx) {
  return checkVerticalWin(colIdx, rowIdx) ||
    checkHorizontalWin(colIdx, rowIdx) ||
    checkDiagonalWinNESW(colIdx, rowIdx) ||
    checkDiagonalWinNWSE(colIdx, rowIdx);
}

function checkDiagonalWinNWSE(colIdx, rowIdx) {
  const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1);
  const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1);
  return (adjCountNW + adjCountSE) >= 3 ? board[colIdx][rowIdx] : null;
}

function checkDiagonalWinNESW(colIdx, rowIdx) {
  const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1);
  const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1);
  return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null;
}

function checkHorizontalWin(colIdx, rowIdx) {
  const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0);
  const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
  return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null;
}

function checkVerticalWin(colIdx, rowIdx) {
  return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null;
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
  // Shortcut variable to the player value
  const player = board[colIdx][rowIdx];
  // Track count of adjancent cells with the same player value
  let count = 0;
  // Initialize new coordinates
  colIdx += colOffset;
  rowIdx += rowOffset;
  while (
    // Ensure colIdx is within bounds of the board array
    board[colIdx] !== undefined &&
    board[colIdx][rowIdx] !== undefined &&
    board[colIdx][rowIdx] === player
  ) {
    count++;
    colIdx += colOffset;
    rowIdx += rowOffset;
  }
  return count;
}


// Visualize all state in the DOM
function render() {
  renderBoard();
  renderMessage();
  // Hide/show UI elements (controls)
  renderControls();
}

function renderBoard() {
  board.forEach(function(colArr, colIdx) {
    // Iterate over the cells in the cur column (colArr)
    colArr.forEach(function(cellVal, rowIdx) {
      const cellId = `c${colIdx}r${rowIdx}`;
      const cellEl = document.getElementById(cellId);
      cellEl.style.backgroundColor = COLORS[cellVal];
    });
  });
}

function renderMessage() {
  if (winner === 'T') {
    messageEl.innerText = "It's a Tie!!!";
  } else if (winner) {
    messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
  } else {
    // Game is in play
    messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
  }
}

function renderControls() {
  // Ternary expression is the go to when you want 1 of 2 values returned
  // <conditional exp> ? <truthy exp> : <falsy exp>
  playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
  // Iterate over the marker elements to hide/show
  // according to the column being full (no 0's) or not
  markerEls.forEach(function(markerEl, colIdx) {
    const hideMarker = !board[colIdx].includes(0) || winner;
    markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
  });
}
```

</details>

Congrats on coding a cool game of Connect-Four!

Hopefully, you're inspired to apply the process we followed today to code another game!

> 🚀 Please navigate to the next page where you will submit the link to your Repl...
