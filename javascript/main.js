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

let sum2 = 10;
// sum2 --  => 9;
// sum2 +=  => 20;
// sum2 -=  => 0;
// sum2 *=  => 100;

// Expression -> code that evaluates to a value
sum2++;
// sum2 = sum2 + 10;
// sum2 = sum2 / 10 * 2;
// sum2 = sum2 / (10 * 2);
// console.log(sum2);

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


// const array = ['hello', 12, 34, true, false, null, undefined, [1, 2, 3, [1, 2, 3]]];

const array = ['hello', 'test'];


array[0]

/**
 * Create a custom functionality to sum two numbers together
 */


// this works because of hoisting
// 4, 5 are function arguments
console.log(sum(4, 5));

// function declaration
function sum(a, b) {
    // a, b function parameters
    return a + b ;
} 

// function expression
const sum3 = function(a, b) {
    return a + b;
}

const sumResult = sum3(10, 12);

console.log(sum3);
console.log(sum3(10, 12));

// ARROW FUNCTION


/**
 * Notice:
 *  - function keyword is gone
 *  - return keyword is gone
 *  - function curly braces are gone
 */
const arrowFunctionSum = (a ,b) => a + b;

const arrowFunctionSum2 = (a, b) => {
    console.log('I have multiple lines');
    return a + b;
};

const result = arrowFunctionSum(2, 3);
console.log(result);


/**
 * ! Callback functions !
 */
/**
 * Only add together positive numbers
 * 
 * Callback parameter will be a function
 */

function onlyPositive(a, b, callback) {
    // early return -> when the return is not at the end of the function
    if (a  > 0 && b > 0) {
        // if (action === '+') {
        //     return add(a, b);
        // } else {
        //     return subtract (a, b);
        // }


        /**
         * This will be 
         * add function 
         * or subtract function
         * based on what the user of this function provides us
         */
        return callback(a, b);
    }

    console.log('Hello world');

    return false
}

/**
 * Only subtract positive numbers
 */

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

// Multiply
function multiply(a, b) {
    return a * b
}


console.log('Show only positive' , onlyPositive(4, 5, add));
console.log('Show only positive and Subtract',subtract(10, 20, subtract));
console.log('Show only positive and Multiply',multiply(10, 20, multiply));


// LOOPS

for (let i = 0; i < 10; i++ ) {
    console.log(i);
}

// for (let i = 9; i >= 0; i-- ) {
//     console.log(i);
// }

const shoppingList2 = ['Turkey', 'Bread', 'Meat', 'Vegetables', 'Fruits'];

// For of

for (const product of shoppingList2) {
    console.log('For of ', product);
}

for (let i = 0; i < shoppingList2.length; i++ ) {
    console.log('For of #2', shoppingList2[i]);
}

// While loop

let index = 0;

// condition
while ( index < shoppingList2.length) {
    // execute
    console.log('While', shoppingList2[index]);
    index++;
}

//do while

let index2 = 0;

do {
    console.log('Do while', shoppingList2[index2]);
    index2++;
}   while (  index2 < shoppingList2.length );

/**
 * Where is our list of products ['apple', 'banana']
 * Listen to a button click
 * take products from the list and store it somewhere
 */


// OBJECTS

const firstName = 'Alin';
const lastName = 'Patroi';
const dateOfBirth = '1993-2-3';

/**
 * Objects have :
 *  - properties ( Key )
 *  - methods ( Functions )
 * 
 * Objects consist of key - value pairs
 */

// Objects literal

const alin = {
    firstName: 'Anlin',
    lastName: 'Patroi',
    dateOfBirth: '1993-2-3',
};

const house = {
    rooms: 3,
    roof: true,
    squareMeters: 34,
    floors: 3,
    'hello-world': 'something else',
    '2orice-ne-dorim-noi': '',
    3: 'ce vrei tu',
    'hello-world': 'Hello World',
    roomConfiguration: ['Kitchen', 'Bathroom'],
    roomDetails: {
        kitchen: {
            doors: 2,
            windows: 1,
        }
    },
    openDoor: function() {
        console.log('door has been opened')

        return true
    },
    getNumberOfConfigurations() {
        this.openDoor();

        return this.roomConfiguration.length;
    }
};

const objectKeyName = '2orice-ne-dorim-noi';

house.rooms;
house.roomDetails.kitchen.doors;
house["hello-world"];
house[objectKeyName];

house.rooms = 4;

house.openDoor();

console.log(house.getNumberOfConfigurations());

console.log(house);

house.newProperty = 'newProperty';
house['newProperty'] = 'newProperty';

delete house.newProperty;

/**
 * For in to iterate over object keys
 */

for (const key in house) {
    console.log(house[key]);
}

// console.log(Object.value(house));
// console.log(Object.keys(house));

for (const propertyValue of Object.values(house)) {

}

const availableProducts = [
    {
        id: '1',
        productName: 'Set Pacco..',
        price: 200,
    },
    {
        id: '2',
        productName: 'Lama de ras',
        price: 200,
    },
];
const discounts = [
    {
        discountForProductId: '1',
        percent: 20,
    },
    {
        discountForProductId: '2',
        percent: 50,
    },
];