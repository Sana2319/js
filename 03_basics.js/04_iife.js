// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DataBase CONNECTED`);
})();  // DataBase CONNECTED

// To avoid polluting the global scope
// JS has a global scope, and declaring variables/functions in global scope can lead to naming conflicts.
// IIFE creates a private scope — variables defined inside it won’t leak outside.

// A semicolon is necessary before an IIFE if it's not the first statement, or after first IIFE to prevent syntax errors.
// Use ;(function(){ ... })(); to ensure it runs safely

// un-named or simple IIFE
( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('hitesh')