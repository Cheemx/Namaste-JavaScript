// singleton is created from constructor of an object

// Object literals

const mySym = Symbol("key1") // to use symbol

const jsUser = {
    name :"Cheems",
    "full name":"cheems_exo",
    [mySym]:"mykey1",
    age:21,
    location : "Pune",
    email:"chinmaymahajan999@gmail.com",
    lastLoginDays:["Monday", "Tuesday"]
}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"])
// console.log(jsUser[mySym]);

Object.freeze(jsUser) // freezes the object

// Singleton 

const tinderUser = new Object() // singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"cheemx43@gmail.com",
    fullname:{
        firstname:"Chinmay",
        lastname:"Mahajan"
    }
}
// dot operator to access the props of objects

const obj1 = {1:"a", 2:"c"}
const obj2 = {3:"d", 4:"5"}

// const obj3 = Object.assign({}, obj1, obj2) // not used most of the time
const obj3 = {...obj1, ...obj2} // spread operator

// console.log(obj3);

// console.log(Object.values(tinderUser));

// # Destructuring of objects

const course = {
    courseName:"JS in Hindi",
    price:"999",
    courseInstructor:"Cheemx"
}
const { courseInstructor : ci } = course // Destructuring

console.log(ci);