import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0); 
  return (
    <>
      {/* Counter Example:
      Create a simple counter component that increments and decrements a counter value using useState. Allow the user to click buttons to increase and decrease the counter value. */}
    <div>

    <h1>count:{counter}</h1>

    <button onClick={()=>{setCounter(counter + 1)}}>incriment value</button>
    <button onClick={()=>{setCounter(counter - 1)}}>decriment value</button>
    </div>
    </>
    
  )
}

export default Counter