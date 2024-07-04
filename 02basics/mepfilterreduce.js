const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter((num) => num > 4) // implicit return

// console.log(newNums);

const newNums = myNums.map((num)=> num + 10)
// console.log(newNums);

const myTotal = myNums.reduce((acc, curr) => (acc + curr), 0)
console.log(myTotal);