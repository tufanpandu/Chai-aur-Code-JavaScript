class User {
    constructor(username){
        this.username = username
    }
// It's not accessable by user instance
  static  logMe(){
        console.log(`User is loged in`)
    }
}

class Teacher extends User {
       constructor(username , email){
          super(username)
          this.email = email
       }

       creteId(){
          console.log("UserId is created");
       }
}


let chai = new Teacher("Tufan", "tuan@pandu.com");
chai.creteId(); //accessable
chai.logMe(); // Not accessable



