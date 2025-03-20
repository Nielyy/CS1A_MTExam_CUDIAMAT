// Create an array to store three colors
let colorPreferences = [];

// Loop to collect three color preferences from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter color ${i + 1}:`); // Ask the user for a color
    colorPreferences.push(color); // Add the color to the array
    console.log(`Updated color list: ${colorPreferences}`); // Print the updated array
}

// Print the final list of colors
console.log("Final color preferences:", colorPreferences);