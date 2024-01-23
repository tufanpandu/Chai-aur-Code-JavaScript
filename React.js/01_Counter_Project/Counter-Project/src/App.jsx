import { useState } from 'react'

import './App.css'


function App() {
  
  let [counter , setCounter] = useState(0); // useState hook for update the variable in UI
    const incCount = () =>{
      if(counter === 20) return;

       setCounter(counter += 1);
   
    };
    const decCount = () => {
      if(counter <= 0) return;
       setCounter(counter -=1);
      
    }


   
  return (
    <>
     <h1> Counter App </h1>
      <h3> Counter Value : {counter}</h3>
     <button className="btn" onClick={incCount}> INC  </button>
     <button className='btn' onClick={decCount}> DEC </button>
    </>
  )
}

export default App
