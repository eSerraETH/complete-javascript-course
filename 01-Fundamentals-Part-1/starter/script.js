// Test github
/*
console.log(69)
Write this out

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 69);
//console.log(typeof "Ely");

javascriptIsFun = "WOO!"
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1999


// math operators
const yearNow = 2040
const ageEly = yearNow - 1999;
const ageThom = yearNow - 2001;
console.log(ageEly, ageThom);
console.log(ageEly * 2, ageEly / 2, ageEly ** 2);
// ** 2 veut dire exposant 2

const firstName = "Ely";
const lastName = "Serra";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageEly > ageThom); // >, <, >=, <=
console.log(ageThom >= 18);

const isFullAge = ageThom >= 18;

console.log(yearNow - 1999 > yearNow - 2001);


const yearNow = 2040
const ageEly = yearNow - 1999;
const ageThom = yearNow - 2001;

console.log(yearNow - 1999 > yearNow - 2001)

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 (calcul en premier, = est plus bas dans l'ordre)
console.log(x, y);
const averageAge = (ageEly + ageThom) / 2;
console.log(ageEly, ageThom, averageAge);


//Coding Challenge #1
const markMass = 78;
const johnMass = 95;

const markHeight = 1.69;
const johnHeight = 1.95;

let markBMI, JohnBMI;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

const isHeavier = markBMI > johnBMI;
console.log(markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI);
console.log(isHeavier);
*/

//String and templates

const firstName = "Ely";
const job = "STC";
const birthYear = 1999;
const year = 2020
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; //{ctrl + alt + 1xGauche ENTER}, `1xGauche ENTER` 
console.log(jonasNew);
console.log(`N'importe quel String...`);

//legacy
console.log(`String with \n\
multiple \n\
lines`);
//Maintenat = ENTER
console.log(`String with
multiple
lines`);
