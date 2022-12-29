let playerScore = 0;
let computerScore = 0;

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
                playerScore++;
                return (`you win! computer chose ${computerSelection}`);
    } else {
        computerScore++;
        return (`you lose. computer chose ${computerSelection}`)
    }
   }

   function game() {
    for (let i = 0; i < 5; i++){ 
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("rock paper scissors?").toLowerCase();
        console.log(playRound(computerSelection,playerSelection));
        console.log(`Player score:${playerScore}. Computer score:${computerScore}`);
    }}
    game()
    