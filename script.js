let randomNumber = Math.floor(Math.random() * 3)

function getComputerChoice(){
    if (randomNumber === 0){
        return "Rock"
    } else if (randomNumber === 1){
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    console.log(playerSelection)
    if (playerSelection == computerSelection){
        return "Game tied!"
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")){
        return `Congratulations! ${playerSelection} beated ${computerSelection}!`
    } else {
        return "Only type rock, paper os scissors!"
    }
  }

  function game(){
    getComputerChoice()
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
  }
   
  const playerSelection = prompt("What is your selection?");
  const computerSelection = getComputerChoice();
  game()
