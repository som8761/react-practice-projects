import React,{useState, useEffect, useRef} from 'react'
/*Interval Timer:
Create a component that displays a timer that increments every second. Use useState to manage the timer value, and useEffect to update the timer every second. Use useRef to store the interval ID for clearing the interval when the component unmounts. */

const IntervalTimer = () => {
  const [counter, setcounter] = useState(0)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setcounter(counter + 1)
    }, 1000);

    return () =>{
      clearInterval(intervalId)
    }
  })
  
    return (
      <div>{counter}</div>
    )
}

export default IntervalTimer

