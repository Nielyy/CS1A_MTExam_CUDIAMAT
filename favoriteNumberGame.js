// Declare a variable for the favorite number
let theFavNumber = Math.floor(Math.random() * 100) + 1; // Assign a random number between 1 and 100
let userGuess; // Declare a variable for user's guess

// Use a while loop to prompt the user until they guess correctly
while (true) {
    userGuess = prompt("Guess the favorite number (between 1 and 100):"); // Get user input
    userGuess = parseInt(userGuess); // Convert input to a number

    if (userGuess === theFavNumber) {
        console.log("Correct! You guessed the favorite number.");
        break; // Exit loop if guess is correct
    } else if (userGuess < theFavNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}