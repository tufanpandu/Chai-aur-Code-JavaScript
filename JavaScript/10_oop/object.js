function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2 

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

// Constructor function
function createUser(username , score){
    this.username = username 
    this.score = score  
}

createUser("Tufan", 45)

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.bill = function(){
    console.log(`Your total ${this.username} price is ₹${this.score}`)
}

const chai = new createUser("Chai", 20);
console.log(chai instanceof createUser)// true
console.log(chai);
chai.bill();
const coffe = new createUser("Coffe", 40)
console.log(coffe)
coffe.bill()


