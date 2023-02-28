export function getComputerChoice() {
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