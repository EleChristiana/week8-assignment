
function checkGuess(guess) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (guess < randomNumber) {
    console.log("Too low!");
  } else if (guess > randomNumber) {
    console.log("Too high!");
  } else {
    console.log("Correct! You guessed the number.");
  }
}

const userGuess = 30; 
checkGuess(userGuess);