// Inheritance

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User ${this.username} is logedin`)
    }
}

class Teacher extends User {
      constructor(username , email, password){
        super(username)
        this.email = email
        this.password = password
      }
}


let chai = new Teacher("chaiaurcode", "chaiaur@code.com", 67389977466)

chai.logMe()

console.log(chai instanceof User)// true
console.log(chai instanceof Teacher) // true