const name = "sana"
const repoCount = 50
console.log(name + repoCount + " value"); // can be done such but not recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // modern way
console.log(`Hello my name is ${name.toUpperCase()}`);
// JavaScript has a built-in global property called name you are shadowing or overriding a predefined global variable that's why strike through in name

const gameName = new String("sanasajjad")
console.log(gameName[0]);  //s
console.log(gameName.__proto__);  // 2 underscore h //{} -> object

console.log(gameName.length);  // 10
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));  // n
console.log(gameName.indexOf('n'));  // 2

const newString = gameName.substring(0, 4)
console.log(newString);  // 0 to 3 print hoga sana(0123)

const anotherString = gameName.slice(-7, 5)  // -7 => a(before s one), 5 => a(before j one) so as will be printed
console.log(anotherString);
//make sure that starting index is lower than the ending index other wise it will return empty string ""

const anotherString1 = gameName.slice(-6)  // sajjad
console.log(anotherString1);

const anotherString2 = gameName.slice(2, -2)  // nasajj
console.log(anotherString2);

const newStringOne = "         sana       "
console.log(newString.trim());  // remove spaces

const url = "https://sana%20sajjad"
console.log(url.replace('20', '-'));  // or "%20", "-"
console.log(url.includes('sana'));  // true

console.log(gameName.split('j', 3));  // (separator, limit) => [ 'sanasa', '', 'ad' ]





