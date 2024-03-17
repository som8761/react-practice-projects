import React, { useState } from 'react'
import './colorPicker.css'

/*Colour Picker: Build a colour picker application where users can select a colour from a dropdown menu or input field. Use useState to manage the selected colour state.*/

const ColorPicker = () => {
    const [color, setColor] = useState('skyBlue') 
    // const redColor = () =>{
    //     setColor('red')
    // }
    // const blueColor = () =>{
    //     setColor('blue')
    // }
    // const greenColor = () =>{
    //     setColor('green')
    // }
    // const orangeColor = () =>{
    //     setColor('orange')
    // }
    // const yellowColor = () =>{
    //     setColor('yellow')
    // }
    function changeTheColor(e){
        setColor(e.target.value)
    }
  return (
    <>
    {/* <div className="container"> 
        <button onClick={redColor}>red</button>
        <button onClick={blueColor}>blue</button>
        <button onClick={greenColor}>green</button>
        <button onClick={orangeColor}>orange</button>
        <button onClick={yellowColor}>yellow</button>
    </div> */}


    <div className="box" style={{backgroundColor:color}}></div>


    <select onChange={changeTheColor}>
        <option>--select the color--</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="orange">orange</option>
        <option value="yellow">yellow</option>
        <option value="green">green</option>
    </select>
    </>
  )
}

export default ColorPicker