
// Generate a secret number in the inclusive range 1 through 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Change this test value to try different guesses.

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within three numbers of the secret.
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}