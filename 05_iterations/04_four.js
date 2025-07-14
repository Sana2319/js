const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for of loop doesn't apply to Objects to we use for in loop in Object
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// applying for in loop in arrays
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(key);  // 0 1 2 3 4
// }

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);  // js, rb, py, java, cpp
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key in map) {
    console.log(key);  // nothing get printed  // map me iteration nhi kiya jaa skta
} 