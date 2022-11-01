const gameTiles = document.querySelectorAll('.tile'); // pull out all the tiles
const gameBoard = document.querySelector('#game-board'); // we take out the boards
const gameState = [
  [gameTiles[0], gameTiles[1], gameTiles[2]],
  [gameTiles[3], gameTiles[4], gameTiles[5]],
  [gameTiles[6], gameTiles[7], gameTiles[8]],
];

function render(gameBoard, gameState) {  // <= after "const temp"
  gameState.forEach((row) => {
    row.forEach((column) => {
      gameBoard.appendChild(column) // add element to DOM
    })
  })
}
gameBoard.addEventListener('click', (event) => {
    const target = event.target;
    

    let x, y; 


    gameState.forEach((row, rowIndex) => { // check position click
      row.forEach((column, columnIndex) => {
        if (column === target) {
          x = rowIndex;
          y = columnIndex;
        }
      });
    });
    let emptyX, emptyY; 

    gameState.forEach((row, rowIndex) => { // check position empty element 
      row.forEach((column, columnIndex) => {
        if (column.innerText === '') {
          emptyX = rowIndex;
          emptyY = columnIndex;
        }
      });
    });
    const temp = gameState[x][y];  // we replace the empty element with the clicked element
    gameState[x][y] = gameState[emptyX][emptyY];
    gameState[emptyX][emptyY] = temp;
    render(gameBoard, gameState);
});

