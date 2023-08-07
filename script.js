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


function playRound(playerSelection, computerSelection) { // Compares playerSelection and computerSelection to decide who wins
    console.log(computerSelection)
    if (playerSelection === computerSelection){
        
        return `Game tied! You have ${playerPoints} points and the computer has ${computerPoints} points`
        
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {

        computerPoints = computerPoints + 1

        return `You lose! You have ${playerPoints} points and the computer has ${computerPoints} points`

    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {

        playerPoints = playerPoints + 1
        return `Congratulations! You have ${playerPoints} points and the computer has ${computerPoints} points`

    }
  }

  const buttons = document.querySelectorAll('.btn')
  let playerPoints = 0
  let computerPoints = 0
  
  document.querySelector('.sel').innerHTML = "Your selection: None"
  buttons.forEach(e => {
    e.addEventListener('click',function event() { // Runs the round when you press the button
        if (playerPoints < 5 && computerPoints < 5){
            let playerSelection = e.id
            document.querySelector('.sel').innerHTML = "Your selection: " + playerSelection
            document.querySelector('.decission').innerHTML = playRound(playerSelection, getComputerChoice())
            if (playerPoints === 5 || computerPoints === 5) { // Declares a winner after 5 rounds
                let winner = () => {
                    if (playerPoints === 5){
                        return "Player"
                    } else if (computerPoints === 5){
                        return "Computer"
                    }
                }
                document.querySelector('.sel').innerHTML = ""
                document.querySelector('.winner').innerHTML = winner() + " wins!"
            }
        }
    })
  })