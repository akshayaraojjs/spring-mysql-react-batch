// Ctrl + ? - To comment
// DOM - Document Object Model

// DOM Tree looks like a tree structure with HTML as root element with 2 branches: Head & Body

// DOM Manipulation: Modifying/Manipulating the HTML from JS

console.log(document);

// Selectors:
// All selector method names are in "camelCase"

// getElementByID()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()

// getElementById() only returns 1 element
const h1 = document.getElementById("second-heading");
console.log(h1);
console.log(h1.outerHTML);
console.log(h1.title);

// textContent can only be used to modify the text and cannot render HTML tags
h1.textContent = "Second Heading written from JavaScript";
// h1.outerHTML = "Second Heading written from <i><u>JavaScript</u></i>";

// background-color, font-size, border-width, text-align - CSS
// backgroundColor, fontSize, borderWidth, textAlign - JS (Camel Case)

h1.style.textAlign = "center";
h1.style.color = "red";
h1.style.backgroundColor = "lightblue";
h1.style.border = "10px groove gold";
h1.style.padding = "10px";

let item2 = document.getElementById("item-2"); 
console.log(item2);

// getElementsByClassName() - return multiple elements
let listItems = document.getElementsByClassName("list-item");
console.log(listItems);
console.log(listItems[2].textContent);

listItems[2].innerHTML = "<i>List Item 3</i> modified using <u>JS</u>";

let firstHeading = document.getElementsByClassName("first-heading");
console.log(firstHeading);
console.log(firstHeading[0].innerHTML);

let paraClasses = document.getElementsByClassName("para");
console.log(paraClasses);

// getElementsByTagName() - returns multiple elements
let heading1 = document.getElementsByTagName("h1");
console.log(heading1);

// querySelector() - returns 1 element

// querySelector with tag reference
let firstPara = document.querySelector("p");
console.log(firstPara);

// querySelector with class reference
let secondPara = document.querySelector("p.second-para");
console.log(secondPara.textContent);

// querySelector with id reference
let listItem2 = document.querySelector("li#item-2");
console.log(listItem2.textContent);

// querySelectorAll() - returns multiple elements
let list_items = document.querySelectorAll("li.list-item");
console.log(list_items);

let paragraphs = document.querySelectorAll("p.para");
console.log(paragraphs);