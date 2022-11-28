let playerPoints = 0;
let computerPoints = 0;
let playerChoice = "";

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
    playerPoints++;
    sendText(`${playerChoice} beats ${computerChoice}. Player wins this round.`);
  } else if ((playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors")) {
    winner = "computer";
    computerPoints++;
    sendText(`${computerChoice} beats ${playerChoice}. Computer wins this round.`);
  } else {
    console.log("Something unexpected happened in the playRound function.");
  }
  updateScores();
  checkScores();
}

function updateScores() {
  playerScoreboard.textContent = `Player Score: ${playerPoints}`;
  computerScoreboard.textContent = `Computer Score: ${computerPoints}`;
}

function checkScores() {
  if (playerPoints >= 3) {
    sendText("The player has won the game!!! A victory against our machine overlords! Congratulations.");
  } else if (computerPoints >= 3) {
    sendText("The computer has won the game!!! You have failed humanity.");
  } else {
    return;
  }
}

function newGame() {
  playerPoints = 0;
  computerPoints = 0;
  clearOutput();
  updateScores();
}

NewGameButton.addEventListener('click', function() {newGame()});
TestOutput.addEventListener('click', function() {testOutput()});
ClearOutput.addEventListener('click', function() {clearOutput()});
RockButton.addEventListener('click', function() {playRound("rock")});
PaperButton.addEventListener('click', function() {playRound("paper")});
ScissorsButton.addEventListener('click', function() {playRound("scissors")});

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