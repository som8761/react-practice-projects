import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'


// function App() {
//   let counter = 0;
//   function incrimentValue(){
//     counter += 1;
//     console.log("value added",counter);
//   }
//   return (
//     <>
//     <h1>chai aur code</h1>
//     <h2>Counter Value : {counter}</h2>
//     <button onClick={incrimentValue}>add Value</button>
//     <button>remove Value</button>
//     </>
//   )
// }

/*Difference between these two things will clear the thing why we use state(also can see the text notepad for this)*/

function App() {
  // let counter = 0;
  let [counter,setCounter] = useState(0); // setCounter is a method of counter.set counter charao ja khusi name dite pari.
  
  function addValue(){
    counter += 1; // ekhane incriment hoche r niche seta print hoche.
    setCounter(counter)
    console.log("value added",counter);
  }
  function removeValue(){
    counter -= 1;
    setCounter(counter)
  }
  let macImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTi_a8C10Ql63E9UeFJLc2AiBr4YjOmzeUfA&usqp=CAU"
  return (
    <>
    <h1>chai aur code</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue} className='bg-red-600 text-green-600'>add Value</button>
    <button onClick={removeValue}>remove Value</button>

  

    <Cards laptopName ="About Hp" textBtn = "Read More" Img = "https://sg-files.apjonlinecdn.com/landingpages/category-family/hp-laptops-family/images/w100_hero_mobile_v2.jpg"/>

    <Cards laptopName ="About Mac" textBtn = "Read More" Img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTi_a8C10Ql63E9UeFJLc2AiBr4YjOmzeUfA&usqp=CAU"/>

    <Cards laptopName ="About Pc" textBtn = "Read" Img = "https://plus.unsplash.com/premium_photo-1682141882061-c7676602e111?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGMlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D"/>

    </>
  )
}

export default App
