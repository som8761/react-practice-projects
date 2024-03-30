import React from 'react'
import {value, value2} from './App'
import { useContext } from 'react'

const CompC = () => {
    const apnaName = useContext(value);
    const apnaGender = useContext(value2);
  return (
   <>
    <h2>My Name Is : {apnaName}</h2>
    <h2>My Gender Is : {apnaGender}</h2>
   </>
  )
}

export default CompC

/*SUMMERY 
while using this useContext Hook , i realised that i do not need to use function for pass the value of main component's value(which is : App.jsx)  inside the desired component (here which is : compC.jsx) ..so the code becomes readable and very flexible. 
*/