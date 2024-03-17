import React from 'react'
import { useState } from 'react';

// Input Field Example:
// Create a component with an input field that allows users to type text. Use useState to manage the state of the input field value and update it as the user types.
const InputFieldexample = () => {
    const [inputText, setInputText] = useState('');
  return (

    <div>
        <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
        <p>you typed:{inputText}</p>
        {/* ami value er modhe age inputText ta dilam initial value ta bojhanor jonno.tarpor jakhn kichu likhlam  "onchnge" event  er jonno setInputText er dara amader state ta update holo and component ta re-render hoye input text er state ta update holo kichu text.*/}
    </div>

    // age initial state er j value ta chilo seta chilo blank r setai chilo input field er value..akhn jakhn ami input field a kichu likhchi seta hoye jabe inputText er value..mane ami jakhn e likhci kichu tkhn e inputField er value hoche exact seta r setai hoche updated state er value.. 
  )
}

export default InputFieldexample