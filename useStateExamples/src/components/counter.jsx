import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0); 
  const [inputField, setInputField] = useState(''); 
  const [displayText, setDisplayText] = useState(''); 


  function userInteract(){
    if(inputField === ''){
      alert('please write something!')
    }else{
      // console.log(`My nick name is : `,inputField);
      setDisplayText(inputField)
    }
  }
    
  return (
    <>
      {/* Counter Example:
      Create a simple counter component that increments and decrements a counter value using useState. Allow the user to click buttons to increase and decrease the counter value. */}
    <div>

    <h1>count:{counter}</h1>

    <button onClick={()=>{setCounter(counter + 1)}}>incriment value</button>
    <button onClick={()=>{setCounter(counter - 1)}}>decriment value</button>



    <input type="text" placeholder='write something' value={inputField} onChange={(e)=>{setInputField(e.target.value)}}/>

    <button onClick={userInteract}>search</button>

    {displayText && <h2>My favourate name is : {displayText}</h2>}
    </div>
    </>
    
  )
}

export default Counter