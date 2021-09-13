// Strict Mode

// visible errors, stops us from doing certain things
"use strict"; //has to be very first line

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true //erreur volontaire pour test strict mode
if (hasDriversLicense) console.log("I can drive");

const interface = "Audio";
*/

// Functions

function logger() {
    console.log("My name is Ely")
}

// calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 2);
console.log(appleOrangeJuice);
