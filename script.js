
function computerPlay () {
  let choice = ["rock", "paper", "scissors"];
  let com_pick = choice[Math.floor(Math.random() * 3)];
  return com_pick;
}

function playRound (playerSelection, computerSelection) {

  // coditional check who win
  if (playerSelection === computerSelection) {
    return "Draw!!!!!";
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    }
    else if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors"
    }
  } 
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You Lose! Scissors beats paper";
    }
    else if (computerSelection === "rock") {
      return "You Win! Paper beats Rock"
    }
  } 
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose!";
    }
    else if (computerSelection === "paper") {
      return "You Win!"
    }
  } 
}

// Game play 
function game() {
  let round = 5;
  let comScore = 0;
  let playerScore = 0;
  // Loop each round
  while (round > 0) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Enter the your choice:").toLowerCase();
    console.log(playerScore)
    console.log(comScore)
    if (playRound(playerSelection, computerSelection) == "You Win!"){
      playerScore++;
    }
    else {
      comScore++;
    };
    round--;
  }
  console.log(playerScore, comScore)
  if (playerScore > comScore) {
    return "You win this game!!"
  } else {
    return "Computer win this game!!!"
  };
}

console.log(game())
