// Scope -> {}, loop k bahar -> global scope, loop k andar -> block scope

var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(a);  // 10
}
// console.log(a);  // 300
// console.log(b);  // error: b is not defined since it it used inside loop
console.log(c);  // 30  // it should be 300 but it shows value 30 which is inside loop hence var is not used generally


function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);  // hitesh
    }
    // console.log(website);  // error
    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);  // hitesh youtube
    }
    // console.log(website);  // error
}
// console.log(username);  // error


// ++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++


function addone(num){
    return num + 1
}
console.log(addone(5))  // 6


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));  // 7


// no error it will print value 6
console.log(addone(5))
function addone(num){
    return num + 1
}


// // this will show error
// console.log(addTwo(5));
// const addTwo = function(num){
//     return num + 2
// }
