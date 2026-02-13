"use strict";

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice() {
    let humanChoice = prompt(
      "Make your choice! Choose either rock, paper or scissors!",
    );
    return humanChoice.toLowerCase();
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      humanScore++;
      computerScore++;
      console.log(`It's a draw!! Both players chose ${humanChoice}!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win!! Congrats ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(
        `You lose!! ${computerChoice} beats ${humanChoice} , better luck next time!`,
      );
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: Player: ${humanScore} vs Computer: ${computerScore}`);
  }

  // Scores

  if (humanScore > computerScore) {
    console.log("Match Over: You won the match! Congrats!!");
  } else if (computerScore > humanScore) {
    console.log("Match Over: The computer won the match! Bad luck!!");
  } else {
    console.log("Match Over: It's a draw!!");
  }
}

playGame();
