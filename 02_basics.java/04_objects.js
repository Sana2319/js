// singleton object

// const tinderUser = new Object()
// console.log(tinderUser);  // {}

// non singleton object

//  const tinderUser = {}
// console.log(tinderUser);  // {}

const tinderUser = {}
tinderUser.id = "12345"
tinderUser.name = "sana"
tinderUser.isLoggedIn = false
console.log(tinderUser);  // { id: '12345', name: 'sana', isLoggedIn: false }

const regularUser = {
    email: "sana@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sana",
            lastName: "Sajjad"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);  // Sana

// Object.assign(target, ...sources)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// // const obj3 = {obj1, obj2}
// // console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// This:
// const obj3 = Object.assign(obj1, obj2, obj4);
// ➡️ This will:
// Copy properties of obj2 and obj4 into obj1 (because obj1 is the target).
// Also assign the modified obj1 to obj3.
// 📦 So now:
// obj1 === obj3 → true
// obj1 is mutated! (Not always safe)

// better practice => since it will store obj1, obj2, obj4 in another empty object so no original object is mutated
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 4: "b"}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a' }

// or easier way
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a' }

const users = [
    {
        id: 1,
        email: "s@gmail.com,"
    },
    {
        id: 1,
        email: "s@gmail.com,"
    },
    {
        id: 1,
        email: "s@gmail.com,"
    }
]
users[1].email
console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '12345', 'sana', false ]
console.log(Object.entries(tinderUser));  // [ [ 'id', '12345' ], [ 'name', 'sana' ], [ 'isLoggedIn', false ] ]

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);  // hitesh

// destructuring

// const{courseInstructor} = course
// console.log(courseInstructor);  // hitesh

const{courseInstructor: instructor} = course
console.log(instructor);  // hitesh

// API is called from json
// key and value pairs both are string
// {
//     "name": "Sana",
//     "coursename": "js in hindi",
//     "price": "free"
//      "id": 1234
// }



 