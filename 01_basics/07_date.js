// Dates

let myDate = new Date()
console.log(myDate.toString());  // Mon Jul 07 2025 13:26:21 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());  //  7/7/2025, 1:26:21 pm
console.log(myDate.toLocaleDateString());  //  7/7/2025
console.log(typeof myDate);  // object

let createDate = new Date(2025, 0, 2) 
console.log(createDate.toDateString());  // Thu Jan 02 2025  // and months start from 0 in js

// let myCreateDate = new Date(2025, 0, 2, 5, 3) 
// console.log(myCreateDate.toLocaleString());  // 2/1/2025, 5:03:00 am

let myCreateDate = new Date("01-14-2025")   // 01 -> month, 14 -> date
console.log(myCreateDate.toLocaleString());  // 14/1/2025, 12:00:00 am

let myTimeStamp = Date.now();  
// They both return a timestamp in milliseconds since the Unix Epoch: Unix Epoch = January 1, 1970, 00:00:00 UTC
console.log(myTimeStamp);  // 1751876147810   // This is the current time in milliseconds from 1 Jan 1970 to now (the moment this line was run)
console.log(myCreateDate.getTime());  // 1736793000000  // This is the number of milliseconds from 1 Jan 1970 to 14 Jan 2025 (midnight)

console.log(Math.floor(Date.now()/1000));  // 1751876414  // returns date in seconds

let newDate = new Date()
console.log(newDate.getMonth()+1);  // 7 (july) // to get the actual month since jan is taken as 0
console.log(newDate.getDay());  // 1  // it gives the day of the week not date its 7 july today but its giving 1
console.log(newDate.getDate());  // 7

// to customise the date
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long"
}))   //  July 2025 Monday
  







