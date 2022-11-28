let playerPoints = 0;
let computerPoints = 0;

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

function playRound(playerChoice) {
  let winner = ""
  let computerChoice = getComputerChoice();
  sendText(`Player choice is ${playerChoice} and computer choice is ${computerChoice}.`);
  if (playerChoice === computerChoice) {
    winner = "tie";
    sendText("It's a tie!")
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
    winner = "player";
    sendText(`${playerChoice} beats ${computerChoice}. Player wins this round.`);
  } else if ((playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors")) {
    winner = "computer";
    sendText(`${computerChoice} beats ${playerChoice}. Computer wins this round.`);
  } else {
    console.log("Something unexpected happened in the playRound function.");
  }
  return winner;
}

//Function to play the actual game consisting of multiple rounds.

function game() {
  sendText("The game begins. First to 3 points is the winner.");

  let roundWinner = "";
  while (playerPoints < 3 && computerPoints < 3) {
    roundWinner = playRound();
    if (roundWinner === "player") {
      playerPoints++;
    } else if (roundWinner === "computer") {
      computerPoints++;
    } else if (roundWinner === "tie") {
      sendText("That round was a tie.");
    } else {
      console.log("Something unexpected happened in the game function.");
    }
    sendText(`Current score is ${playerPoints} for the human and ${computerPoints} for the computer.`);
  }
  sendText(`The winner of the game is ${roundWinner}! Congratulations to them.`);
}

NewGameButton.addEventListener('click', function() {game()});
TestOutput.addEventListener('click', function() {testOutput()});
ClearOutput.addEventListener('click', function() {clearOutput()});
RockButton.addEventListener('click', function() {playRound(rock)});
PaperButton.addEventListener('click', function() {playRound(paper)});
ScissorsButton.addEventListener('click', function() {playRound(scissors)});

let playerScoreboard = document.querySelector(".PlayerScore");
let computerScoreboard = document.querySelector(".ComputerScore");
//playerScoreboard.textContent = "Player Score: 1";

let testOutputNumber = 1
function testOutput() {
  console.log("Firing test output.");
  sendText(`Firing test output number ${testOutputNumber}.`);
  testOutputNumber++;
}

let outputParagraph = document.getElementById("TextField");
function sendText(outboundText) {
  console.log(`Sending the following text to the textarea: ${outboundText}`);
  outputParagraph.value += outboundText;
  outputParagraph.value += `\n`;
  outputParagraph.scrollTop = outputParagraph.scrollHeight;
}

function clearOutput() {
  outputParagraph.value = "";
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
