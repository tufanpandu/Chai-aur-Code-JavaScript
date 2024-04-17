// One

new Promise(function(resolve , reject){
    setTimeout(()=>{
           console.log("Time out")
           resolve();
          // reject()
    },1000)
}).then(function(){
    console.log("Over")
}).catch(function(){
    console.log("Error get")
})


// Two

const promiseTwo = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){// resolve 
            resolve({fullName: "Tufan Chandra Pandu", email: "tufan@gamil.com"});
        }else{//reject
            reject("ERROR");
        }
    },1000);
})

promiseTwo.then((user)=>{
     console.log(user)
}).catch((error)=>{
    console.log(error)
})


// Three 

const promiseThree = new Promise(function(resolve , reject){

     setTimeout(() => {
          let error = false;
          if(!error){
            resolve({fullName:{fName:"Tufan" , lName: "Pandu"}, email:"code@tufan.com"})
          }else{
            reject("Error is Getting");
          }
     },1000)
})


// promiseThree
// .then((user) => {
//     console.log(user.fullName);
//     return user.fullName;
// })
// .then((userName) => {
//     console.log(userName.fName );
//     console.log(userName.lName);
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() =>{
//     console.log("Error may be occures or maybe not");
// });


// Four

async function  asyncPromise(){
  try {
    const response = await promiseThree
    console.log("Get Response" + response)
     let data = await response
     console.log(data.fullName.fName)

  } catch (error) {
    console.log(error)
  }
}

asyncPromise()



// Five

async function callApi(){
    try {
        const response = await fetch("http://api.github.com/users/tufanpandu");
        const data = await response.json()

        console.log(data);
        
    } catch (error) {
        console.log(error)
    }
}


callApi();