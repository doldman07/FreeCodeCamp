var gameBoard;
var player;
var winningCombo = [
                      [0,1,2], 
                      [3,4,5], 
                      [6,7,8],
                      [0,3,6], 
                      [1,4,7], 
                      [2,5,8],
                      [0,4,8], 
                      [6,4,2]
                    ];
var gameOver;

function displayBoard (){
  for (var i = 0;i<gameBoard.length;i++){
    $('.' + i).text(gameBoard[i]);
  }
}

function displayMessage(){
  $("#message").text("Turn : " + player)
}

function gameStatus(square){
  if(gameOver) {
    return;
  }
  else {
    gameBoard[square] = player;
    boardStatus();
  }
  if(gameOver) {
    return;
  }
  else {
    switchPlayer();
    displayBoard();
    displayMessage();
  }



}

function switchPlayer(){
  if (player == 'O')
    player = 'X';
  else
    player = 'O';
}

function boardStatus(){
  $.each(winningCombo, function(index,value){
   if (gameBoard[winningCombo[index][0]] == gameBoard[winningCombo[index][1]] 
    && gameBoard[winningCombo[index][0]] == gameBoard[winningCombo[index][2]] 
    && gameBoard[winningCombo[index][0]] != " "){
      gameOver = true;
      $("#message").text('Player ' + player + ' wins');
      displayBoard();
   }
  });
}

function init(){
  gameBoard = [" "," "," "," "," "," "," "," "," "];
  player = 'X';
  gameOver = false;
  displayBoard();
  displayMessage();
}

$(document).ready(function(){
  init();
});