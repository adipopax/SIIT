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
// console.log(sum);

const hello = 'Hello'
const world = 'World'

// concatenation
// console.log(hello + ' ' + world);

let name = 'Tom';
name += ' Jerry';

// console.log(name);

// Template literal -> backticks -> it's let us interpolate expression via '${}'
// console.log(
// `Tom 

//             Jerry
// `);
// Can put anything
const stringNumber = '123';
//console.log(`${hello} ${world} ${1 + 2 + 3 + 4 + 5}`);
//console.log(`${hello} ${world} ${Number(stringNumber)}`);

//console.log(Number('123') + 3);
// bug! |
//console.log('123' + 3);
//console.log(123 + 3);

/* 
    Conditional statements - crossroad
*/

// How would we determine if a number is odd or even

const testNumber = 13;

if(testNumber % 2 == 0){
    //console.log('Your number is even');
} else {
    //console.log('Your number is odd');
}

/*
const testNumber2 = 14;

if(testNumber2 % 2 == 0){
    console.log('Your number is even');
} else {
    console.log('Your number is odd');
}
*/

const testNumber3 = 33; //prompt('Please type in your test number');

if(testNumber3 % 2 == 0){
    //console.log('Your number is even');
} else {
    //console.log('Your number is odd');
}

//console.log(testNumber3 + 100);


// +prompt('Please type in your test number') same thing as Number() (Number is more explicit)

const userInput =  33 ;//Number(prompt('Please type in your test number (User Input)'));

if(userInput % 2 == 0){
    //console.log('Your number is even');
} else {
    //console.log('Your number is odd');
}

//console.log(userInput + 100);


// Conditional statements - cross road

// How would we determinate is a number is odd pr even

// MORE EXAMPLES

const userInput2 =   33;//prompt('Please type in your test number (userInputAsNumber)');
const userInputAsNumber = Number(userInput2);
// Converts expression to boolean
// Truthy or Falsy values
const isEven = userInput2 % 2 == 0;

// if is odd log odd if is even log even
    if(userInput2 % 2 == 0){
   // console.log('Your number is even');
} 
    else {
   // console.log('Your number is odd');
}

//console.log(userInputAsNumber + 100);
//console.log(userInput + 200);

// never use == always use ===
// == it verify if is true
// == it verify if it true and if is the type of data is correct

/*
    if user inputs a number lower than 10 show hello
    if user inputs a number lower than 20 show hi
    if user inputs a number lower than 30 show hello world
    if the number is anything bigger than 30 show Awesome
    if the number is equal with 30 show something
*/

let userInput3 =  33;//prompt('Please input a number : ');

// debugger;

if (userInput3 === '' ) {
    userInput3 = promptInvalidUserInput();
} 

const userInput3AsNumber = Number(userInput3);

if (isNaN (userInput3AsNumber)) {
    userInput3AsNumber = Number(promptInvalidUserInput());
}

if (userInput3 < 10 ) {
    console.log('hello');
} else if (userInput3 < 20) {
    console.log('hi');
} else if (userInput3 < 30) {
    console.log('hello world');
} else if (userInput3 >= 30) {
   console.log('Awesome');
} else {
    console.error('Your input was not a number')
}

/**
 * By default all functions produce undefined as result;
 * In order for a function to result as we need to: return;
 * Pure functions -> doesn't modify things from outside only relies on inputs to produce a value;
 *  */

function promptInvalidUserInput() {
    console.log(' You entered invalid information ! Please enter a number');
    const userInput = prompt(' You entered invalid information ! Please enter a number');

    return userInput; 
}

/**
 * If user input is between 10 and 15 display Hello users
 * 
 * If user input is 20 or 30 display YES!
 */

/**
 * Logical operators
 * and &&
 * or ||
 */

const userInput4 = 15;

if (userInput4 >= 10 && userInput4 <= 15) {
    console.log('Hello user');
}

if (userInput4 === 20 || userInput4 === 30) {
    console.log('YES!');
}

/**
 * When checking for equality between anything 
 * If user input is 20 show Yes 20
 * If user input is 30 show Yes 30
 * If user input is 40 show Yes 40
 * else 50
 * 
 * is user input is 50 or 60 Yes something
 * 
 * in this case if can be case
 * and             else can be default
 */

const userInput5 = 60;

switch (userInput5) {
    case 20: {
        console.log('Yes 20');
        break;
        // break is important if there's no break it will execute the code as is should
    }
    case 30: {
        console.log('Yes 30');
        break;
    }
    case 40: {
        console.log('Yes 40');
        break;
    }
    case 50:
    case 60: {
        console.log('Yes something');
        break;
    }
    default: {
        console.log('Yes 50');
    }
}


/**
 * Complex data types :
 * 
 * Array's - Will contain primitive values or other complex data types
 * Object's - Will contain primitive values or other complex data types
 */

const shoppingList = ['Turkey', 'Bread', 'Meat', 'Vegetables', 'Fruits'];
// All items are stored on an index 
/**
 * Bread - 0
 * Meat - 1
 * Vegetables - 2
 * Fruits - 3
 */

 console.log(shoppingList);

// Adds items to the end of the list
shoppingList.push('Something new')

// Adds items to the beginning of the list
shoppingList.unshift('Start of the list');

// Remove element from the end of the list
shoppingList.pop();

// Remove first element from the the list
shoppingList.shift();

// Remove the element based on the index
// shoppingList.splice(2, 1);

// find the index of an item
const toRemoveIndex = shoppingList.indexOf('Vegetables');
shoppingList.splice(toRemoveIndex, 1);

console.log(shoppingList);

/**
 * const shoppingList = ['Turkey', 'Bread', 'Meat', 'Vegetables', 'Fruits'];
 * 
 * ['Turkey: 0', 'Bread: 1', 'Meat: 2', 'Vegetables: 3', 'Fruits: 4'];
 */

const quantity = [3, 10, 6, 20, 15]
const shoppingListWithQuantity = [];

for (let index = 0; index < shoppingList.length; index++) {
    const product = shoppingList[index];
    const qnt = quantity[index];

    shoppingListWithQuantity.push(`${product}: ${qnt}`);
}

console.log(shoppingListWithQuantity);
