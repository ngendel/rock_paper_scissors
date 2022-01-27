'use strict';


function computerPlay() {
 let random = Math.floor(Math.random()*100);
 (computerPlay);
  if (random <= 33) {
    let choiceRock = "rock";
    return choiceRock;
  }

  if (random <= 66) {
    let choicePaper = "paper";
    return choicePaper;
  }

  if (random >= 67) {
    let choiceScissors = "scissors";
    return choiceScissors;
  }

} // only comes out if you put in on console
//capture all nodes first 
const selectionButtons = document.querySelectorAll('[data-selection]');
  selectionButtons.forEach((selection) => {
  select.addEventListener('click', e => {
    return selection;
  })
})


  



function playRound(playerSelection, computerSelection) {

  playerSelection = prompt("What will it be... rock, paper, or scissors").toLowerCase();

  computerSelection = computerPlay();

  if (playerSelection == "rock" && computerSelection == "scissors") { //player selection : rock
    let win = 1;
    console.log(
      "You win! Rock beats Scissors! computer chose scissors!"
    )
  }

  if (playerSelection == "rock" && computerSelection == "rock") {
    let draw = 0;
    console.log(
      "It's a draw! computer chose rock!"
    )
  }

  if (playerSelection == "rock" && computerSelection == "paper") {
    let loss = 1;
    console.log(
      "You lose! Paper beats rock! computer chose paper!"
    )
  }

  if (playerSelection == "paper" && computerSelection == "scissors") { //player selection : paper
    let loss = 1;
    console.log(
      "You lose! Scissors beats paper!, computer chose scissors!"
  
    )
  }

  if (playerSelection == "paper " && computerSelection == "paper") {
    let draw = 1
    console.log(
      "its a Draw! computer chose paper!"
    )
  }

  if (playerSelection == "paper" && computerSelection == "rock") {
    let win = 1;
    console.log(
      "You win! Paper beats rock! computer chose rock!"
    )
  }

  if (playerSelection == "scissors" && computerSelection == "scissors") { //player selection : scissors
    let draw = 1;
    console.log(
      "Its a draw! computer chose scissors!"
    )
  }

  if (playerSelection == "scissors" && computerSelection == "paper") {
    let win = 1;
    console.log(
      "You win! Scissors beats paper! computer chose paper!"
    )
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    let lose = 1;
    console.log(
      "You lose! Rock beats scissors! computer chose rock!"
    )
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));



//for (let i = 0; i < 5; i++) { //for loop to play 5 rounds of rps game.
 // const i = playRound()
//}











