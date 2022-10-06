let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};
//console.log(generateTarget());
function compareGuesses(humanGuess, computerGuess, targetGuess) {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference ? true : false;
}
const updateScore = (winner) => {
  if (winner === "human") {
    return (humanScore += 1);
  } else if (winner === "computer") {
    return (computerScore += 1);
  }
};
const advanceRound = () => {
  return (currentRoundNumber += 1);
};
