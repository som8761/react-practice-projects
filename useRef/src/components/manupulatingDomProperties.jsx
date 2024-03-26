import React,{useRef} from 'react'

const ManupulatingDomProperties = () => {
    const manupulateRef = useRef('')

    function manupulateDom(){
        console.log(manupulateRef.current.style.color = 'blue');
    }
  return (

    <>
    <div ref={manupulateRef}>this is a div container</div>
    <button onClick={manupulateDom}>click me</button>
    </>
  )
}

export default ManupulatingDomProperties