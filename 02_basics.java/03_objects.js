// singleton  => jb koi constructor se object bnta h to usko singleton bolte h
// literal se declare krte h to singleton nhi bnta

// Object literals

// symbol
const mySym = Symbol("key1")

// key value pair
const jsUser = {
    name: "Sana",
    "fullName": "Sana Sajjad",
    "full Name": "Sana Sajjad",
    [mySym]: "myKe1",
    age: 22,
    email: "sana@google.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// how to access value of objects
console.log(jsUser.email);  // sana@google.com
console.log(jsUser["email"]);  // sana@google.com
console.log(jsUser.fullName);  // Sana Sajjad  // You can use dot notation only when:The key is a valid JavaScript identifier (no spaces, no special chars, doesn’t start with a number)
console.log(jsUser["full Name"]);  // Sana Sajjad  // If the key had been "full name" (with a space), then jsUser.fullName would not work.
console.log(jsUser[mySym]); // myKe1

// how to change values of objects
jsUser.email = "sana@amazon.com"
// Object.freeze(jsUser)
jsUser.email = "sana@microsoft.com"  // freeze krne k baad email change nhi hoga
console.log(jsUser);

// functions

jsUser.greeting = function(){
    console.log("hello js users");
}
jsUser.greeting2 = function(){
    console.log(`hello js users, ${this.name}`);
}
console.log(jsUser.greeting());  // function is throwing error bcz we have freezed js user object
// hello js users
console.log(jsUser.greeting2()); // hello js users, Sana