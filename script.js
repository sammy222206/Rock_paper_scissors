//Logic to get the computer choice.
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0 ){
        return "rock";
    }
    else if (computerChoice === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}
// Logic to get the human choice.
function getHumanChoice() {
    const humanChoice = prompt("Enter: rock, paper, or scissors");
    if (humanChoice === null) {
        alert("You cancelled the game.");

      }
     return humanChoice
}


//logic to play the entire game

//players score variables
let humanScore = 0;
let computerScore = 0;

//logic to play a single round
function playRound(humanChoice, computerChoice) {
    let humanChoiceLower = humanChoice.toLowerCase();
    let computerChoiceLower = computerChoice.toLowerCase();
    if (humanChoiceLower === computerChoiceLower) {
        console.log("It's a tie!");
    } else if (
        (humanChoiceLower === "rock" && computerChoiceLower === "scissors") ||
        (humanChoiceLower === "paper" && computerChoiceLower === "rock") ||
        (humanChoiceLower === "scissors" && computerChoiceLower === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoiceLower} beats ${computerChoiceLower}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoiceLower} beats ${humanChoiceLower}`);
    }
    // Displaying the score
    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);

}
// Loop to play 5 rounds
function playGame() {
for (let round = 1; round <= 5; round++){
    console.log (`Round ${round}`);
    playRound(getHumanChoice(), getComputerChoice());
}
console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);
// Logic to determine the winner
if (humanScore > computerScore) {
    console.log("You win the game!");

}
else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
}
else {
    console.log("It's a tie!");
}
}
// Call the function to start the game
playGame();

