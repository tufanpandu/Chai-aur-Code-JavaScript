// *************************  Array  Part -1 ****************************

/*
- Array : Arrays in javascript is a data structure where we can store and organize different data type values.
- Array Element : With in  an array each value is known as Element . Which can accessed by using  their index .
- Array Index : Array index is represent that position of Element with in array .
- Array Length : Number of Element inside the Array.

- Array is a Object
- Array in javascript can resizable and contain mix different type of data type.
- It's a "0" base indexing.
- You can create array using Array Constructor or using the shorhand array literals syntax.
-

*/

// ************************************** Create array using Array litral

const arrLitral = ["apple", "greps", "Orange", "Banana"];
console.log(arrLitral); // ["apple", "greps", "Orange", "Banana"]

//***************************  Create Array useing Constructor

const arrConstructor = new Array("HTML" , "CSS", "Javascript" , "React");
console.log(arrConstructor); //[ 'HTML', 'CSS', 'Javascript', 'React' ]


// ************************ Access last element of array

console.log(arrConstructor.length - 1); //3

// ******************************* modified element using index.
arrConstructor[1]="TailwindCSS";
console.log(arrConstructor);  

// ****************************** Added element to array push()

arrConstructor.push("ExpressJS");

console.log(arrConstructor); //[ 'HTML', 'TailwindCSS', 'Javascript', 'React', 'ExpressJS' ]


// ******************* Removeing element from array. using pop() , shift() and splice()


let arrOne = ["html", "css" , "javascript","react"];

console.log(arrOne.pop()); // Remove the last element from array. output: react
console.log(arrOne); //[ 'html', 'css', 'javascript' ]


console.log(arrOne.shift()); // Remove the first element from array
console.log(arrOne); //[ 'css', 'javascript' ]


console.log(arrOne.splice(0, 1)); // CSS
console.log(arrOne.splice(0,1, "TailwindCSS")); // We can remove the element and put the value  in place.
console.log(arrOne);

const arrA = ['html', 'css', 'javascript'];
const arrTwo =  ["Tiger", "srk" , "sidharth", "kiara"];

console.log(arrTwo.length); // 4

//********************************  Array Concatenation

// Using array concat()  when combain two or more array element it's return new array containeing elements.

let holdValue = arrA.concat(arrTwo);

console.log(holdValue); // [ 'html', 'css', 'javascript', 'Tiger', 'srk', 'sidharth', 'kiara' ]


// *********************  Identify  Array in Javascript (isArray() , instanceof)

let arrThree = ["Tiger", "srk" , "sidharth", "kiara"];

console.log(Array.isArray(arrThree)); // Return boolean value : true

console.log( arrThree instanceof Array); // true


//*******************  Some Javascript Array method **************************

let arrFour = ["html", "css", "javascript", "react", "express", "mongodb"];

//************************************ toString() -> convert the array into string

console.log(arrFour.toString()); // html,css,javascript,react,express,mongodb

//************************************ join() -> It helps to join two array as string . If you passed something in join method as parameter that separate the array element .


console.log(arrFour.join("|"));  // html|css|javascript|react|express|mongodb

//************************************ delete operator  -> delete operator is used to delete the given value that can be object , array or anything
// Useing this delete operator we can't delete the total array  for that we need to assigning new empty array.
let del = ["Tufan", "Imran", "Chintu", "Protap"];

 let delResult = delete del[1] ; // it's only delte only specific value of array or object 

console.log(delResult); // true
console.log(del); //  [ 'Tufan', <1 empty item>, 'Chintu', 'Protap' ]


//************************************ flat() -> This flat() method flatend the given array. i.e it marge all the nested given array with in it. It not modified the parent array it's create the new array.

 let num = [1,4,5,[5,41, [48 , 62, 80], 7], 8, 10 , 13, [55, 36]] ;

 console.log(num.flat(Infinity)); // it's flat the multilavel array.


 //************************************ splice() -> It's a inbuild method in javascript  it is used to modified content in array  by adding  a new array or removing the existting  element . It's modified the parent element .


 let sp = ["oil", "onion", "patato", "bite"];

 console.log(sp); // [ 'oil', 'onion', 'patato', 'bite' ]
  let spResult = sp.splice(1,1, "Jera","Dhania", "Masala");


  console.log(spResult); // It's return the remove element ->  [ 'onion' ]
  console.log(sp); // It's modified the original array. [ 'oil', 'Jera', 'Dhania', 'Masala', 'patato', 'bite' ] 

//************************************ slice() -> It's return the portion of array from original array which contain from starting index (includeing) to ending index (excluding) provide as argument. It's  return new array not modified original array.

let sl= [25 , 35, 45, 15, 5, 55, 65];

console.log(sl.slice(2, 4)); // slice(start , end) return  : [45 ,15]

console.log(sl.slice(3)); // If passed single argument start index  return: [15,5,55,65]

console.log(sl.slice());// if empty argument passed  extract all the element and return new array  return: [25 , 35, 45, 15, 5, 55, 65]


console.log(sl.slice(-4));// Extrat the last four element  : [15,5,55,65]

console.log("Last ",sl.slice(-6 , -10)); // out of range   return [] empty array


//************************************  indexOf() - Search an element of an array and return it's position.

/**
 * - It's return first  occurance of a element.
 * - If any element is not found it's return -1 .
 * - Which argument passed inside the indexOf() method it's search in array useing ===(strict equality ).
 * 
 */

let arrB = [24 , 31, 72, 59, 71, 86,95];

console.log(arrB.indexOf(59)); // index = 3
console.log(arrB.indexOf(11)); // -1 index is not found

console.log(arrB.indexOf(59, 1)); // It's start search 59 inside the array from starting index 1 
console.log(arrB.indexOf(59, 4)); //it's start search from index 4 if not find the value in side tha array it's return -1 .

// If you want all element index.

 for(let el of arrB){
    console.log(el + " " +  arrB.indexOf(el));
 }



//************************************  find() method 

/**
 * - This method takes callback function as parameter.
 * - It's return the value of first element which satisfie the test of function.
 * - If not even one element is satisfie the test case then it's return undefined.
 * 
 */



  let arrC = [11 , 35, 42, 69, 74, 53];

    function isEven(num){
       return num % 2 == 0;
    }
  let outPut = arrC.find(isEven);
   console.log(outPut);



  //************************************  convert string into array 

  let stu = "Tufan";
  let stuArr = ['T', 'u', 'f','a', 'n'];

  console.log(Array.isArray(stu));// check is it array : false
  console.log(Array.isArray(stuArr)); // true

  console.log(Array.from(stu)); //convert into array :  [ 'T', 'u', 'f', 'a', 'n' ]
 
  //console.log(Array.from());  Array.from() method need argument otherwise it's return errors.

  console.log(Array.from({stu: stu})); // Important

let a = 500
let b = 1000
let c = 2000

  console.log(Array.of(a ,b, c )); // return new array from a set of element.



 



















