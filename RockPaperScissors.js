function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
   }

function getWinner() {
    if (playerSelection == "rock" && computerChoice == "scissors" || 
                playerSelection == "scissors" && computerChoice == "paper" ||
                playerSelection == "paper" && computerChoice == "rock") {
                    alert (`Computer chose ${computerChoice}. You Win!!`);
                  

    }  else if (playerSelection==computerChoice) {
        alert(`Computer chose ${computerChoice}. It's a Draw!`);
        

    }   else {
        alert(`Computer chose ${computerChoice}. You Lose!`);
        
 }
}
alert (getWinner())

