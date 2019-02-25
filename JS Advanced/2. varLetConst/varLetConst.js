// var, let , const
// 1. declaration
// 2. hoisting
// 3. block scope (if, for)
// 4. redeclaration 


var x = 1; 
let y = 2;
const z = 3;

var x = 2; // ok
let y = 3; // error
const z = 4; // error

var x; // ok - undefined
let y; // ok - undefined
const z; // err

