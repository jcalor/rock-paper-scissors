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
    console.log("Computer selection: " + getComputerChoice())
    
    if (playerSelection === computerSelection){
        return 'Game tied!'

    } else if ((playerSelection && computerSelection === "paper") || (playerSelection && computerSelection === "scissors") || (playerSelection && computerSelection === "rock")) {

        return `You lose!`

    } else if ((playerSelection && computerSelection === "scissors") || (playerSelection && computerSelection === "paper") || (playerSelection && computerSelection === "rock")){

        return `Congratulations!`

    }
  }

  const buttons = document.querySelectorAll('.btn')
  buttons.forEach(e => {
    e.addEventListener('click',() => {
        let playerSelection = e.id
        document.querySelector('.sel').innerHTML = "Your selection: " + playerSelection
        document.querySelector('.decission').innerHTML = playRound(playerSelection, getComputerChoice())
    })
  })
  
