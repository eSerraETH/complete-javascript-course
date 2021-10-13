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

//Coding Challenge #1

const calcAverage = (scoreOne, scoreTwo, scoreThree) => ((scoreOne + scoreTwo + scoreThree) / 3)

const dolphinsAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);

const dolphinsAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);



function checkWinner(dolphinsAverage, koalasAverage) {
    if (dolphinsAverage >= (koalasAverage * 2)) {
        return `Dolphins win! ${dolphinsAverage} vs ${koalasAverage}`
    } else if (koalasAverage >= (dolphinsAverage * 2)) {
        return `Koalas win! ${koalasAverage} vs ${dolphinsAverage}`
    } else {
        return `Nobody wins!`;
    }
}

console.log(checkWinner(dolphinsAverage1, koalasAverage1)
)
console.log(checkWinner(dolphinsAverage2, koalasAverage2)
)

//Introduction to arrays

const friend1 = "John"
const friend2 = "Thom"
const friend3 = "Joblo"

const friends = ["John", "Thom", "Joblo"];
console.log(friends);

const years = new Array(1999, 2000, 2001, 2002); //same thing, used less

console.log(friends[0]) //array commence par 0 (pas 1)
console.log(friends[2]);
console.log(friends.length); // 3
console.log(friends[friends.length - 1]) //avoir le dernier

friends[2] = "Bob" //mutate array
console.log(friends)
// friends = ["Tony" , "Jason"] peut pas mutate TOUT l'array

const firstName = "Ely"
const ely = [firstName, "Serra", 2021 - 1999, "programmer", friends]; //array in arrays
console.log(ely)

//Exercise

function calcAge(birthYear) {
    return 2021 - birthYear
}

const years = [2005, 2010, 2011, 2015];

console.log(calcAge(years)); // NaN , dans fonction peut pas faire 2021 - array

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
console.log(age1, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);

*/