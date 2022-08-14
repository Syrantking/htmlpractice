console.log("Hello World Again!")

//let keyword declares a variable

let message;
message = 'Hello!';
//alert(message);

//alternatively:

let message2 = 'Hello!';
//alert(message2);

//also:

let user = 'John', age = 25, message3 = 'Hello';

/*
let user = 'John', 
    age = 25, 
    message3 = 'Hello';
*/



//also also:

let user2 = 'John';
let age2 = 25;
let message4 = "Hello four";

// var is the old school version of let.

//LET

let hi = "Hi!";
let msg;
msg = hi;
// now both variables hold the same data

//variable naming:
//VALID

let userName;
let test123;
let $ = 1;
let _ = 2;

// INVALID
//let 1a; // cannot start with a number
//let my-name; // hyphens are not allowed

//CASE MATTERS. Apple and APPLE are two different variables

// non latin letters are allowed, but don't fucking use them

// let let = 5; //cant name let
// let return = 5; //cant name it return

// can declare variable without let if USE STRICT mode is not enabled

//CONSTANTS

const myBirthday = '01.02.1992';

//myBirthday = WRONG, can't reassign a const

// UPPERCASE CONST

const COLOR_RED = "F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";

let color = COLOR_GREEN;
//alert(color);

// single quotes and double quotes are the same
// escaping characters

const bigmouth = 'I\'ve got no right to take my place...';

//concating strings
// You can use a TEMPLATE LITERAL
const greeting = `hello`;

const myName = 'Chris';
const greet = `Hello, ${myName}`;
alert(greet);

//Alternate joining
const one = '1';
const two = '2';
const twelve = `${one}${two}`;
console.log(twelve); //prints 12

// numbers vs strings

const name1 = "Front";
const number1 = 242;
console.log(`${name1}${number1}`); // "Front 242"

const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum) // converts string to a number

//every number has a method called toString() that converts to equivalent string.
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

// Template literals respect the line breaks in the source code
const output = `I like
the name
of the
song`
console.log(output);

//Conditionals 
// if/else is the same shit as usual

let x = 1;
let y = 2;

if (x > y)
    console.log("Hello World");

if (x == y)
{
    console.log ("Test");
}
else{
    //dont log shit
}

// ||
// &&
// Precedence of AND is higher than OR

let value = true; //true
let result = !value; //false
//
switch(value)
{
    case x:
        break;
    case y:
        break;
    default:
        //execute default code block
}

//functions

function favAnimal(animal){
    console.log(animal)
}

favAnimal("lizard");
// ReferenceError: when variable is not declare of initialized with the current scope.
// Syntax Error: Incorrectly written code
// TypeError: when an operand or argument passed to a function is incompatible
// or tryint to modify a value that cannot be changed

let animals = ["frog", "lizard", "salamander"];
//alternatively:
const cars = new Array("frog", "lizard", "salamander");
//common practice to use CONST to declare arrays
//OBJECTS
const personArray = ["John", "Doe"];
const personObject = {firstName: "John", lastName: "Doe"};
console.log(person.firstName);