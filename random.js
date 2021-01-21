// Take values from buttons
//show win tie and losses counters
// variable my user choice
// variable the computer choice
// and some prompt to play again

var wins = 0;
var lose = 0;
var tie = 0;
var computerChoices = ["rock", "paper", "scissors"];
var userChoices;

function getRock() {
  //give value to userChoices with rock button
}

function getPaper() {
  //give value to userChoices with paper button
}

function getScissors() {
  //give value to userChoices with scissors button
}

function randomCPU() {
  var index = Math.floor(Math.random() * computerChoices.length);
  var CPChoice = computerChoices[index];

  return CPChoice;
}

function playGame() {
  //randomize computer choice

  // if statements comparing user choice with computer choice
  if (userChoices === CPChoice) {
    ties++;
  } else if (
    (userChoices === "rock" && CPChoice === "S") ||
    (userChoices === "paper" && CPChoice === "R") ||
    (userChoices === "scissors" && CPChoice === "P")
  ) {
    wins++;
  } else {
    lose++;
  }
  //assign computer choice to computer button

  //assign win, losses and tie counter with html element
}
