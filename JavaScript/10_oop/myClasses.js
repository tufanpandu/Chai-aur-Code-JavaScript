//Classes

class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    //method
     encryptPassword(){
       return `${this.password}xyz`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}


let tufan = new User("Tufanpandu", "tufan@fb.com", "45678")

console.log(tufan.encryptPassword())
console.log(tufan.changeUsername())



//Behind the scene

function UserTwo(username, email , password){
    this.username = username
    this.email = email
    this.password = password
}


// method injection to User constructor function

UserTwo.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

UserTwo.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

let imran = new UserTwo("Imran", "imran@gmail.com", 9944433)

console.log(imran.encryptPassword())
console.log(imran.changeUsername())


