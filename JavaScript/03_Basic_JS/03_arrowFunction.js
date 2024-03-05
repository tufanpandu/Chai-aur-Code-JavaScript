
/**
 * - In regular function without useing strict mode when you execute the function without specifying what `this` should be , `this` refer to the "global object".
 * 
 * - Non-strict mode is default in javascript
 * - In web environment , the global object is `window`, In Node.js, it's `global`.
 */

/**
 * - Using strict mode when regular function called without any context "this" is by default "undefined" returns.
 */

const user = {
    username: "Tufan Pandu",
    price: 899,
    welcomeM: function(){
        console.log(`${this.username} , welcome to website.`); // `this` keyword is only work for object
        console.log(this)
    }
    
}

user.welcomeM()
//console.log(typeof this);// Object

//console.log(this.user.username);


const tufan = function(){
     let name = "Tufan Pandu"
     console.log(this); // It's return some propertes.
}

tufan(); // undefined

const tufanOne = ()=>{
    let name = "Tufan Pandu"
    console.log(this); // It's return empty {}
}
tufanOne();


/**
 * - If you use curly {} braces then need to use `return` keyword.
 */

const addTwo = (num1 , num2)=>{
    return num1 + num2;
}

//If you use parentheses () then don't need to use `return` keyword
console.log(addTwo(12, 45));

const addThree = (num1, num2, num3) =>  (num1 + num2 + num3) ;


const arrowOne = ()=>{username: "Chai aur code"};// We can't return object using 
console.log(arrowOne()); // `undefined` 

const arrowTwo = ()=>({username: "Chai aur code."});
console.log(arrowTwo());