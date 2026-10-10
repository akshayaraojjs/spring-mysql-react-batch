// JavaScript is a Scripting/Programming Language used for multi-purpose.
// It is flexible & powerful.
// There was a conflict with name for JavaScript & Java
// JavaScript was modified or transformed to EcmaScript (ES)
// 2015 new changes have been introduced which is called as ES6

// How to run JS file in node environment?
// node filename.js

// Variables & Scope: 

// var is the old way of declaring the variable, which is completely flexible which can cause serious issues while building some application because of no difference in Global & Local Scope.

// Initialization
var firstName = "Akshay";
console.log(firstName);

// Assigning the Value
firstName = "Ajay";
console.log(firstName);

// Re-Declaring the variable
var firstName = "Pavan";
console.log(firstName);

if (true) {
    var firstName = "Hemanth";
    console.log(firstName);
}
console.log(firstName);

console.log("---------------------------");
// Let & Const - Block Scoped Variables

// In global scope the value is different and within block scope the value will be different

// let variables can only be declared once, but we can re-assign the values n-number of times
let lastName = "Rao"
console.log(lastName);

lastName = "Kulkarni";
console.log(lastName);

// Cannot re-declare
// let lastName
if (true) {
    let lastName = "Bhat";
    console.log(lastName);
}
console.log(lastName);

console.log("---------------------------");
// const variables can only be declared once & can also assign the value for single time.
const city = "Bengaluru";
console.log(city);

// re-assignment not allowed
// city = "Mysuru";

// Cannot re-declare
// const city = "Tumakuru";

if (true) {
    const city = "Mysuru";
    console.log(city);
}
console.log(city);

// Old or Normal Function
// Syntax:
// function function_name(parameters) {
//      function rules;
// }

function add(num1, num2) {
    console.log("Sum of " + num1 + " and " + num2 + ": " + (num1 + num2));
}
add(20, 30);

// Arrow or Fat-Arrow Function
// Syntax:
// scope function_name = (parameters) => function rules;

// Template literal is made to simplify the way of printing the variables
// (`Backtick`) is used and while referring the variables, we use ${variable}

const findSum = (n1, n2) => console.log(`Sum of ${n1} and ${n2}: ${n1 + n2}`);
findSum(30, 40);

function squared(n) {
    console.log("Square of " + n + ": " + (n * n));
}
squared(10);

const findSquare = num => console.log(`Square of ${num}: ${num * num}`);
findSquare(25);