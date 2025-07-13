// truthy:
// falsy: 


// we have assumed that if there is values in the string then it must be true =>truthy value
// const userEmail = "sana@gmail.com"
// if (userEmail) {
//     console.log("Got user email");  // Got user email
// } else {
//     console.log("Don't have user email");
// }


// if there is empty string it is considered as falsy value
// const userEmail = ""
// if (userEmail) {
//     console.log("Got user email");  
// } else {
//     console.log("Don't have user email");  // Don't have user email
// }


// array even an empty one is considered as truthy value
const userEmail = []
if (userEmail) {
    console.log("Got user email");  // Got user email
} else {
    console.log("Don't have user email");
}


// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


// How to detect array is empty:
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// How to detect object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {  // Object.Keys() => array
    console.log("Object is empty");
}


// false == 0 -> true
// false == '' -> true
// 0 == '' -> true
 

// Nullish Coalescing Operator (??): null undefined
// prints first value or next value if first value is null or undefined
let val1;

val1 = 5 ?? 10
console.log(val1);  // 5

val1 = null ?? 10
console.log(val1);  // 10

val1 = undefined ?? 15
console.log(val1);  // 15

val1 = null ?? 10 ?? 20
console.log(val1);  // 10


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")