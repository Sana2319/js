// const temperature = 41
// if ( temperature === 40 ){
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");


// <, >, <=, >=, ==, !=, ===, !==


// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);  // error // power is defined inside loop


// implicit scope  but not a good practice
// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");


// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } 
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 750");  
// }
// else {
//     console.log("less than 1200");  // less than 1200
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==3) {  // 2==3 -> false hence didn't run
    console.log("Allow to buy course");
}  
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");  // User logged in
}