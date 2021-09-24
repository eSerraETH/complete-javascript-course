// Strict Mode

// visible errors, stops us from doing certain things
"use strict"; //has to be very first line

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true //erreur volontaire pour test strict mode
if (hasDriversLicense) console.log("I can drive");

const interface = "Audio";

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

// Function declaration and expressions

//function declaration

function calcAge1(birthYear) { //can call a declaration before defining it
    return 2021 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1)

//function expression

const calcAge2 = function (birthYear) { //expression hold a value
    return 2021 - birthYear;
}

const age2 = calcAge2(1999);
console.log(age2);


//Arrow functions

const calcAge2 = function (birthYear) { //expression hold a value
    return 2021 - birthYear;
}

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1999);
console.log(calcAge3(1999)); //log sans save la value
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - (birthYear)
    const retirement = 65 - age
    //return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, "Ely"));
console.log(yearsUntilRetirement(1980, "John"));
*/

//Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//Reviewing Functions


