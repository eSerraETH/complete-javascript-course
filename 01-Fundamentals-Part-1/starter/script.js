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

//Maintenant = ENTER

console.log(`String with
multiple
lines`);



//Taking decisions

const age = 15;
//if (true) code is executed
if (age >= 18) {
    console.log("Ely peut faire son permis!")
} else { //else doit suivre la dernière "}"
    const yearsLeft = 18 - age;
    console.log(`Ely est trop jeune. Il doit attendre
     ${yearsLeft} ans`);
}

//structure if/else :

if () {

} else {

}* /


const birthYear = 1999;
let century; //Need to define variable avant {}
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//Coding Challenge #2

const markMass = 60;
const johnMass = 95;

const markHeight = 1.69;
const johnHeight = 1.95;

let markBMI, JohnBMI;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

const isHeavier = markBMI > johnBMI;
//console.log(markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI);
//console.log(isHeavier);

if (isHeavier) {
    console.log(`Mark's BMI (${markBMI})
    is higher than John's BMI (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI})
    is higher than Mark's BMI (${markBMI})!`)
};


//Type Conversion & Coercion

const inputYear = "1999";
//console.log(Number(inputYear));
console.log(Number("Ely")); //NaN (doesn't work)
console.log(typeof NaN); // =Number, mais invalide
console.log(String(23));

console.log("I am " + 23 + " years old"); // 23 Coercion into a "string"
console.log("23" - "10" - 3); // Coercion into values
console.log("23" * "2"); // Coercion into values
console.log("23" > "18"); // Coercion into values

let n = "1" + 1; // ="11"
n = n - 1; // = 10
2 + 3 + 4 + "5" // = 95


//Truthy and falsy values

// 5 falsy values : 0 , "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ely"));
console.log(Boolean({})); //empty object = true

const money = 0; // 0 is converted to false
if (money) {
    console.log("Don't spend it all!")
} else {
    console.log("You should get a job")
}

let height = 0; // false, even though it's defined to "0" bug?
if (height) {
    console.log("YAY! Height is defined")
} else {
    console.log("Height is undefined!")
}


// Equality operators

const age = 18;
if (age === 18) console.log("You just became an adult"); // 18 === 18 is true
// "strict" === no type coercion "18" === 18 (false)
// "loose" == type coercion "18" == 18 (true) , loose should be avoided, causes many bugs

const favourite = prompt("What is your favorite number?")
console.log(favourite);
console.log(typeof favourite); //string
if (favourite == 23) { //type coercion to transform "23" into 23
    console.log("Cool woo!")
}
 //if (favourite === 23) {
 //   console.log ("Cool woo!") fonctionnerait pas
}
//il faut changer favourite pour un number pour utiliser ===

const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);
console.log(typeof favourite); //number
if (favourite === 23) {
    console.log("23 is cool woo!")
} else if (favourite === 7) {
    console.log("7 is cool too woo!")
} else {
    console.log("Your favourite number is not 23 or 7")
}

if (favourite !== 23) console.log("Why not 23?"); //!== est équivalent à === (mais contraire)


//Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); //and
console.log(hasDriversLicense || hasGoodVision); //or
console.log(!hasDriversLicense); //not

if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah can drive")
} else {
    console.log("Someone else should drive")
}

const isTired = true // C

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah can drive")
} else {
    console.log("Someone else should drive")
}


//Coding Challenge #3

const dolphinsGameOne = 300;
const dolphinsGameTwo = 108;
const dolphinsGameThree = 89;

const koalasGameOne = 88;
const koalasGameTwo = 91;
const koalasGameThree = 110;

const dolphinsAverage = ((dolphinsGameOne + dolphinsGameTwo + dolphinsGameThree) / 3);
const koalasAverage = ((koalasGameOne + koalasGameTwo + koalasGameThree) / 3);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins win!")
} else if (dolphinsAverage === koalasAverage && (dolphinsAverage && koalasAverage) >= 100) {
    console.log("It's a draw!")
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log("Koalas win!")
} else {
    console.log("Nobody wins!")
}



//The switch statement

const day = "saturday";

stwich (day) {
    case "monday": //day ==="monday"
        console.log("Arms day");
        console.log("Eat food")
        break; //break to stop code from running
    case "tuesday":
        console.log("Leg Day")
        break;
    case "wednesday":
    case "thursday":
        console.log("Rest day");
        break
    case "friday":
        console.log("Back & Shoulders")
        break
    case "saturday":
    case "sunday":
        console.log("Have fun");
        break
    default:
        console.log("Not a valid day")

}

// challenge in video

const day = "sunday"
if (day === "monday") {
    console.log("Arms day");
    console.log("Eat food")
} else if (day === "tuesday") {
    console.log("Leg Day")
} else if (day === "wednesday" || "thursday") {
    console.log("Rest day")
} else if (day === "friday") {
    console.log("Back & Shoulders")
} else if (day === "saturday" || "sunday") {
    console.log("Have fun")
} else {
    console.log("Not a valid day");
}

// Statements and expression

3 + 4 //this is an expression
1999 //"
true && false && !false //"

if (23>10){ //if else is a statement, switch is a statement
    const str = "23 is bigger"; //string is an expression, values are expressions
}

// The Conditional (Ternary) Operator

const age = 19
age >= 18 ? console.log("I can drink wine!") : console.log("I can drink water!");

const drink = age >= 18 ? "wine!" : "water!";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine!"
} else {
    drink2 = "water!"
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine!" : "water!"}`); //drink fonctionne aussi

// Coding Challenge #4

const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(bill, tip, bill + tip)
*/