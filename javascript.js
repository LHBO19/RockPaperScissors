function init(){
  document.querySelector('#computerChoice').innerHTML = ''
  document.querySelector('#winner').innerHTML = ''
}
init();

var wins = 0;
var lose = 0;
var tie = 0;
var computerChoices = ["rock", "paper", "scissors"];

function randomCPU() {
  var index = Math.floor(Math.random() * computerChoices.length);
  var CPChoice = computerChoices[index];

  return CPChoice;
}

function userPick( user ){
  var computer = randomCPU()

  console.log( `[userPick] user(${user}) computer(${computer})` )
  
  var winner = decideWinner( computer, user )
  console.log( ` winner: ${winner}` )
  
  document.querySelector('#computerChoice').innerHTML = computer
  document.querySelector('#winner').innerHTML = winner
  console.log( ` game round complete!` )
}
