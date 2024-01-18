//****************** Type Conversion *************************

/*
- There is 2 type of type conversion in javascript. 
- 1. Implicit Conversion (Automatic type conversion)
- 2. Explicit Conversion (Manual typw conversion)


-- In implicit conversion :
 - when you try to calculate  numeric string with number , boolean , undefined and null value it's concatinate wiht string using (+)

 let result = "4" + 2 ; //  42
 let result = "4" + true ; // 4true

 - When you trey to calculate with number with numeric staring using [- , / , *] it's give a numeric result
 
 let result = "4" - 2 ; // 2
 let result = "4" * 2 ; // 8
 let result = "4" / 2  ; // 2
*/

// "33 " => String
// "33abc" = > NaN


//Boolean conversion
// 1 => true
// 0 => false

// let result = "4" + true ; // output is  5 = 4 + 1
// let result = "4" - true ; //  3


// Explicit Type conversion
let num = 33;
console.log(String(num)); // Number to string conversion
let age = "25"
console.log(Number(age)); // String to Number conversion
let isLogedIn = 1
console.log(Boolean(isLogedIn));// true
 isLogedIn = 0; // false
 isLogedIn = "" // false