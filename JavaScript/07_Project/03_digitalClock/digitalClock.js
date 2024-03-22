// =========== Method  - 1 ======================

// let output = setInterval((time)=>{
  //   time.toLocaleTimeString()
  // }, 1000);
  
  setInterval(()=>{
  const time = new Date();  
  document.querySelector(".clock").innerHTML = `${time.toLocaleTimeString()}`
},1000)





////================= Method -2 ====================
/*
let sec = 0
let min = 0
let hr = 0

const time = setInterval(()=>{
    sec++
    document.querySelector(".second").innerHTML = sec < 10 ? "0" + sec : sec;
  if(sec === 60){
    min++
    document.querySelector(".minute").innerHTML =  min < 10 ? "0" + min : min;
    if(min === 60){
        hr++
        document.querySelector(".hours").innerHTML = hr < 10 ? "0" + hr : hr;
        if(hr === 24){
            hr = 0;
        }
       
    }
  }
}, 1000)
 

time();

*/
     