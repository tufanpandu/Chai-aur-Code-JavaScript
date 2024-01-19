// Memory are 2 type 


// Stack (Primitive) :- Get copy of variable value
// Heap (Not-primitive) :- You get referance


// *******************************  Stack ******************************************
// variable is stor in stack memory
let myYouTube = "TufanPandu"
console.log(myYouTube); // TufanPandu

let anotherYoutube = myYouTube; // it get the copy of myYouTube variable 
console.log(anotherYoutube); // TufanPandu

anotherYoutube = "Tech Tufan"; // It's don't affect the myYouTube variable because it's a copy

console.log(anotherYoutube); // Tech Tufan



// **************************  Heap  ****************************************************

//Object is store in Heap memory
let  youtubeOne = {
      channelName : "Tufan Pandu",
      subscriber : 10000
}

console.log(youtubeOne); //{ channelName: 'Tufan Pandu', subscriber: 10000 }

// Create another referance for same object in heap
let youtubeTwo = youtubeOne;

console.log(youtubeTwo); //{ channelName: 'Tufan Pandu', subscriber: 10000 }

//modified object to the one referance
youtubeTwo.subscriber = 15000;


//Both referance reflect the changes in same object in heap
console.log(youtubeOne); //{ channelName: 'Tufan Pandu', subscriber: 15000 }
console.log(youtubeTwo); // { channelName: 'Tufan Pandu', subscriber: 15000 }








