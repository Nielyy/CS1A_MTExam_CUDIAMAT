// Ask the user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)");

// If the user agrees, proceed with collecting grocery items
if (createList.toLowerCase() === 'y') {
    let groceryList = []; // Initialize an empty grocery list
    let numItems = prompt("Enter the number of items for the grocery list:"); // Get the number of items
    numItems = parseInt(numItems); // Convert input to number

    // Collect grocery items from the user
    for (let i = 0; i < numItems; i++) {
        let item = prompt(`Enter item ${i + 1}:`); // Get grocery item
        groceryList.push(item); // Add item to the list
    }

    // Sort the grocery list
    let groceryList_Sort = [...groceryList].sort(); // Create a sorted copy
    let groceryList_Reverse = [...groceryList].reverse(); // Create a reversed copy

    // Display the lists using alert
    alert(`Original List: ${groceryList}\nSorted List: ${groceryList_Sort}\nReversed List: ${groceryList_Reverse}`);
}