const prompt = require('prompt-sync')();

//User input a number that generates a corresponding day of week or error.

const someNum =  prompt("Please enter a number that will generate a day of the week.");

if (someNum == 1) {
    console.log("Monday")
}
else if (someNum == 2) {
    console.log("Tuesday")
}
else if (someNum == 3) {
    console.log("Wednesday")
}
else if (someNum == 4) {
    console.log("Thursday")
}
else if (someNum == 5) {
    console.log("Friday")
}
else if (someNum == 6) {
    console.log("Saturday")
}
else if (someNum == 7) {
    console.log("Sunday")
}
else if (someNum == 0) {
    console.log("\"error\"")
}
else if (someNum >= 8) {
    console.log("\"error\"  ")
}