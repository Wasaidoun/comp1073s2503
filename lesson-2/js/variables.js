/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
let myName;
let myAge;

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Waseem"
myAge = 23;

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "Waseem Al-Sharif";
myAge = 57; // myAge is now 24

// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;

// Strings (use '' or "" or ``)
let manufacturer = "Honda";
let carYear = 2017;
console.log(`My car is a ${carYear} ${manufacturer}`);
// Booleans
let isCarCool = true;
// Arrays
let myCarArray = ["Honda", "Toyota", "Mazda"];
let myMixedArray = ["Waseem", 23, true];
// Objects
let myDog = {
	name: "Rex",
	age: 5,
	breed: "Labrador",
	goodDog: true
};

// STEP 5: Typing (JavaScript is a loosely-typed language)

