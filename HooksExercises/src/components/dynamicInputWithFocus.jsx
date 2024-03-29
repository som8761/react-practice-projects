import React,{useEffect, useRef} from 'react'

/*
Dynamic Input Focus:
Create a form with multiple input fields. When the user clicks on an input field, focus should shift to that field. Use useRef to obtain references to the input fields, and useEffect to handle the focus behaviour.
 */

const DynamicInputWithFocus = () => {
    const refInputField1 = useRef(null);
    const refInputField2 = useRef(null);
    const refInputField3 = useRef(null);
 
    useEffect(() => {
        refInputField1.current.focus();
    },[])
    
    useEffect(() => {
        refInputField2.current.focus();
    },[])
    
    useEffect(() => {
        refInputField3.current.focus();
    },[])
    

  return (
    <>
    <input type="text"  placeholder='1...' ref={refInputField1}/>

    <input type="text"  placeholder='2...' ref={refInputField2}/>

    <input type="text"  placeholder='3...' ref={refInputField3}/>

  
   
    </>
    
  )
}

export default DynamicInputWithFocus