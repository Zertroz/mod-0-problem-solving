// Given an array of strings, return only the strings that have exactly 4 characters.
// 
// Create an array of strings and then return only the strings that have 4 characters.
// Array of data - we'll do names
// Pull all the names that are exactly 4 letters - for loop with if statement - by logging it to the console.
// 
// declare a variable that stores the array of names as string values.
// Create a for loop in order to access that array mulitple times.
// Add a condition to the for statement by adding an if statement to the codeblock beneath it. 
// Set the if statement to only accept names that are exactly 4 characters.
// Log to the console after the if statement.

var names = ["Kass", "Sarah", "Silus", "Alec", "Joe", "Nick"]

for (i = 0; i < names.length; i++) {
    var name = names[i]
    if (name.length === 4) {
        console.log(name)
    }
}

// Can remove var name and simply use names[i].length

for (i = 0; i < names.length; i++) {
    if (names[i].length === 4) {
        console.log(names[i])
    }
}