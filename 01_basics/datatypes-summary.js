/*Datatypes are of two types based on how data are stored in memory and how is it accessed. They are:
i) Primitive DT -> Call by value -> 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
ii) Non-primitive DT -> Call by reference -> Array, Objects, Functions

js is dynamically types language which means u dont need to declare the data type of variables and the type is determined at runtime based on assigned value and its datatype can be changed even after declaration
*/

//use of Symbol data type -> create unique identifiers
const id = Symbol("123")
const nextId = Symbol("123")
console.log(id === nextId);  // false

const bigNumber = 235479132n  //typeof -> undefined

// Array
const names = ["sana", "sajjad", "samia"];

// Object
let myObj = {
    name: "sana",
    ag: 22
}

// Function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);  // function  // Infact sare non primitive data types ka type of function hi aata h


//*************** Memory************************ 

//  Primitive -> stack memory
//  Non primitive -> heap memory

// Because primitives are copied by value — each variable has its own spot in the stack
let myName = "sanasajjad"
let anotherName = myName
myName = "chaiaurcode"
console.log(myName);  // chaiaurcode
console.log(anotherName);  // sanasajjad

//obj1 and obj2 share the same reference (like two labels pointing to the same drawer in the heap).
// So changing the object through obj1 also affects what you see through obj2
 let obj1 = {
    email: "sana@google.com",
    upi: "user@ybl"
 }
 let obj2 = obj1
 obj2.email = "sajjad@google.com"
 console.log(obj1.email);  // sajjad@google.com
 console.log(obj2.email);  // sajjad@google.com
 
 




