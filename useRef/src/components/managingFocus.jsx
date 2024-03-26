import React, { useRef } from 'react'

const ManagingFocus = () => {
    const focusRef = useRef('');

    function focusFunc(){
        focusRef.current.focus(); 
        console.log(focusRef.current.value); 
    }
  return (
    <>
    <input type="text" ref={focusRef}/>
    <button onClick={focusFunc}>click me</button>
    </>
  )

}

export default ManagingFocus