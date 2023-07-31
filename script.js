function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0){
        return "rock"
    } else if (randomNumber === 1){
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
        return "Game tied!"

    } else if ((playerSelection.toLowerCase() && computerSelection === "paper") || (playerSelection.toLowerCase() && computerSelection === "scissors") || (playerSelection.toLowerCase() && computerSelection === "rock")) {

        return `You lose! ${computerSelection} beats ${playerSelection}.`

    } else if ((playerSelection.toLowerCase() && computerSelection === "scissors") || (playerSelection.toLowerCase() && computerSelection === "paper") || (playerSelection.toLowerCase() && computerSelection === "rock")){

        return `Congratulations! ${playerSelection} beated ${computerSelection}!`

    } else {

        return "Only type rock, paper os scissors!"

    }
  }

  function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your selection? (make sure to open the console to see the result!)");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
  }
   
  game()
