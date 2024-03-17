import React, { useState } from 'react'

const ToggleText = () => {
  const [toggle, setToggle] = useState('block');

  function toggleText(){
    // return setToggle('none');
    if(toggle === 'block'){
        return setToggle('none');
    }
    else{
        return setToggle('block');
    }
  }
  return (
    <>
      {/* Toggle Example:
      Build a component that toggles the visibility of a text content using a button. Use useState to manage the state of whether the content is visible or hidden, and toggle it accordingly. */}
    <h2 style={{display:toggle}}>show/hide Text</h2>
    <div>
    <button onClick={toggleText}>show/hide Text</button>
    </div>
    </>
    
  )
}

export default ToggleText