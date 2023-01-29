const mainContainer = document.querySelector(".main-container"); 

mainContainer.addEventListener("click", assignPlayerChoice);

function assignPlayerChoice (e) {
    let playerSelection = e.target; 
    console.log (playerSelection);
  }



let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
   }

   function playRound (computerSelection,playerSelection){
    if (playerSelection !== "rock" && playerSelection !== "paper" &&
        playerSelection  !== "scissors") {
         return ("Not a valid input. Try again.");
    
    } else if (playerSelection===computerSelection){
        return ("it's a draw");
      
    } else if (playerSelection==="paper" && computerSelection==="rock" ||
               playerSelection==="rock" && computerSelection==="scissors" ||
               playerSelection==="scissors" && computerSelection==="paper"){
                playerScore++;
                return (`you win! computer chose ${computerSelection}`);

    } else {
        computerScore++;
        return (`you lose. computer chose ${computerSelection}`);
    }
   }

    
  
   