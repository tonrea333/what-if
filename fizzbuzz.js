const prompt = require('prompt-sync')();

//Question for user that prompts for input

const varNum = prompt("Please enter a random number for a hidden message.");

//Takes input and process through formula to derive appropriate output



if (varNum % 3 == 0 && varNum % 5 == 0) {
    console.log("\"fizzbuzz\"");
}
else if (varNum % 3 == 0) {
    console.log("\"fizz\"");
}
else if (varNum % 5 == 0) {
    console.log("\"buzz\"")
}
