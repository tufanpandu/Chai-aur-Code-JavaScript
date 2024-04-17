
//Object.getOwnPropertyDescriptor



let pi = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(pi)

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


let user = {
    username: "Tufan",
    email: "tuan@pandu.com"
}


let userDetails = Object.getOwnPropertyDescriptor(user , "username")

console.log(userDetails);


// {
//     value: 'Tufan',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }