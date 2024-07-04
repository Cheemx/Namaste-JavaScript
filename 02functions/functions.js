// ... is rest as well as spread operator

function calculatePrice(val1, val2, ...num1) {
    return num1
}

console.log(calculatePrice(200, 400, 500, 1000, 2000));

// +++++++++++++++++++ Arrow Functions +++++++++++++++++++++

const user = {
    username : "Cheems",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to the website`);
    }
}

// const addTwo = (num1, num2) => {
//     return num1+num2 // in curly braces youll have to use return keyword
// }

const addTwo = (num1,num2) => (num1+num2) // you don't have to use return keyword
