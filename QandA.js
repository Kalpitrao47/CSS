// 1-What is Ecmascript?
// Ans- Ecmascript is the newer version of JavaScript that was introduced in 2015. 
//      ECMAScript is the standard that JavaScript programming language uses.

//2-What is variable?
// Ans- A variable is a container that stores a value.
//      A varibale must begin with a $,_,or a letter.

//3-var vs let in javascript?
//Ans-var is a function scoped. 
//It means if you declare a variable using var inside a function, 
//it is only accessible within that function 
//while let and const are blocked scoped.
//It means a variable declared with let is limited in scope to the 
//block, statement, or expression (enclosed within curly braces {}) where it is defined.
//    var can be updated & redeclared within its scope.
//    let can be updated but not re-declared.
//    const can neither be updated nor re-declared.
//    var variables are initialized with undefined whereas let and const are not initialized.
//    const must be initialized during declaration unlike let and var.

//4-What are Primitive Data Types in JS?
//Ans-Primitive Data Types are set of basic data types.
//    Object is a non-primitive data type.
//    There are 7 primitive data types in js:-
//    null,number,string,symbol,undefined,boolean.


//5-Create a const object in js. Can you change it to hold a number later.
// const a = {
//     number: 46
// }
// a.number = 47;
// a.city = "New York"
// console.log(a);               
// In JavaScript, you can create a constant (immutable) object using the const keyword. 
// However, it's important to note that while a const object cannot be reassigned to a different value or reference, 
// the properties of a const object can be modified if the properties themselves are mutable.

//6-Ternary Operator
//Ans- condition ? exp1 :exp2
        // (marks>10) ? 'yes' : 'No'

//Use logical operator to find whether the age of a person lies between 10 and 20?
// const age = 15;
// if (age>=10 && age <=20){
//     console.log("Age lies between 10 and 20")
// }else{
//     console.log("Age do not lie between 10 and 20")
// }


//Write a JS Program to find whether a number is divisible by 2 and 3.
// let num = 12;

// if(num%2 == 0 && num%3 === 0){
//     console.log("Number is divisible by 2 and 3");
// }
// else{
//     console.log("Number is not divisible by 2 and 3");
// }


//Find whether number is divisible by either 2 or 3.
// const number = 9;
// if (number % 2 === 0 || number % 3 === 0) {
//     console.log(`${number} is divisible by either 2 or 3.`);
// } else {
//     console.log(`${number} is not divisible by either 2 or 3.`);
// }


//7-Types of Loops in JS?
//Ans-for loop- loop a block of code a number of times.
//    for in loop-loops through the keys of an object.
//    for of loop-loops through the values of an object.
//    while loop-loops a block based on a specific condition.


//Syntax of for loop:
// for (statement1;statement2;statement3){
//     code to be executed
// }

//statement 1 is executed 1 time
//statement 2 is the condition based on which the loop runs(loop body is executed)
//statement 3 is executed everytime the loop body is executed.

// for (let i = 0; i < 5; i++) {
//     console.log("The number is ", i );
//   }


//8- Function in Js ?
//Ans- function myFunc(){
//     code execution
// }

//Ans- function myFunc(parameter1, parameter2){
//     code execution
// }

// myFunc(7,8)


// const sum =(a,b) =>{
//     let c = a+b;
//     return c;
// }
// let y = sum(7,8)
// console.log(y);


//9- Template Literals?
//Ans-  Template Literals use backticks instead of quotes to define a string.
// let name = `Harry`
//With Template Literals, it is possible to use both single as well as double quotes inside a string.


//10-String Properties
//Ans-
// let name = "Kalpit"
// console.log(name.length);
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2,4))
// console.log(name.slice(2))
// console.log(name.replace("Kalpit","Kalpit Bhai"))


//11-program in js for includes, startwith and endswith functions of a string.
// const text = "Hello, World!";

// const hasHello = text.includes("Hello");
// console.log(`Includes "Hello": ${hasHello}`); // Output: true

// const hasHi = text.includes("Hi");
// console.log(`Includes "Hi": ${hasHi}`); // Output: false

// // Using startsWith() method to check if the string starts with a specific substring
// const startsWithHello = text.startsWith("Hello");
// console.log(`Starts with "Hello": ${startsWithHello}`); // Output: true

// const startsWithHi = text.startsWith("Hi");
// console.log(`Starts with "Hi": ${startsWithHi}`); // Output: false

// // Using endsWith() method to check if the string ends with a specific substring
// const endsWithWorld = text.endsWith("World!");
// console.log(`Ends with "World!": ${endsWithWorld}`); // Output: true

// const endsWithEarth = text.endsWith("Earth!");
// console.log(`Ends with "Earth!": ${endsWithEarth}`); // Output: false


//12-What are Arrays?
//Ans-Arrays are varibales which can hold more than one value and can be of different types.

//There are some important array methods in js:-
// let n = [1,7,9]
// console.log(n.join("-")) 


//13-map()-Creates a new array by performing some operation on each array element.


//14-filter()-Filters an array with values that passes a test.Creates an array.


//15-reduce()-Reduces an array to a single value

//16-DOM-Document Object Model-
//Ans-DOM represents the page content as html.
//       document.body   ------>PAge body as JS Object  
//       document.body.style.background= "green"        ----------->Changes page bg to green.

//Walking the dom
{/* <html>
        <head>
                <title>
                hello                 ------>document.body
                </title>
        </head>
</html> */}


//17-Callbacks Promises async await.
//Ans- Asynchronous actions are the actions that we initiate now and then finish later.eg:-setTimeout
//Synchronous actions are the actions that initiate and finish one by one.

// Callback functions 
// A Callback function is a function passed into another function as an argument, which is then invoked inside the 
// outer function to complete an action.


//18 Why is for loop not used in react js
//Ans- It's because the JSX expects anything inside of it to return an object to be displayed. 
//A for loop does not return anything, but map does.


//19


// Basic JavaScript Concepts:
// What is JavaScript?
// What are the data types in JavaScript?
// Explain the difference between let, var, and const for variable declarations.
// What is the difference between null and undefined?
// Explain the concept of hoisting.
// What is closure in JavaScript? Can you provide an example?
// Explain the this keyword in JavaScript.


// Functions and Scope:
// What is a callback function?
// What are arrow functions? How are they different from regular functions?
// What is a closure? Can you provide an example of how it is used?
// What is the difference between function declaration and function expression?
// Explain the concept of a pure function.


// Object-Oriented Programming (OOP) in JavaScript:
// What are prototypes in JavaScript?
// Explain the difference between classical inheritance and prototypal inheritance.
// What is the new keyword used for in JavaScript?
// What is an object in JavaScript?
// What is JSON?


// Asynchronous Programming:
// What are callbacks? How do you avoid callback hell?
// What is a Promise in JavaScript?
// Explain async and await in JavaScript.
// What is the event loop in JavaScript?


// DOM Manipulation and Events:
// What is the DOM?
// How can you select elements with JavaScript?
// Explain event delegation in JavaScript.
// What is the difference between addEventListener and onclick?


// Advanced Topics:
// What are closures and how are they used?
// Explain the concept of debouncing and throttling.
// What is the difference between let, const, and var in terms of scope and hoisting?
// What are higher-order functions? Can you provide an example?
// What is the difference between null, undefined, and undeclared variables?


// Security:
// What is Cross-Origin Resource Sharing (CORS) and how can it be mitigated?
// What is Cross-Site Scripting (XSS) and how can it be prevented?
// Explain Same-Origin Policy and its importance in web security.
// Remember, interview questions can vary widely based on the specific role and level you are interviewing for, so it's essential to review the job description and the company you are applying to for a more tailored preparation. Good luck!


//Implement a function that converts a Javascript value into a json string?
//Implement a function that performs a deep copy of a value but also handles circular references?
//Implement a function to construct a table of contents from an HTML document?
//Implement a function to filter rows of data matching a specified requirement?
//Implement a function that converts all the keys in an object to camel case?
//Implement a function to deserialize a JSOn String?
//Implement a function to resolve a given value to a promise?
//Implement a function that formats a list of items into a single readable string?
//Implement a function that returns a memoized version of a function which accepts a single argument?
//Implement the functionality behaviour of Promise.any?
//Implement a function that merges two objects together?







