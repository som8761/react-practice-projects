import React, { useRef,useEffect, useState } from 'react'

// Counter with Previous Value:
// Create a component that displays a counter and a button to increment it. Additionally, display the previous value of the counter below the current value. Use useState to manage the counter value and useRef to store the previous value.


const CounterWithPrevValue = () => {
    const [counter, setCounter] = useState(0)
    const prevValRef = useRef()

    
    const incrementFunc = () =>{
        setCounter(counter + 1) 
    }

    useEffect(() => {
     prevValRef.current = counter; //counter er recet value 0;
    }, [counter])

  return (
    <>
    <div>Current Value : {counter}</div>
    <div>Prev Value : {prevValRef.current}</div> 

    <button onClick={incrementFunc}>click me</button>
    </>
  )
}

export default CounterWithPrevValue

// so ekhane jeta ghotche seta holo : 
// clik korlm > state update holo(re-render akhono sesh hoyni jst precessing)  > after re-render the comp useEffect chollo and counter er j recent value seta ref er value te show krlo and songe songe component re-render sesh hoye 1 mane jeta updated value seta ui te show krlo.

// so ,ekhane duto value e akta render cycle a kaj krlo,mane comp re-render schedule a theke useEffect ta chole 0 ta shpw kore re-render shesh hoye ui te 1 update ktlo,.,sob ta ak ta render cycle a sesh krlo..

// mane re-render er age ref er value 0 dilo r jst render sesh kore update hoye state er valuye 1 dilo...