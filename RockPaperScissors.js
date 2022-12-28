let playerSelection = prompt ("Rock, Paper or Scissors?").toLowerCase()

let options = ['rock','paper','scissors']

let computerChoice = options [Math.floor(Math.random()*options.length)]


console.log (computerChoice)

function getWinner() {
    if (playerSelection == "rock" && computerChoice == "scissors" || 
                playerSelection == "scissors" && computerChoice == "paper" ||
                playerSelection == "paper" && computerChoice == "rock") {
                    alert (`Computer chose ${computerChoice}. You Win!!`);

    }  else if (playerSelection==computerChoice) {
        alert(`Computer chose ${computerChoice}. It's a draw!`);

    }   else {
        alert(`Computer chose ${computerChoice}. You Lose!`);
 }
}
alert (getWinner())
