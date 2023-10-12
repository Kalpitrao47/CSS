//word vs keyword
// chacha = word
// for = keyword
// if = keyword
// else = keyword
// var = keyword
// let = keyword
// (keyword means it has some meaning in javascript)


// variables and constants
// code me data store karne ke liyee use hotaa hai usko kehte hai variable
// variables = stores data which can change
// constants = stores data which cannot change the value


//Hoisting
// Hoisting is a concept that enables us to extract values of variables and functions 
// even before initializing/assigning value without getting errors.


// Undefined vs Not defined
// a variable that has been declared but has not been assigned a value is of type undefined.
// If you try to access a variable that has not been declared at all, you will encounter a ReferenceError. This means the variable is "not defined."


// Types in JS
// primitives types = number,string,null,undefined,boolean
//reference types = [], {}, ()

// Conditionals
// if else else-if


// loops-for,while
// loops=repeat
// for(let i = 0; i<11; i++){
//     console.log(i);
// }

// var a = 12;
// while(a<20){
//     a++;
// }


//functions
//code reuse
//code with different data

// function hellobolo(){
//     console.log("hello")
// }

// hellobolo();

// function abcd(a,b,c,d){           //parameters
//     console.log(a,b,c,d);
// }
// abcd(12,13,14,15);                   //arguments


// Arrays
// var a = [1,2,3,4,5,6,7,8,9]
// // console.log(a[1]);
// a.pop();
// a.push(74);
// a.splice(2,1);


// Ek bande se jyada bande ki baaat ki to huaa array,
// Ek bande ke baare me saari baat ki to hua object.

// Object hai ek bande ki details ko hold karnaa, in a key value pair.

//1) Blank Object
// var a = {}

//2)Filled Object
// var a = {
//     age:27,
//     name: "kalpit"
// }


//var const let the difference
// var function scoped hota hai
// let braces scoped hota hai

function abcd(){
    for(var a = 1; a<12; a++){
        console.log("first",a);
    }
    console.log("second",a);
}

abcd();
// Q-Explain why I am getting printed numbers from 1 to 12.It should print 1 to 11 as we have less than 12.
// Ans-After the loop, the value of a is logged to the console again, but this time outside the loop. 
// Since a was incremented inside the loop until it became 12, the value of a outside the loop is 12. 
// Therefore, you will see "second 12" printed in the console after the numbers from 1 to 11.


//jitne bhi variables ya data hum banate hai unhe store kahi to karna padtaa hai uske liyee hotaa hai heap memory.

//execution context 


