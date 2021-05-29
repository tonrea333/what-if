const prompt = require('prompt-sync')();

//Input from user.

const yAge = prompt("How old are you?");

//List of response statements based on user inputs.



if (yAge < 16) {
    console.log("You can't drive."); 
}else if (yAge >= 16  && yAge <= 17) {
    console.log("You can drive but not vote.")
}else if (yAge >= 18 && yAge <= 24) {
    console.log("You can vote but not rent a car.")
}else if (yAge >= 25) {
    console.log("You can do pretty much anything.")
}
