// random color generator
const randomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0 ;i<6 ;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}


const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let interval;


 function startChangeColor(){
    // Check if interval is not running
     if(interval == undefined){
       interval =  setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
            start.style.color = randomColor();
        },1000)
    }   
}


function stopChangeColor(){
    // Check if interval is  running.
    if(interval != undefined){
        clearInterval(interval) 
        stop.style.color = randomColor();   
    }
    interval = undefined ;
    }

start.addEventListener("click", startChangeColor)

stop.addEventListener("click", stopChangeColor)


