
NewGameButton.addEventListener('click', game());

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  let computerChoice = ""
  if (randomInt === 0) {
    computerChoice = "rock";
  } else if (randomInt === 1) {
    computerChoice = "paper";
  } else if (randomInt === 2) {
    computerChoice = "scissors";
  } else {
    console.log("Something has gone wrong with getComputerChoice.")
  }
  return computerChoice;
}

function getPlayerChoice() {
  let choiceStatus = false;
  let choiceAttempt = "";
  let playerChoice = "";
  while (choiceStatus === false) {
    choiceAttempt = showPrompt();
    if (choiceAttempt === "rock" || choiceAttempt === "paper" || choiceAttempt === "scissors") {
      playerChoice = choiceAttempt;
      choiceStatus = true;
    } else {
      alert("You f**king donkey. That is an invalid option.");
    }
  }
  return playerChoice;
}

function showPrompt() {
  let input = window.prompt("Rock, Paper, or Scissors?");
  let cleanInput = input.toLowerCase();
  return cleanInput;
}

function playRound() {
  let winner = ""
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  console.log(`Player choice is ${playerChoice} and computer choice is ${computerChoice}.`);
  if (playerChoice === computerChoice) {
    winner = "tie";
    console.log("It's a tie!")
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
    winner = "player";
    console.log(`${playerChoice} beats ${computerChoice}. Player wins this round.`);
  } else if ((playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors")) {
    winner = "computer";
    console.log(`${computerChoice} beats ${playerChoice}. Computer wins this round.`);
  } else {
    console.log("Something unexpected happened in the playRound function.");
  }
  return winner;
}

//Function to play the actual game consisting of multiple rounds.
function game() {
  console.log("The game begins. First to 3 points is the winner.");
  let playerPoints = 0;
  let computerPoints = 0;
  let roundWinner = "";
  while (playerPoints < 3 && computerPoints < 3) {
    roundWinner = playRound();
    if (roundWinner === "player") {
      playerPoints++;
    } else if (roundWinner === "computer") {
      computerPoints++;
    } else if (roundWinner === "tie") {
      console.log("That round was a tie.");
    } else {
      console.log("Something unexpected happened in the game function.");
    }
    console.log(`Current score is ${playerPoints} for the human and ${computerPoints} for the computer.`);
  }
  console.log(`The winner of the game is ${roundWinner}! Congratulations to them.`);
}



//Test playing multiple rounds.
/*
let i = 1;
while (i <= 5) {
  playRound();
  i++;
}
*/

//Test getting multiple player choices.
/*
let i = 1;
while (i <= 3) {
  console.log(`Player choice ${i} is ${getPlayerChoice()}.`);
  i++;
}
*/

//Test getting multiple computer choices.
/*
let i = 1;
while (i < 10) {
  console.log(`Computer choice ${i} is ${getComputerChoice()}.`);
  i++;
}
*/
