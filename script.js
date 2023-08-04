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

    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {

        return `You lose!`

    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {

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
