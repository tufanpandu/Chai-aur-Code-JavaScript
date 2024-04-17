class User{
    constructor(email , password){
        this.email = email
        this.password = password //overide the password property
    }

    get email(){
        return `${this._email.toUpperCase()}`
    }

    set email(value){
        this._email = value
    }

    get password(){
        // different variable _password
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

let tufan = new User("tufan@pandu.com","ajdkljdiid")

console.log(tufan.password);
console.log(tufan.email)