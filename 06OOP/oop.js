// Object literal means literally an object
const u = {
    username:"Cheems",
    loginCount: 9,
    isSignedIn:true,

    getUserDetails: function(){
        console.log("Got user details from database");
    }
}

/*
When the new keyword is used: 
A new object is created : the new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The Constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function, etc.), the newly created object is returned.
*/