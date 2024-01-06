console.log(2 > 1); // true
console.log(2 >=1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true


console.log("2" > 1); // true
console.log("02" > 1); // true


console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); //✅imp:- true

console.log(undefined == 0); //false


//   === It's check strictly (value and datatype)

console.log( 2 == 1); // false
console.log("2" == 1); //false
console.log("2" == 2); //true
console.log("2" === 2); // false (check datatype)