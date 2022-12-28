let playerSelection = prompt ("Rock, Paper or Scissors?")

let generateComputerChoice = Math.floor(Math.random() * 3)


function getComputerChoice(){
if (generateComputerChoice===0) {
    return ("Rock"); 
} else if (generateComputerChoice===1) {
    return ("Scissors");
} else {
    return ("Paper");
}
}

let computerChoice = getComputerChoice();

function getWinner() {
    if (playerSelection === "Rock" && computerChoice === "Scissors" || 
                playerSelection === "Scissors" && computerChoice === "Paper" ||
                playerSelection === "Paper" && computerChoice === "Rock") {
                    alert (`computer chose ${computerChoice}. You Win!!`);

    }  else if (playerSelection===computerChoice) {
        alert(`Computer chose ${computerChoice}.It's a draw!`);

    } else if (playerSelection !== "Rock" || "Paper" || "Scissors") {
        alert("Not a valid selection")
   
    }   else {
        alert(`computer chose ${computerChoice}. You Lose :(`);
 }
}
alert (getWinner())
