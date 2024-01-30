// ********************************   Number and Math ****************************

 /*
  - Number is a primitive value.
  - Unlike different language we don't need to defined data type of variable in javascript it's automatically detected.
  - You can use exponential notation "e" for too long or too small number.
    Ex - let a = 5e9 // 5000000000
         let b = 5e-5 // 0.00005
   
  - number + number = number 
  - string(numeric) + number = string
  - string(numeric) - number = number
  - string(numeric) / number = number 
  - string(numeric) * number = number    

 */


  // Creating Number

  let a = 100;
  console.log(a); // 100 -> is number but it can also store any data type

  let b = new Number(200); // object
  console.log(b); //[Number : 200] -> it's make sure that it's only store  number.

  // Precision Problem

  let a1 = 0.1 + 0.2;
  console.log(a1); //output:  0.30000000000000004 -> it's show unexpected error with floating value.

     // to solve preciaion value problem we have toFixed() method.

     console.log(a1.toFixed(2)); // output: 0.30 ( it's return string) 
 
  const num = 223.456;
  console.log(num.toPrecision(4));


  // For reading large number

  const largeNum = 1000000;

  console.log(largeNum.toLocaleString("en-IN")); // It's represent Indian number system.




  //************************* Math ************************************* */

// console.log(Math.abs(-4)); //Negetive value convert into positeve but not positive value to negetive.

// console.log(Math.round(5.3)); // numeric value convert into nearest integer.

// console.log(Math.round(5.9));

// console.log(Math.ceil(4.1)); // it's convert into nearset heigher integer.

// console.log(Math.floor(4.9)); // it's convert into nearset lower integer.

// console.log(Math.sqrt(25)); // return squre root of a number.

// console.log(Math.pow(5 , 2)); //  return the value of base raise to the power.

// const arr = [4, 5, 7, 9, 2];
// console.log(Math.min(...arr)); // return minimum value from array.

// console.log(Math.max(...arr)); // return maximum value from array. 


console.log(Math.random()); // return random number between 0 (inclusive) to 1 (exclusive).

console.log(Math.random() * 10); // how many 10 or you can say "zero" is added on random number it's shift left side that much of digit.

console.log(Math.floor(Math.random() * 10)); // it's give the floor value.

console.log(Math.floor((Math.random() * 10) + 1)); // sometime it could be 0 so we added  +1

let min = 10;
let max = 25;

console.log(Math.floor(Math.random() * (max - min + 1)) + min ); // it genrate value between min and max value.



