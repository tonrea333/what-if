const prompt = require('prompt-sync')();

//Input statement for user.

const ranNum = prompt("Please enter a random number to determine number of groups of 3 and  groups of 2. ")

//Some constants

const groupThree = (  ranNum/3 ) 

const remainNum = (ranNum%3)

//Calculation and corresponding output based on inputs.

if (remainNum == 1){
    const remTwo= (groupThree-(groupThree - 1));
    const gthreeMone =(groupThree-1);
    const twoThre = ( (2*(remTwo + 1))/2);
    console.log ("There are", Math.round(gthreeMone), "and", twoThre, "groups of two.")
} else if (remainNum == 0) {
    console.log ("There are",groupThree, "groups of three and", "zero groups of two!")
}

