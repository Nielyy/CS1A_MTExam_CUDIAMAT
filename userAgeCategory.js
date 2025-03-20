// Collect user age using prompt()
let userAge = prompt("Enter your age:"); // Get the user's age
userAge = parseInt(userAge); // Convert the input to a number

// Determine the user's age category using conditional statements
if (userAge < 5) {
    console.log("You are a Toddler (under 5 years).");
} else if (userAge >= 5 && userAge <= 12) {
    console.log("You are a Child (5–12 years).");
} else if (userAge >= 13 && userAge <= 19) {
    console.log("You are a Teenager (13–19 years).");
} else if (userAge >= 20 && userAge <= 35) {
    console.log("You are a Young Adult (20–35 years).");
} else if (userAge >= 36 && userAge <= 60) {
    console.log("You are Middle-Aged (36–60 years).");
} else {
    console.log("You are a Senior (over 60 years).");
}