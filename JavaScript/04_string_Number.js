console.log("1" + 1);// 11
console.log(1 + "1"); //11
console.log('1' + "1"); //11
console.log("1" + 2 + 2); // 122
console.log(2 + 2 + '1'); //41
console.log(2 + "1" + 2); //212

//using parseInt()
let num = "25ab24"
console.log(parseInt(num)); // it's parse while it's not geting non-numeric character
//using parseFloat()
let num1 = "25.83tr78"
console.log(parseFloat(num1)); // it's parse while it's not geting non-numeric character

// Unary pluse operator (+)
let num2 = "345" // "345tu"  it's parse all string untile geting first non-numeric character.
console.log(+num2);

//using Number()

let num3 = "480"
console.log(Number(num3)); //it's return string to premitive numbers until geting non-numeric character.