//Variable create temporary memory for stor data.

// Fixed variable - We can't reassign the value in const variable
const name = "Tufan";
console.log(name); // output: Tufan

// name = "Imran"; // In constant variable assignment is not allowed.

// Not fixed variable
let firstName = "Tufan";
console.log(firstName); // Tufan

firstName = "Imran" 
console.log(firstName);// Imran

// Var - Prefor to not use the key word because it show issues on function scope and global scope.

var lastName = "pandu";
console.log(lastName);// pandu

lastName = "Mohammad" 
console.log(lastName); // Mohammad

// Block scope
{
    console.log(lastName); // Mohammad
   var lastName = "Bisoi"
   console.log(lastName); // Bisoi
}
console.log(lastName); //👉 Here is an error this line of code should print the Output: Mohammad but insted of this it access the block sope variable value this thing have problems. 



// Without using keyword declar variable (Which is not preferable)

 fullName = "Tufan Chandra Pandu";

 console.log(fullName);