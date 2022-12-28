let playerSelection = prompt("Rock, Paper or Scissors?")

let options = ["Apples","Bananas","Pears"];
  
function getComputerChoice (){ 
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice ;
}


  console.log (getComputerChoice())




