const prompt = require('prompt-sync')();

//List of constants to be used in equation

const actualWeight = prompt ("What is your current weight on Earth?");
const whatPlanet = prompt ("Enter number 1-6 for planet you would like to fight on?");

const pltVenus = ("1");
const pltMars = ("2");
const pltJupiter = ("3");
const pltSaturn = ("4");
const pltUranus = ("5");
const pltNeptune = ("6");

//Equation for inputs that produce an output for user.

if (whatPlanet == pltVenus) {
    console.log(actualWeight * .78, "is your weight on Venus.")
}
else if (whatPlanet == pltMars) {
    console.log(actualWeight * .39, "is your weight on Mars.")
}
else if (whatPlanet == pltJupiter) {
    console.log(actualWeight * 2.65, "is your weight on Jupiter.")
}
else if (whatPlanet == pltSaturn) {
    console.log(actualWeight * 1.17, "is your weight on Saturn.")
}
else if (whatPlanet == pltUranus) {
    console.log(actualWeight * 1.05, "is your weight on Uranus.")
}
else if (whatPlanet == pltNeptune) {
    console.log(actualWeight * 1.23, "is your weight on Neptune.")
}



