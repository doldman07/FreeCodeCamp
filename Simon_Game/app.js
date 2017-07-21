$(document).ready(function() {

var computerPlayer = [];
var answers = [];
var rounds = 0;
var strict = true;

function addPadColor(arr) {
	var padColors = ["green", "red", "yellow", "blue"];
	return arr.push(padColors[Math.floor(Math.random() * padColors.length)]);
}

function padFlash(arr) {
  var i = 0;
  var interval = setInterval(function() {
    $("#" + arr[i]).fadeTo("fast", 0).fadeTo("slow", 1);
    $("#sound-" + arr[i])[0].play();
    i++;
    if (i >= arr.length) {
      clearInterval(interval);
    }
  }, 700);
};

function resetAnswers() {
  answers = [];
};

function Rounds() {
  rounds++;
  $("#score").html(rounds);
};

function resetGame() {
  rounds = 0;
  computerPlayer = [];
  resetAnswers();
};

function playersTurn() {
  $("#mode").click(function() {
    return false;
  });

  
  if (rounds === 20) {
    $("#goodMessage").html("Good job mate!");
    resetGame();
  }
  Rounds();
  addPadColor(computerPlayer);
  padFlash(computerPlayer);

  $(".pad").off("click").on("click", function() {
    $("#sound-" + $(this).attr("id"))[0].play();
    answers.push($(this).attr("id"));

    for (var i = 0; i < answers.length; i++) {
      
      if (JSON.stringify(computerPlayer) === JSON.stringify(answers)) {
        resetAnswers();
        playersTurn();
        break;
      }
      if (answers[i] !== computerPlayer[i]) {
        if (strict === false ) {
          resetAnswers();
          padFlash(computerPlayer);
        } else if (
          answers[i] !== computerPlayer[i] 
         
        ) {
          $(".score-screen").html("XXX");
          $(".start-btn").toggleClass("r");
          resetGame();
          break;
        }
      }
    }
  });
};

$("#mode").click(function() {
  switch (strict) {
    case true:
      strict = false;
      $(".mode").html("Relaxed");
      $("#mode").toggleClass("g");
      break;
    case false:
      strict = true;
      $(".mode").html("Strict");
      $("#mode").toggleClass("r");
      break;
  }
});

$("#start").click(function() {
	$(this).toggleClass("g");	
  	playersTurn();
});

});





