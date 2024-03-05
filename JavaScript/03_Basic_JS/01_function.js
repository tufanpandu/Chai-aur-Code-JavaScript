function hello(){
    console.log("Hello Tufan")

}

hello();
hello();

function add(a , b ){
    return a + b;
  // console.log(a + b);
}

const result = add(2,15); // you have to return the result in function
console.log(result)

function isLogedIn(username = "Pandu"){ // parameter
    // if(username === undefined){
    //     return "Please enter username."
    // }

    if(!username){
        return "Please enter username."
    }
    return `${username} this user is logedin`;
}

console.log(isLogedIn("Tufan")); // argument


function calculateCartPrice(...num){
    return  num;

}

console.log(calculateCartPrice(100, 300, 45, 20))

const user = {
    username: "Tufan",
    price: 1998
}

function handleObject(otherObj){
    return otherObj.username
}

console.log(handleObject(user))