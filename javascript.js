function getComputerChoice(){
    let computer = ["rock", "paper", "scissor"];
    let random = computer[Math.floor(Math.random() * computer.length)];
    return random;
  }
  
  let playerSelection = prompt("rock, paper, scissor:");
  let computerSelection=getComputerChoice();
  
  function playsSingleRound (playerSelection,computerSelection){
    
    if(playerSelection == computerSelection){
        return "tie";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You loses! paper beats rock";
    }else if(playerSelection =="scissor"&& computerSelection== "paper"){
        return "You win! scissor beats paper";
    }else if(playerSelection=="rock"&& computerSelection=="scissor"){
        return "You win! rock beats scissor"; 
    }else if(playerSelection=="paper" && computerSelection=="rock"){
        return "You win! paper beats rock"; 
    }else if(playerSelection=="paper"&& computerSelection=="scissor"){
        return "You loses! scissor beats paper";  
    }else if(playerSelection=="scissor" && computerSelection=="rock"){
        return "You loses! rock beats scissor"; 
    }
}
  
  console.log(computerSelection);
 
  console.log(playsSingleRound(playerSelection,computerSelection));