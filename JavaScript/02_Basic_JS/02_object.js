// **********************   Object  ************************************

/*
-  If you create object using constructor then it is singleton. 
-  If create using syntax literal then it's not make singleton. 
*/


// ***************** Object Literals *********************
let mySym = Symbol("key1");

const user = {
      // key:value
      name : "Tufan",
      "full name": "Tufan Chandra Pandu",
      age : 20,
      dist: "Koraput",
      email: "tufan@pondu.com",
      isLogedIn : true,
      [mySym]: "Symbol" // Symbol we need to use inside the squer bracket.
}


console.log(user.name);
console.log(user["full name"])
console.log(user[mySym])


let obj = {
      name: "tufan",
      age: 45,
      isLogedIn: false
}

obj.name = "Imran" // Change the the name

console.log(obj)

// If you want to freeze the object 
//Object.freeze(obj)
obj.greeting = function(){
      console.log("Hellow JS User");
}
console.log(obj.greeting());

obj.age = 30
console.log(obj); // It's not change the object





// object destructuring 
const {name , age, isLogedIn} = obj;

console.log(name);
console.log(age);
console.log(isLogedIn);



