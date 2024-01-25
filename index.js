console.log('Hello world');

// console.log('What is your firstname?');
// let fname = prompt('Enter your firstName:');

// console.log('What is your lastname?');
// let lname = prompt('Enter your lastname:');

// console.log('Hello ' + fname + ' ' + lname);


//naming variables cannot be a reserve keyword
//should be meaningful names or labels
//cannot start with a number
// cannot ccontain a space or hypen
// camelnotation - firstName
//case-sensitive
// decaring two or variables are seperated by comma
console.log('Constant');

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//use let to reassign a variable

console.log('Primitive Data types/ Value types');
let name ='Jossa'; //string literal
let age = 22; //number literal
let isPassed = true; // true or false
let firstName = undefined;
let lastname = null; //to explicitly clear the value of the variable

console.log('Dynamic Language');
//type of the variable can be change
console.log('objects');
// like an object in real life
let person = {
    name:'Jossa',
    age: 22,
};
console.log(person);
//key value pairs
// dot notation person.name = 'Josh';
// one way to access the property is by bracket notation person['name] = 'Mary';
console.log('Arrays');

let selectedColors = ['red', 'blue', 'green']; //array literal
selectedColors[2] = 'yellow'; //used to change the value
selectedColors[1] = '2';

//console.log(selectedColors[0]); used to access an array
//index determine the position of an element in the array
//console.log(selectedColors.length); to get how many value we have in an array

console.log('Functions'); // a statements that perform a logic

function greet(name, lastname){  //inside the () is called parameters
    //body
    console.log('hello ' + name + ' ' + lastname);
    
}//no need semicolon

greet('Josh', 'Smith'); //argument actual value suuplied by the parameter

console.log('Types of Functions');

function square(number){
    return number * number;
}
console.log(square(2));
