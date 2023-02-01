const choice = document.querySelectorAll("img");
let playerScore = 0;
let computerScore = 0; 


choice.forEach((weapon)=> 
  weapon.addEventListener("click", ()=> {
    if(weapon.id){
        playRound(getComputerChoice(),weapon.id);
        console.log (playerScore, computerScore)
        checkWinner();
        gameReset();
    }}
  ))

function updateInfo (gameResult){
  document.querySelector(".result-info").textContent = gameResult;
}

function updateScore (playerScore,computerScore) {
  document.querySelector(".player-score").textContent = `You: ${playerScore}`;
  document.querySelector(".computer-score").textContent = `Computer: ${computerScore}`;
}

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
   }

function playRound (computerSelection,playerSelection){
  if (playerSelection===computerSelection){
        updateInfo(`It's a draw. Computer chose ${computerSelection}.`);
  } else if 
      (playerSelection === "paper" && computerSelection === "rock" ||
       playerSelection === "rock" && computerSelection === "scissors" ||
       playerSelection === "scissors" && computerSelection === "paper"){
         playerScore ++;
        updateInfo(`You win! Computer chose ${computerSelection}.`);        
  } else {
        computerScore ++;
        updateInfo(`You lose. Computer chose ${computerSelection}.`);
     }   
     updateScore(playerScore,computerScore);
     
   }

function checkWinner() { 
  if (playerScore === 5) {
     document.querySelector(".result-info").textContent = "Congratulations! You are the first to win 5 rounds!";
  } else if (computerScore === 5) {
         document.querySelector(".result-info").textContent = "Unlucky! The computer won 5 rounds.";
  } else return;
}
  
function gameReset() {
    if (playerScore === 5 || computerScore === 5) {
        document.querySelector(".result-info").textContent += " Want to play again?";
    } else return; 
}
   