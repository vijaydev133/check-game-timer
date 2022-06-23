let ply1 = document.getElementById("pl1-timer");
let ply2 = document.getElementById("pl2-timer");

let ply1m = document.getElementById("pl1Min");
let ply2m = document.getElementById("pl2Min");

let start = document.getElementById("start");
let swap = document.getElementById("swap");
let reset = document.getElementById("reset");

var ID1 = 0;
var ID2 = 0;

var seconds1 = 00;
var seconds2 = 00;

var minutes1 = 5;
var minutes2 = 5;

var flag = 0;

swap.disabled = true;

function timedec1() {
  if (minutes1 <= 0 && seconds1 <= 00) {
    alert("player1 game over");
    resetTimer();
  } else {
    if (seconds1 <= 00) {
      --minutes1;
      seconds1 = 59;
    } else {
      --seconds1;
    }

    ply1.innerText = seconds1;
    ply1m.innerText = minutes1;
  }
  flag = 1;
}

function timedec2() {
  if (minutes2 <= 0 && seconds2 <= 00) {
    alert("player2 game over");
    resetTimer();
  } else {
    if (seconds2 <= 00) {
      --minutes2;
      seconds2 = 59;
    } else {
      --seconds2;
    }

    ply2.innerText = seconds2;
    ply2m.innerText = minutes2;
  }
}

function startTimer() {
  ID1 = window.setInterval(timedec1, 1000);
  flag = 1;
  start.disabled = true;
  swap.disabled = false;
}


function swapTimer() {
  if (flag == 1) {
    window.clearInterval(ID1);
    ID2 = window.setInterval(timedec2, 1000);
    flag = 0;
  } else {
    window.clearInterval(ID2);
    startTimer();
  }

}



function resetTimer() {
  window.clearInterval(ID1);
  window.clearInterval(ID2);

  seconds1 = "00";
  seconds2 = "00";

  minutes1 = 5;
  minutes2 = 5;

  ply1.innerText = seconds1;
  ply2.innerText = seconds2;

  ply1m.innerText = minutes1;
  ply2m.innerText = minutes2;

  start.disabled = false;
  swap.disabled = true;
}

start.addEventListener("click", startTimer);
swap.addEventListener("click", swapTimer);

reset.addEventListener("click", resetTimer);


