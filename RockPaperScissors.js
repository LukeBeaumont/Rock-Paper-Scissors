const rockButton = document.querySelector(".rock"); 
const paperButton = document.querySelector(".paper"); 
const scissorsButton = document.querySelector(".scissors"); 

const choice = document.querySelectorAll(".player-option");
let playerScore = 0;
let computerScore = 0; 


choice.forEach((weapon)=> 
  weapon.addEventListener("click", ()=> {
    if(weapon.id){
        playRound(getComputerChoice(),weapon.id);
    }}
  ))

function updateInfo (gameResult){

    const resultInfo = document.querySelector(".result-info");
    resultInfo.innerHTML = gameResult;
}

function updateScore (playerScore,computerScore) {
    //  change innerhtml
  document.querySelector(".player-score").innerHTML = `You: ${playerScore}`;
    
  document.querySelector(".computer-score").innerHTML = `Computer: ${computerScore}`;
}

function getComputerChoice() {
    //update DOM with computers choice 
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
   }

function playRound (computerSelection,playerSelection){
     if (playerSelection===computerSelection){
        updateInfo(`It's a draw. Computer chose ${computerSelection}`);
      } else if 
              (playerSelection==="paper" && computerSelection==="rock" ||
               playerSelection==="rock" && computerSelection==="scissors" ||
               playerSelection==="scissors" && computerSelection==="paper"){
              playerScore ++;
               updateInfo(`You win! Computer chose ${computerSelection}`);
        } else {
        computerScore ++;
        updateInfo(`You lose. Computer chose ${computerSelection}`);
        
    }   updateScore(playerScore,computerScore);
   }

    
  
   