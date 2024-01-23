//*************************   String  **************************/

/*
- String is represent as a sequence of characters.
- In javascript string is represent as a primitive data type but behind the seen it can object.
- Because of object we can use the string methods.
*/

// Way to create String

let str =new String("Chai aur code");

console.log(typeof str); // Object  -> Not recomanded to create String as object

let str1 = "Chai aur code";
console.log(typeof str1); // string

// String methosd

// 1. length - method return the number of character in a string 

let str2 = "Chai aur code";

console.log(str2.length); // 13  (including spaces).

// 2. charAt()  - method return the character at specified index of the string.

let str3 = "Chai aur code";

console.log(str3.charAt(5)); // "a"    -Character should be "a"

// 3.codePointAt() - method return the integer that denoted Unicode point value of a character in a string.

let str4 = "Chai aur code";

console.log(str4.codePointAt(5) , str4.charCodeAt(7)); // 97  , 114

// 4. concat() -  method concatenates the given argument to the string.

let str5 = ""

console.log(str5.concat("Hello" , " , ", "Tufan" , " Welcome to Javascript world.")); //Hello , Tufan Welcome to Javascript world.


// 5.  endsWith()  - method return true or false if given string is end with specific passing character then true otherwise false.


let str6 = "Hello , Tufan Welcome to Javascript world.";

console.log(str6.endsWith("world."));// true
console.log(str6.endsWith("world"));// false   - here you missed "." char

// 6. includes() - method check one string is can be found in another string.

let str7 = "Hello , Tufan Welcome to Javascript world.";

console.log(str7.includes("Tufan")); // true
console.log(str7.includes("tufan")); // false //Character case is important.

// 7. indexOf() - method return index of firse occurance of the substirng in a string.

let str8 = "Hello , Tufan Welcome to Javascript world.";

console.log(str8.indexOf("T")); // 8  it give the index of first occurance of substring.

// 8. lastIndexOf()  - method return index of last occurance of substring in the string

 console.log(str8.lastIndexOf("w"));


 // 9. match() - method return result of matching a string against a regular expression.

 let str9 = "Hello , Tufan Welcome to Javascript world.";

 let exp = /Welcome/ ;

 console.log(str9.match(exp)); 
   /* Output.
   
   [
    'Welcome',
    index: 14,
    input: 'Hello , Tufan Welcome to Javascript world.',
    groups: undefined
  ]

  
  */

  // 10. matchAll() - method return an iterator of result after matching a string against a regular expression.

  let str10 = "Javascript is a most powerfull programming language . Javascript is user for interactive Website devlopment."

  let exp1 = /Javascript[A-z]*/gi;

  console.log(str10.matchAll(exp1)); // return iterative result

  let result =  str10.matchAll(exp1);

  console.log(Array.from(result)); // create a new instance of array or shallow copy


  // 11.


 

