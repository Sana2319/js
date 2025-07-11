// javascript execution context: how js execute and run the code
// {} -> Global execution context(GEC), in browser "this" keyword has value windows
// Global execution context 
// Function execution context
// Eval execution context(in Mongoose)

// {} -> i) Memory Creation phase(just memory is allocated, task isn't performed)  ii) Execution phase(execution is done)

// e.g.
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// i) Global execution/environment => allocated in "this"
// ii) Memory phase: val1 -> undefined, val2 -> undefined, addNum -> definition, result1 -> undefined,  result2 -> undefined
// iii) Execution phase: val1 -> 10, val2 -> 5, addNum -> GEC (new variable environment + Execution context) ->
// two part execute again: i) Memory phase: val1 -> undefined, val2 -> undefined, total -> undefined  ii) Execution context: num1 -> 10, num2 -> 5, total -> 15
// after the work of GEC is done it is deleted (one of the most imp step)
// result1 = 15
// again GEC(NVE + thread) => i) Memory phase: val1 -> undefined, val2 -> undefined, total -> undefined  ii) Execution phase: num1 -> 10, num2 -> 2, total -> 12
// after the work of GEC is done it is deleted (one of the most imp step)
// result1 = 12


// Call Stack

