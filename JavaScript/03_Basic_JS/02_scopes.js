// =========  scopes ============

/**
 * - Scope determines the accessablity of variable , function and object from different parts of the code.
 * - Scopes means accessibility or visiblity of variables.
 * - Their are are 3 scopes in Javascript -> Global Scopes , Function Scopes , Block Scopes
 * - let and const provides Block scopes . Before ES6(2015) variables have only function scopes and global scopes.
 * - If you assign value to a variable without declared . It's autometically become Global Scopes.
 * --- We use "Strict Mode" for undeclared variable which is not become to global varialbe.
 * 
 */


//============  Global  Scopes  ==================
/**
 * - Global variable can access from anywhere.
 * - We can declare global variable using `let` , `const` and `var`.
 * -
 */

let global = "Welcome to global scope";

console.log(global); 

function globalScope(){
    console.log(global); // It can access the global variable
}
globalScope();

// ============= Function Scope ===============

/**
 * - Inside  the function if you declare variable then it can only access the code inside the function not out side of the function.
 * - Local variabl have function scopes
 */


function funScope(){
    let fun = "Welcome to function variables.";

    console.log(fun); // It can access the fun varable.
}
//console.log(fun); // fun variable is not defined.
funScope();



// ================ Block Scope =====================

/**
 * - Block scope is create using let and const .
 * - In block scopes variable are created iside the curly braces {}.
 */

{
    let blockScope = "Welcome to Block scopes"
    console.log(blockScope); // It can access the variable.
}

//console.log(blockScope);  It can't access the variable.



//========== Nested scope // Lexical Scoping ===========

/**
 * -In Javascript nested scope are created when function is defiened  inside function and inside the function can be accessed the outer function variable but outer function can not be accessed inner function variable . This is called Lexical scoping.
 */

function one(){
    let outer = "Outer Variable"
    function two(){
       let inner = "Inner Variable"
       console.log(outer); // It can access
    }
    //console.log(inner); // It can't access
    two()
}

one();



////////////////////////////////////////

console.log(addOne(5)) // It can access the function which execute before the initialization

function addOne(num){
    return num + 1;
}


 console.log(addTwo(5)); // It's can't execute because we try to execute before the function initialization.
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5)); // It can execute the function




