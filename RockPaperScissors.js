function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
   }

   function playRound (computerSelection,playerSelection){
    if (playerSelection===computerSelection){
        return ("it's a draw");
    } else if (playerSelection==="paper" && computerSelection==="rock" ||
               playerSelection==="rock" && computerSelection==="scissors" ||
               playerSelection==="scissors" && computerSelection==="paper"){
                return (`you win! computer chose ${computerSelection}`);
    } else {
        return (`you lose. computer chose ${computerSelection}`)
    }
   }

   let playerSelection = prompt("rock paper scissors?").toLowerCase();
   let computerSelection = getComputerChoice();

   console.log(playRound(computerSelection,playerSelection))