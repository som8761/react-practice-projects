import React, { useRef } from 'react'

const StoringMutableValue = () => {
  const interValRef = useRef(null);
  // console.log(interValRef);

  function startTimer(){
    interValRef.current = setInterval(() => {
      console.log('som');
    }, 1000);
  }

  function stopTimer(){
    clearInterval(interValRef.current)
  }
  return (
    <>
    <button onClick={startTimer}>start</button>
    <button onClick={stopTimer}>stop</button>
    </>
  )
}

export default StoringMutableValue