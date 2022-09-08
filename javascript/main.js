// We need JS in order to give instructions
// We should achieve this via functions
// We have variables at our disposal

// var let const
/*
      var - old way of doing things

      let, const - new way of working

      const > let >  var
*/

// Assign a value via  '='
var ageIon = 23;
let ageMaria = 34;
const ageCostin = 35;

const greeting = 'Hello World';
const greeting2 = "Hello World2";

// Declared constant pi and assigned value 3.14
const pi = 3.14;

console.log(pi);
/*
    Primitive data types :

    words -> strings  
    numbers -> Max 64 bytes
    boolean -> true or false
    undefined -> no value assigned -> in general it's assigned by JS
    null -> it doesn't have a value -> in general it's assigned by Developer
    Symbol -> Unique values in JS  Symbol('Hello');
    BigInt -> 234n -> Exceeds 64 bytes
    
    Complex data types :
    array (list) - ex: shopping list 
    object -> ex: car, house, person
  
*/

//! Not defined error means we didn't defined the actual variable

// boolean
const weAreSiit29 = true;

// undefined
const variableUndefined = undefined;

let variableUndefined2 = 'Siit-29';

variableUndefined2 = null;

/* 
    Variable naming restriction 

    Variable name can only start with letter or '_' or '$'

*/

const hello2 = '';
const houseCat = 'Tom';

/* 
    Addition : +
    Subtraction : -
    Multiply : *
    Divide : /
    Power : **
    Modulo : %
*/

let sum = 10;
// sum --  => 9;
// sum +=  => 20;
// sum -=  => 0;
// sum *=  => 100;

// Expression -> code that evaluates to a value
sum++;
// sum = sum + 10;
// sum = sum / 10 * 2;
// sum = sum / (10 * 2);
console.log(sum);

const hello = 'Hello'
const world = 'World'

// concatenation
// console.log(hello + ' ' + world);

let name = 'Tom';
name += ' Jerry';

console.log(name);

// Template literal -> backticks -> it's let us interpolate expression via '${}'
console.log(
`Tom 

            Jerry
`);
// Can put anything
const stringNumber = '123';
console.log(`${hello} ${world} ${1 + 2 + 3 + 4 + 5}`);
console.log(`${hello} ${world} ${Number(stringNumber)}`);

console.log(Number('123') + 3);
// bug! |
console.log('123' + 3);
console.log(123 + 3);

/* 
    Conditional statements - crossroad
*/

// How would we determine if a number is odd or even

const testNumber = 13;

if(testNumber % 2 == 0){
    console.log('Your number is even');
} else {
    console.log('Your number is odd');
}

/*
const testNumber2 = 14;

if(testNumber2 % 2 == 0){
    console.log('Your number is even');
} else {
    console.log('Your number is odd');
}
*/

const testNumber3 = prompt('Please type in your test number');

if(testNumber3 % 2 == 0){
    console.log('Your number is even');
} else {
    console.log('Your number is odd');
}

console.log(testNumber3 + 100);


// +prompt('Please type in your test number') same thing as Number() (Number is more explicit)

const userInput = Number(prompt('Please type in your test number (User Input)'));

if(userInput % 2 == 0){
    console.log('Your number is even');
} else {
    console.log('Your number is odd');
}

console.log(userInput + 100);


// MORE EXAMPLES

const userInput2 = prompt('Please type in your test number (userInputAsNumber)');
const userInputAsNumber = Number(userInput2);
// Converts expression to boolean
// Truthy or Falsy values
const isEven = userInput2 % 2 == 0;

// if is odd log odd if is even log even
if(userInput2 % 2 == 0){
    console.log('Your number is even');
} else {
    console.log('Your number is odd');
}

console.log(userInputAsNumber + 100);

// never use == always use ===
// == it verify if is true
// == it verify if it true and if is the type of data is correct