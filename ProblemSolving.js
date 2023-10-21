//Loops,array,strings and Objects Question Solving

//1- Given A String , reverse each words in the sentence
var str = "saare jaha se accha hindustan hamara"
let splstr = str.split(" ").map(function(word){
   return word.split("").reverse().join("")
})
console.log(splstr)
//Now convert the array to string
console.log(splstr.join(" "))

//2-How to check if an object is an array or not?
function CheckArray(elem){
    return Array.isArray(elem);
}

console.log(CheckArray([]))
console.log(CheckArray({}))


//3-How to empty an Array in JS?
//Condition -Do not reset it to new Array or do not loop through to pop each value.

var arr = [1,2,3,4,5,6,8,9,4,2]
arr.length = 0;
console.log(arr);

//4-Make this duplicate ([1,2,3,4,5])    ------->[1,2,3,4,5,1,2,3,4,5]
function duplicate(arr){
    return arr.concat(arr);
}

console.log(duplicate([1,2,3,4,5]));

//5-Write a js function that reverse a number?
function reverseKaro(num){
    return num.toString().split("").reverse().join();
}

console.log(reverseKaro(12));

//6-Check if the passed string is a palindrome or not.
function CheckPalindrome(str){
   var reversed =  str.split("").reverse().join("")
//    if (reversed === str){
//         return true;
//    }
//    else{
//         return false;
//    }
    return reversed === str;
}

console.log(CheckPalindrome("loop"));
console.log(CheckPalindrome("poop"));

//7-`Write a js function that returns a passed string with letters in alphabetical order.
function alpha(str){
    return str.split("").sort()
}

console.log(alpha("apple"));