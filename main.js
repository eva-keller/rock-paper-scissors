const prompt = require('prompt-sync')();
 
const playerSelection = prompt("what's your choice? Rock, paper or scissors? ").toLowerCase();
console.log(`"Your choice is ${playerSelection}."`);

function computerPlay() {
const choice = ["rock","paper","scissors"];
const random=  Math.floor((Math.random() * choice.length));
const randomChoice=choice[random];
return randomChoice;
}

const computerSelection = computerPlay();
console.log(`"The computer chose ${computerSelection}."`);

//comparison

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Equal.";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        return "Computer won.";
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You won."
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You won."
    }else if (playerSelection == "paper" && computerSelection == "paper"){
        return "Equal."
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "Computer won."
    }else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "Equal."
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "Computer won."
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You won."
    }else {
        return "Something went wrong, try again";
    }
  }
  


//console.log(playRound(playerSelection, computerSelection));

