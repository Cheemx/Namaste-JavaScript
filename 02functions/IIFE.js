// To avoid pollution from global scope's variables we use IIFE
// Immediately Invoked Function Expression

(function chai(params) {
    // named IIFE
    console.log(`DB Connected`);
})();

// The first bracket implies to function and second implies for immediate execution

// You have to end the IIFE with a semicolon explicitly

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truth values

// "0", 'false', " ", [], {}, function(){}

// Nullish Coaelescing operator (??): null undefined

// checks for two values if one first exists assigns it to the variable



// Terniary operator 
// condition ? true : false