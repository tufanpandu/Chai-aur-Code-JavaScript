


const button = document.querySelector(".btn");

button.addEventListener("click", (e)=>{
    const height = parseInt(document.querySelector("#cm").value);
    const weight = parseInt(document.querySelector("#kg").value);
    let result = document.querySelector(".output");
 /// Check conditions

    if(isNaN(height) || height == "" || height < 0){
      result.innerHTML = "Please Enter valid Height."  
      result.style.color = "red" 
    }else if(isNaN(weight) || weight == "" || weight < 0){
       result.innerHTML = "Please Enter valid Weight."
       result.style.color = "red"
    }else{  
      let outputValue = (weight/((height*height)/10000)).toFixed(2)

      
       if(outputValue < 18.6){
        result.innerHTML = `${outputValue}`;
        const under =  document.querySelector("#under")
        under.style.backgroundColor = "green";
        under.style.display = "inline"
        under.style.padding = "6px";
       }else{
        const under =  document.querySelector("#under")
        under.style.backgroundColor = "";
        under.style.display = ""
        under.style.padding = "";
       }

       
       if(outputValue  >= 18.6 && outputValue <= 24.9){
        result.innerHTML = `${outputValue}`; 
        const normal =  document.querySelector("#normal")
        normal.style.backgroundColor = "orange";
        normal.style.display = "inline"
        normal.style.padding = "6px"; 
       }else{
        const normal =  document.querySelector("#normal")
        normal.style.backgroundColor = "";
        normal.style.display = ""
        normal.style.padding = "";
       }


       
       if(outputValue > 24.9){
        result.innerHTML = `${outputValue}`; 
        const over =  document.querySelector("#over")
        over.style.backgroundColor = "red";
        over.style.display = "inline"
        over.style.padding = "6px";
       }else{
        const over =  document.querySelector("#over")
        over.style.backgroundColor = "";
        over.style.display = ""
        over.style.padding = "";
       }
    }

    
})