let playerSelection = prompt ("Rock, Paper or Scissors?").toLowerCase()

let generateComputerChoice = Math.floor(Math.random() * 3)


function getComputerChoice(){
if (generateComputerChoice===0) {
    return ("rock"); 
} else if (generateComputerChoice===1) {
    return ("scissors");
} else {
    return ("paper");
}
}

let computerChoice = getComputerChoice();

function getWinner() {
    if (playerSelection === "rock" && computerChoice === "scissors" || 
                playerSelection === "scissors" && computerChoice === "paper" ||
                playerSelection === "paper" && computerChoice === "rock") {
                    alert (`computer chose ${computerChoice}. You Win!!`);

    }  else if (playerSelection===computerChoice) {
        alert(`Computer chose ${computerChoice}.It's a draw!`);

    } else if (playerSelection !== "rock" || "paper" || "scissors") {
        alert("Not a valid selection")
   
    }   else {
        alert(`computer chose ${computerChoice}. You Lose :(`);
 }
}
alert (getWinner())
