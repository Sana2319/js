// this keyword => current context
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  // hitesh, welcome to website
        console.log(this);  // output: {
                            //          username: 'hitesh',
                            //          price: 999,
                            //          welcomeMessage: [Function: welcomeMessage]
                            //         }
    }
}
user.welcomeMessage()


user.username = "sam"
user.welcomeMessage()
// sam, welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


console.log(this);  // {} -> empty since there is no global scope
// if run in browser then global object will be windows object


function chai(){
    let username = "hitesh"
    console.log(this.username);  // undefined
}
chai()
// this works only inside object not inside function


const chai = function () {
    let username = "hitesh"
    console.log(this.username);  // undefined
}
chai()


// arrow function
const chai = () => {
    let username = "hitesh"
    console.log(this);  // {}
}
chai()


// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))


// implicit return
// // const addTwo = (num1, num2) =>  num1 + num2  or
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4))


const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))  // { username: 'hitesh' }

