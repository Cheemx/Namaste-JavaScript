const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const coding = ["js", "ruby", "golang", "python", "c++"]

// coding.forEach((item)=>{console.log(item);})

// printMe = (item)=>{
//     console.log(item);
// }
// coding.forEach(printMe)

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"CPlusPlus",
        languageFileName:"cpp"
    },
    {
        languageName:"Golang",
        languageFileName:"go"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})