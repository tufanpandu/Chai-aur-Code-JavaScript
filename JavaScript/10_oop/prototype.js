let myName = "Tufan    "

console.log(typeof myName)


Object.prototype.trueLength = function(){
    return this.trim().length;
}

console.log(myName.trueLength());

console.log("pandu   ".trueLength());



// Inheritance

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TASuppot = {
     makeAssignment: "JS Assignmet",
     fullTime:true,
     __proto__: TeachingSupport
}

const User = {
     name: "tufan",
     email: "tufan@pondu.com"
}
// Old syntax
User.__proto__ = Teacher


console.log(User.makeVideo)


// morder syntax
console.log(TASuppot)

Object.setPrototypeOf(TASuppot , TeachingSupport)

console.log(TASuppot.isAvailable)// false

