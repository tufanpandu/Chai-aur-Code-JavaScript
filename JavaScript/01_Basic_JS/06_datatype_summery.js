//👉 Primitive (Call by value)



// 7 type : String , Number , boolean , bigint , symbol , null , undefined

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

const bigNumber = 9348429739746348n
console.log(typeof bigNumber); // bigint

const outSideTemp = null
console.log(outSideTemp); // ✅ imp: Object



//✅ Javascript is  dynamically  typed language.
//✅ variable type is not need to determined at runtime and don't need to declare type of variable explicityly in Javascript.


//👉 Reference type (Non primitive)

// Array , Objects , functions


const heros = ["Ganesh" , "Shiv", "Ram"]; //

let myObj ={
   name: "Tufan",
   age: 25
}

const myFunction =  function(){
    console.log("Hellow World");
}

console.log(typeof myFunction); // Function object

console.log(typeof myObj); // object

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures