import React,{useEffect, useRef, useState} from 'react'

const InputField = () => {
    const data = useRef('')
    function submitHandle(){
        console.log(data); // puro object ta pabo r tar value (jeta ekhane input) seta pabo.
       console.log(data.current); // current mane useref ta akta object day jatar property holo current.

        console.log(data.current.value); // variable.property mane direct j value ta ache seta pabo.

        data.current.style.backgroundColor = 'red';
        data.current.style.color = 'white';
        data.current.focus()
    }
  return (
    // ami ai ref={data} ke button eo lagate pari ,jekhane khusi lagate pari.
    <>
    <input type="text" ref={data}/> 
    <button onClick={submitHandle} >submit</button>
    </>
    
  )
}

export default InputField