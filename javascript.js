console.log("In console");
function start() {
  var choices = ["rock", "paper", "scissors"];
  var choice = Math.floor(Math.random() * choices.length);
  var compChoice = choices[choice];
  var computerChoice = document.getElementById("computerChoice");
  var alertArea = document.getElementById("winner");
  var rockAnswer = document.getElementById("rock");
  var paperAnswer = document.getElementById("paper");
  var scissorsAnswer = document.getElementById("scissors");

  rockAnswer.addEventListener("click", function () {
    if (compChoice === "paper") {
      alertArea.textContent = "Winner";
      computerChoice.textContent = "Paper";
    }
  });
}

start();
