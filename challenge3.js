// Given an array of strings, return only the words that begin with the letter "t".

// Log only the words that start with "t" from an array of strings.
// 
// Start with an array - let's do names.
// Use a for loop to pull names from the array.
// Use an if statement to add a condition .startsWith("t")
// Log that statement to the console.

var friendNames = ["Sarah", "Tom", "Terry", "Jon", "Tim", "Martin"]

for (i = 0; i < friendNames.length; i++) {
    if (friendNames[i].startsWith("T")) {
        console.log(friendNames[i])
    }
}

// If we wanted to, we can establish this as a function instead.

function onlyT(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].startsWith("T")) {
            console.log(array[i])
        }
    }
}

onlyT(friendNames)