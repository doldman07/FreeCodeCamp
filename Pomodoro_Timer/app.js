$(document).ready(function() {
'use strict';
var clockTimer = parseInt(document.getElementById("sessionLength").innerHTML, 10);
var breakTimer = parseInt(document.getElementById("breakTime").innerHTML, 10);

var minutes = .05;//original time is 25
var breakTime = 5;
var isPaused = false;
var timerId = 0;
var timeBreak;

// $("#sessionLength").text(minutes);
$("#resume").hide();
$("#pause").hide();
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    timerId = setInterval(function () {
      if(!isPaused){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (timer-- === 0) {
            timer = duration;
            clearInterval(timerId);
            $("#play").show();
            $("#pause").hide();
            $("#sessionTitle").html("Break Time");
            myBreakTime();           
        }

      }

    }, 1000);

}

function startPomodoro(min){

  var fiveMinutes = 60 * min,
  display = $('#sessionTime');
  startTimer(fiveMinutes, display);
}


function myBreakTime() {
	var mins = .1;
	var secs = mins * 60;
	var currentSeconds = 0;
	var currentMinutes = 0;
	timeBreak = setInterval(function() {
		$("#sessionTime").html(breakTime);
		currentMinutes = Math.floor(secs / 60);
		currentSeconds = secs % 60;
		if(currentSeconds <= 9) {
			currentSeconds = "0" + currentSeconds;
		}
		secs--;
		if (secs == -1) {	
			clearInterval(timeBreak);  
      $("#sessionTitle").html("Break is over");
      // reset(); 
		}
		
		// $("#play, #reset").attr("disabled", true);
    // $("#play, #reset").hide();
		document.getElementById("sessionTime").innerHTML = currentMinutes + ":" + currentSeconds;

	}, 1000);
}
function reset() { 
  // $("#sessionTitle").html("Break is over");
  document.getElementById("sessionTime").innerHTML = "25";
  document.getElementById("breakTime").innerHTML = breakTime;
  // clearInterval(timeTest);
}


// Session length actions

$("#decreaseSession").click(function(){
  if(minutes > 1){
    minutes -= 1;
    $("#sessionLength").text(minutes);
    $("#sessionTime").text(minutes);
  }

});

$("#increaseSession").click(function(){
  if(minutes < 60){
    minutes += 1;
    $("#sessionLength").text(minutes);
    $("#sessionTime").text(minutes);
  }

});

$("#decreaseBreak").click(function(){
  if(breakTime > 1){
    breakTime -= 1;
    $("#breakTime").text(breakTime);
  }
});

$("#increaseBreak").click(function(){
  if( breakTime < 15){
    breakTime += 1;
    $("#breakTime").text(breakTime);
  }

});


// Start button
$("#play").click(function(){
  $("#decreaseSession, #increaseSession").attr("disabled", true);
  $(this).hide();
  isPaused = false;
  startPomodoro(minutes);
  $("#pause").show();
});

//Stop button
$("#pause").click(function(){
  $(this).hide();
  $("#resume").show();
  isPaused = !isPaused;
});

//Resume button
$("#resume").click(function(){
  $(this).hide();
  $("#pause").show();
  isPaused = !isPaused;

});

//Reset button
$("#reset").click(function(){
  $("#decreaseSession, #increaseSession").attr("disabled", false);
  $("#sessionTime").html(clockTimer);
  $("#breakTime").html(breakTimer);
  $("#sessionTitle").html("Session Time");
  $("#pause").hide();
  $("#resume").hide();
  $("#play").show();
  clearInterval(timerId);
  // $("#sessionTime").text(minutes);
});

});







































