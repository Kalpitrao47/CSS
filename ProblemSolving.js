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

//8-Write a js function that accepts a string as a parameter and converts 
//the first letter of each word of the String in UpperCase.

function cap(str){
    let allWords = str.split(" ").map((e)=>{
        return e.charAt(0).toUpperCase() + e.substring(1);
    })
return allWords.join(" ");

}

console.log(cap("kya kar rahe ho"));

//9-Write a JS function to get the number of occurences of each letter in specified string.
function Occ(str){
    let occurences = {}
    str.split("").map((e)=>{
        if (e.hasOwnProperty(e) === false){
            occurences[e] = 1;
        }
        else{
            occurences[e]++; 
        }
    })
    return occurences;
}

console.log(Occ("apple"));
//Wrong Output

//10-Loop an array and add all members of it.
// let arraya = [1,2,3,4,5,6,7]
// var sum = 0;

// arraya.map((e)=>{
//     return sum = sum + e;
// })
// console.log(sum);


//11- In an array of Numbers and strings, only add those members which are not string.

let numstrarray = [12,45,78,"sjkxbvghsdb","dwebbd","dwnesb",45];
let sum = 0;

numstrarray.map((e)=>{
    if (typeof e === 'number'){
        sum = sum + e
    }
})

console.log(sum);

//12-Write a function that returns the reverse of a string.
function Rev(str){
    return  str.split("").reverse().join("");
}

console.log(Rev("Kalpit Raorane is a Frontend Developer"));

//13-Write a function that returns longest word in the sentence
function Long(str){
    let words = str.split(" ")
    let longword = "";
    for (let word of words) {
        if(word.length > longword.length){
            return longword = word;
        }
    }
}

console.log(Long("I love React"));
//Wrong Output

//14-Write a function whether the given string is a palindrome or not.
function Pal(str){
    let revword = str.split("").reverse().join("");
    return str === revword;
    
}

console.log(Pal("racecar"));

//15-Write a function to remove the duplicate elements from an array.
function karr(arr){
    console.log( newarr = [...new Set(arr)]); 
}

karr([1,2,3,4,4,5,6,6]);

//16-Write a function that checks whether the two strings are anagrams or not.
function Anagra(str1,str2){
    const sorted1 = str1.split("").sort().join();
    const sorted2 = str2.split("").sort().join();
    return sorted1 === sorted2;

}
console.log(Anagra("listen","silent"));

//17-Write a function that returns the number of vowels in a string.
const vowels = ['a','e','i','o','u'];
let count = 0
function CheckVowels(str){
    let words = str.split("")
    console.log(words);
    if(words === vowels){
        return words;
    }
}

console.log(CheckVowels("Hello World"))
//Wrong output

//18-Write a function to find a largest number in a array.
function Largest(arr){
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>largest){
          largest = arr[i]
        }
    }
    return largest;
}

console.log(Largest([4,5,8,12,23,655,5]));

//19-Write a function to check if a given number is a prime number or not?
//number divisible by 1 or itself


//20-Hosting Question in Javascript
var i = 1;
function test(){
    console.log(i)                    
    //Output = 1
    var i = 2;
    //Output undefined    Why?
}

test();

//21-SetTimeout and Event Loop Question
for (var i = 0; i<3; i++){
    setTimeout(function() {
        console.log(i);
    },1000);
}
//Why the output is 3 which is 3 three times.
//Its because it does not come out of the for loop.First the value becomes 1,then 2 then 3 and then the global 
//value of i is 3 now and now the setTimeout code will get execute and 3 3 times.


//console.log Questions

console.log(3>2>1);
//Output=false Why?
//Ans It will break down (3>2) = true
//Now (true>1) = false
// In Js false has value 1 and true has value 0.

console.log(1<2<3);
//Output=True

console.log("2" + 1);
//Output = 21 it will act as an concat.

console.log("2"-1);
//Output = 1 type conversion

console.log(1 + -"1" + "2");
//Output = 02


//setTimeout, Promises & Event Loop Questions
setTimeout(function(){
    console.log(1);
}, 0);

console.log(2);

Promise.resolve().then(()=>{
    console.log(3);
});

setTimeout(function() {
    console.log(4);
}, 0);

console.log(5);

//Callback Function
const calculate = (a,b, operation) =>{
    return operation(a,b);
}

//method1
const addition = calculate(3,4, function (num1,num2){
    return num1 + num2;
})

console.log(addition);

//method2
const subtraction = (a,b) => a-b;
const subresult = calculate(8,3,subtraction)

console.log(subresult);