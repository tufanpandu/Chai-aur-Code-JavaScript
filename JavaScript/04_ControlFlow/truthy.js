const userId = "Tufan24"
/**
 * - If userId is empty("") then it's act as falsey value.
 * - If userId is not empty("Tufan", " ") , Array[] or object{} then it's act as truthey value.
 */
if(userId){
    console.log("I have user ID");
}else{
    console.log("We don't have user id");
}



//=================== Falsy Value

/**
 *  - false , 0 , -0 , BigInt 0n , null ,"", undefined , NaN   => all are falsy value.
 */


//================= Truthy values
/**
 * - "0", "false", " ", [] , {} , function(){} 
 */

// How to check object and array is empty or not ?

const obj ={}

if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
}else{
    console.log("Object is not empty")
}


const arr = [];

if(arr.length === 0){
    console.log("Array is Empty");
}else{
    console.log("Array is not empty");
}


//========== Nullish Coalescing Operator (??): null undefined

let val;
//val = 5 ?? 10
//val = null ?? 10 // null or undefined is comes then it's choose other options.
console.log(val) // undefained

val = undefined ?? 15
console.log(val)


//=========== Terniary Operator

//condition ? true : false

const tea = 200
tea >= 150 ? console.log("Costly tea") : console.log("Cheap tea");



