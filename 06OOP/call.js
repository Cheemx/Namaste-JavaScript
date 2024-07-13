function setUsername (username){
    this.username = username
} 

function createUser(username,email, password) {
    setUsername.call(this, username) // this can be passed as an argument to a call function so basically call is used to specify javascript that we want to hold its execution for the function taht is calling it. 
    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@fb.com", "123")
console.log(chai);