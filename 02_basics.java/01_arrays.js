// array

const myArr = [1, 2, 3, 4, 5]  
const heroes = ["shaktiman", "hatori"] 
console.log(myArr[2]);
const myArray2 = new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

myArr.unshift(9)  // add element at the start of the array but it is not that useful since it shifts n no.of elements
myArr.shift()  // deleete element from front
console.log(myArr);

console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(3));  // give index of element (3)

const newArr = myArr.join()
console.log(myArr);
console.log(typeof(newArr));  // string

// slice and splice
 
console.log("A", myArr);  // A [ 1, 2, 3, 4, 5 ]

const myArr1 = myArr.slice(1, 3)
console.log(myArr1);  // [ 2, 3 ]
console.log("B", myArr);  // B [ 1, 2, 3, 4, 5 ]  // doesn't manipulate original array

const myArr2 = myArr.splice(1, 3)
console.log(myArr2);  // [ 2, 3, 4 ]
console.log("C", myArr);  // C [ 1, 5 ]  // manipulate original array







