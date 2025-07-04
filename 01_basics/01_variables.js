const accountId = 144533
let accountEmail = "sana@google.com"
var accountPassword = "12345"
accountCity = "Asansol"
let state

/* we can declare variable in js by using let and var and also without using any keyword
but prefer not to use var bcoz of issue in block scope
we can also just define the variable without storing any value in it and its value will be set as undefined 
*/

// accountId = 2  not allowed to change in case of const
accountEmail = "sana@amazon.com"
accountPassword = "1234"
accountCity = "Bangalore"

console.log(accountId)

//instead of writing console.log for each element we can use table
console.table([accountId, accountEmail, accountPassword, accountCity])
