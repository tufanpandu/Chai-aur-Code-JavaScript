// Constructor
//const igUser = new Object();

// Literal

const igUser = {}
igUser.id = "123ig",
igUser.name = "tufan",
igUser.isLoggedIn = true

//console.log(igUser);


const regularUser ={
     email: "more@gmail.com",
     fullname: { // nested object
         userFullName:{
            firstName : "Tufan",
            lastName: "Pandu"
         }
     }
}

console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname?.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}


const newObj = {obj1, obj2}; // Not correct way
const newObjOne = {...obj1, ...obj2}; // 1st method
const newObjTwo = Object.assign({}, obj1, obj2);
console.log(newObjTwo)

console.log(newObjOne);

// If only want to print keys of object

console.log(Object.keys(newObjTwo)); // only return keys

console.log(Object.values(newObjTwo)); // only return values.

// entries() is used for key value pairs combained in array[]

console.log(Object.entries(newObjTwo)); //[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]



console.log(newObjTwo.hasOwnProperty("isLogedin"));