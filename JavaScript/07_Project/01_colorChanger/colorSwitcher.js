

const bodyColor = document.querySelector("body")

const boxs = document.querySelectorAll(".box")


boxs.forEach((box)=>{
    console.log(box.getAttribute("id"))
    box.addEventListener("click", (event)=>{
        bodyColor.style.backgroundColor = event.target.id;
    
    })
})