const User = {
     _email: "tufan@com",
     _password: "flaljdljd",


     get email(){
        return this._email.toUpperCase()
     },

     set email(value){
         this._email = value
     },  
     
     get password(){
        return this._password.toUpperCase()
     },

     set password(value){
         this._password = value
     }
     
 }
//Factory function
 let tea = Object.create(User)
 console.log(tea)
    console.log(tea.email)