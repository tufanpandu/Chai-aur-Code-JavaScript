// Object literal

const user = {
    username: "tufanpandu",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        console.log("Got user details form database.", this.username)
    }
}

console.log(user.username)
console.log(user.getUserDetails())



// Constructor function

//const promiseOne = new Promise();
const data = new Date();

function userOne(username, loginCount, isLogedIn){
    // 'this' refers to the current context
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn;
    return this;    
}

// "new" return fresh object instance
const user1 = new userOne("tufan", 11, true)
const user2 = new userOne("Pandu", 15, false)

console.log(user2);


//instanceof
// instanceof operator is used to check wheather an object belongs to a particular class or constructor function.
console.log(user2 instanceof userOne); // true


