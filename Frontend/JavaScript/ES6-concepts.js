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

// Spread & Rest Operator (...)
// Spread: Expands array/objects into individual elements
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr1);
console.log(arr2);

const firstname = ['A', 'K', 'S', 'H', 'A', 'Y'];
const fullName = [...firstname, ' ', 'R', 'A', 'O'];

console.log(fullName);

// With objects
const user = {
    name : "Akshay",
    age : 25
};

const updatedUser = {
    ...user,
    technologies : ["C", "C++", "Java", "Python", "PHP", "JavaScript"]
};

console.log(updatedUser);

// Rest Operator:
// (...nums) can be anything, so we can use int or float numbers with "n" number of values
const FindSum = (...nums) => nums.reduce((total, n) => total + n, 0);

console.log(`Sum of 2 numbers: ${FindSum(20, 30)}`);
console.log(`Sum of 4 numbers: ${FindSum(20, 30, 50.2, 35.3)}`);
console.log(`Sum of 5 even numbers: ${FindSum(2, 4, 6, 8, 10)}`);
console.log(`Sum of 6 random decimal numbers: ${FindSum(20.5, 30.2, 10.5, 32.3, 12.5, 13.6)}`);

// Modern Array Methods:
// Map, Filter & Reduce
// Syntax: array.map/filter/reduce(input => output);

numbers = [1, 2, 3, 4, 5]
console.log(numbers);

// Map - Transform each item
// Syntax: array.map((element, index, array) => newValue);

const toEven = numbers.map(n => n*2);
console.log(toEven);

const Squared = numbers.map(n => n**2);
console.log(Squared);

const prices = [100, 200, 300, 400];
// Apply 10% tax for each price to get final price
const finalPrices = prices.map(price => (price * 1.10).toFixed(2));
console.log(`Initial Price (Before Tax): ${prices}`);
console.log(`Final Price (After Tax): ${finalPrices}`);

// Filter - Keep items matching the condition
// Syntax: array.filter((element, index, array) => condition);
const evenNum = numbers.filter(n => n % 2 == 0);
console.log(evenNum);

const oddNum = numbers.filter(n => n % 2 != 0);
console.log(oddNum);

// Filter Students Passed in the exam
const students = [
    { name: "Akshay", marks: 83},
    { name: "Ajay", marks: 95},
    { name: "Vikas", marks: 32},
    { name: "Vijay", marks: 25},
    { name: "Sujay", marks: 75}
]

const passed = students.filter(student => student.marks > 35);
console.log(passed);

// Reduce - Combine all items into Single item
// Syntax: array.reduce((accumulator, currentValue, index, array) => updateAccumulator, initialValue);
const total = numbers.reduce((sum, n) => sum + n, 0);
// Tracing:
// numbers = [1, 2, 3, 4, 5]
// if reduce method is called, then sum acts as accumulator, n acts as currentValue
// 1st Step: sum = 0, n = 1
// => sum + n -> 0 + 1 -> 1  
// 2nd Step: sum = 1, n = 2
// => sum + n -> 1 + 2 -> 3  
// 3rd Step: sum = 3, n = 3
// => sum + n -> 3 + 3 -> 6  
// 4th Step: sum = 6, n = 4
// => sum + n -> 6 + 4 -> 10  
// 5th Step: sum = 10, n = 5
// => sum + n -> 10 + 5 -> 15  
console.log(total);

const product = numbers.reduce((product, n) => product * n, 1);
console.log(product);

const spendings = [2500, 3000, 2700, 4300, 5100, 2850]
// Calculate average spendings made in last 6 months:
const averageSpendings = spendings.reduce((sum, spending) => sum + spending, 0) / spendings.length;

console.log(`Average Spendings from last 6 months: ${averageSpendings.toFixed(2)}`);

// forEach - To check all items one by one
numbers.forEach(n => console.log(n));

// Null Coalescing Operator (??) & Option Chaining (?.) & OR operator (||)

// Null Coalescing operator only works when the value is null or undefined, it doesn't work if the value is 0 or ""(empty)
const user1 = {
    name: "Akshay",
    age: 25,
    city: "Bengaluru"
};

const user2 = {
    name: "Ajay",
    age: null
};

const user3 = {
    name: "Vijay",
    age: 0,
    city: null
};

// User 1 details:
console.log(user1.name ?? "Guest");
console.log(user1.age ?? "N/A");
console.log(user1.city ?? "Unknown");
console.log("----------------");

// User 2 details:
console.log(user2.name ?? "Guest");
console.log(user2.age ?? "N/A");
console.log(user2.city ?? "Unknown");
console.log("----------------");

// User 3 details:
console.log(user3.name ?? "Guest");
console.log(user3.age ?? "N/A");
console.log(user3.city ?? "Unknown");
console.log("----------------");

// Another Example:
const product1 = {
    name: "Asus Tuf F15",
    price: 65000,
    inStock: true,
    description: "Gaming Laptop with high end graphics card"
};

const product2 = {
    name: "Asus Strix G17",
    price: 150000,
    inStock: false,
    description: ""
};

const product3 = {
    name: "",
    price: 0,
    inStock: false
};

// (||) operator will work when the value is false, 0, ""
console.log(product1.name || "N/A");
console.log(product1.name ?? "N/A");

console.log(product1.price || 100);
console.log(product1.price ?? 100);

console.log(product1.inStock || true);
console.log(product1.inStock ?? true);

console.log(`OR: ${product1.description || "N/A"}`);
console.log(`NULL Coalescing: ${product1.description ?? "N/A"}`);
console.log("------------------------------------------------");

console.log(product2.name || "N/A");
console.log(product2.name ?? "N/A");

console.log(product2.price || 100);
console.log(product2.price ?? 100);

console.log(product2.inStock || true);
console.log(product2.inStock ?? true);

console.log(`OR: ${product2.description || "N/A"}`);
console.log(`NULL Coalescing: ${product2.description ?? "N/A"}`);
console.log("------------------------------------------------");

console.log(product3.name || "N/A");
console.log(product3.name ?? "N/A");

console.log(product3.price || 100);
console.log(product3.price ?? 100);

console.log(product3.inStock || true);
console.log(product3.inStock ?? true);

console.log(`OR: ${product3.description || "N/A"}`);
console.log(`NULL Coalescing: ${product3.description ?? "N/A"}`);
console.log("------------------------------------------------");

// Option Chaining (?.)
// Nested Object (Object within a object)
const userA = {
    name: "Akshay",
    address: {
        city: "Bengaluru",
        state: "Karnataka" 
    }
}

console.log(userA);
console.log(userA.name);
console.log(userA.address);
console.log(userA.address.state);
// console.log(userA.location.pincode);
console.log(userA?.location?.pincode);