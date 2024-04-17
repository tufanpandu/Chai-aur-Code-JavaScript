//Select input
const username = document.getElementById("url");

// Select Submit button
const submit = document.getElementById("submit");




// fetch user details function

function fetchUser(value){
     let userUrl = `https://api.github.com/users/${value}`
 
     const xhr = new XMLHttpRequest(); //no arguments
     xhr.open("GET", userUrl) // Open a connection to server.

     // onreadystatechange property take function
     xhr.onreadystatechange = function(){

          if(this.readyState === xhr.DONE){
          
                if(this.status === 200){
                     let data = JSON.parse(this.responseText);
                    handleFetchUser(data);
                }else if(xhr.status === 404){
                   alert("You Get Some ERROR")
                 }else{
                    alert("Some error occures while fetching data.")
                 }
                
          }

     }
     xhr.send();
}

// Show user details in card

function showUser(data){
     let fullName = document.querySelector("#name");
     let id = document.querySelector("#id");
     let location = document.querySelector("#location");
     let followers = document.querySelector("#followers")
     let avatar = document.querySelector("#circle");

     if(data.fullName !== null && data.id !== null && data.location !== null && data.followers !== null && data.avatar !== null ){
          avatar.src = `${data.avatar_url}`;
          fullName.innerHTML = `${data.name}`;
          id.innerHTML = `${data.id}`;
          location.innerHTML = `${data.location}`;
          followers.innerHTML = `${data.followers}`;
     }else{
          alert("User details is incomplete.");
     }


}

// handleFetchUser

function handleFetchUser(data){
     if(data.fullName && data.id && data.location && data.followers && data.avatar){
          alert("Sorry ! User doesn't exist or has incomplite profile")
     }else{
          showUser(data); // call the show user function
     } 
}


submit.addEventListener("click", (e)=>{
         let value = username.value.trim();
        const githubUsernameRegex = /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/ ;

      // If input is Empty, invalid  username 
   
      if(value !== " " && githubUsernameRegex.test(value)){
           fetchUser(value)
      }else{
          alert("Sorry! Enter valid user name.");
      }

} )