// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 

// Create an array of travel destinations, then log those destinations in alphabetical order. Use string interpolation to create a sentence to log to the console.

// Start with an array of strings
// Use a for loop to pull every value in that array.
// Use an array method to organize those values alphabetically, then set that to a new variable
// Log to the console a sentence with interpolation using the new variable.
var citiesToVisit = ["New York", "London", "Seattle", "Tokyo", "Berlin"]
for (i = 0; i < citiesToVisit.length; i++) {
    var citiesOrdered = citiesToVisit.sort();
    console.log(`I want to visit ${citiesOrdered[i]} next!`)
}
