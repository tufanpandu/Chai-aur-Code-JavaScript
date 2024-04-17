// Call

function fullName(){
    console.log(`${this.fName} ${this.lName}`)
}

let name1 ={
    fName: "Tufan",
    lName:"Pandu"
}


let name2= {
    fName: "Virat",
    lName: "Kohli"
}
// Function borrowing
fullName.call(name1)
fullName.call(name2)


function userName(username){
    this.username = username
    console.log("Called")
}

function fullUserName(username , id , age){
   userName.call(this, username)

    this.id = id
    this.age = age
}

// "new" keyword is most for correct result
// without "new" keyword "this" context is refer to  the global object .
console.log(new fullUserName("Imran" ,14 , 25))