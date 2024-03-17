import React, { useState } from "react";

const Bgchanger = () => {
  let [color,setColor] = useState("olive")

  // niche use korar jonno agulo banano.
  function redClr(){
    color = "red";
    setColor(color)
  }
  function greenClr(){
    color = "green";
    setColor(color)
  }
  function blueClr(){
    color = "blue";
    setColor(color)
  }
  function purpleClr(){
    color = "red";
    setColor(color)
  }

  let [count, setCount] = useState(0);

  return(
    <div className="container" style={{backgroundColor:color}}>
      
      {/* ekhane ami setColor ke function hisabe use korechi . */}
      <div className="bottom-container">
        <button id="red" onClick={()=>{setColor('red')}} className="w-[300px] rounded-md border mb-4">red</button>
        <button id="green" onClick={()=>{setColor('green')}}>green</button>
        <button id="blue" onClick={()=>{setColor('blue')}}>blue</button>
        <button id="purple" onClick={()=>{setColor('purple')}}>purple</button>
      </div>

      {/* ekhnae ami setColor ke function hisabe use krini ami alada kre upore function use kore setake ekhane call korechi jata amar bashi bujhte subidha hoyeche..*/}

      {/* <div className="bottom-container">
        <button id="red" onClick={redClr}>red</button>
        <button id="green" onClick={greenClr}>green</button>
        <button id="blue" onClick={blueClr}>blue</button>
        <button id="purple" onClick={purpleClr}>purple</button>
      </div> */}



      <div>
        <h1>the count is : {count}</h1>
        <button onClick={()=>{setCount(count + 1)}}>click me</button>
      </div>


    </div>
  )
  
};

export default Bgchanger;
