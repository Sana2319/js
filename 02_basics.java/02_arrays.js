const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);  // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes.length);  // 4
// console.log(marvel_heroes[3][1]);  // flash

const all_heroes = marvel_heroes.concat(dc_heroes)  // concat froms a new array combining both the arrays
console.log(all_heroes);  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// better way to concat 
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const my_another_array = another_array.flat(Infinity)
console.log(my_another_array);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

console.log(Array.isArray("Sana"));  // false
console.log(Array.from("Sana"));  // [ 'S', 'a', 'n', 'a' ]
console.log(Array.from({name: "Sana"}));  // [] => interesting case  

 let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]
 



