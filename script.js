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
    let userPoints = 0
    let computerPoints = 0

    if (playerSelection == computerSelection){
        return "Game tied!"

    } else if ((playerSelection.toLowerCase() && computerSelection === "paper") || (playerSelection.toLowerCase() && computerSelection === "scissors") || (playerSelection.toLowerCase() && computerSelection === "rock")) {

        computerPoints = computerPoints + 1
        console.log(getComputerChoice())
        return `You lose! You have ${userPoints} points and the computer has ${computerPoints} points.`
        

    } else if ((playerSelection.toLowerCase() && computerSelection === "scissors") || (playerSelection.toLowerCase() && computerSelection === "paper") || (playerSelection.toLowerCase() && computerSelection === "rock")){

        userPoints = userPoints + 1
        return `Congratulations! You have ${userPoints} points and the computer has ${computerPoints} points.`

    } else {

        return "Only type rock, paper os scissors!"

    }
  }

  const buttons = document.querySelectorAll('#btn')
  buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.innerHTML
        document.querySelector(".sel").innerHTML = "Your selection: " + button.innerHTML
        document.querySelector('.decission').innerHTML = playRound(playerSelection, getComputerChoice())
   })
  })
