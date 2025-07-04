// basic comparison to normal hoga

console.log("2" > 1);  //true // it allows to compare string and number but avoid it

console.log(null > 0); // false
console.log(null == 0);  // false
console.log(null >= 0);  // true
/*the reason is equality check == and comparison >, <, <=, >= works differently
comparison converts null to a number treating as 0 so i) 0 !> 0 -> false iii) 0 >= 0 -> true*/

console.log(undefined > 0); // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false

// === -> strict check -> check values as well as data type
console.log("2" === 2);  // false



