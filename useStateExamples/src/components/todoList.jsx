import React, { useState } from 'react';

const TodoList = () => {
  const [item, setItem] = useState('');
  const [displayText, setDisplayText] = useState('')

  function handleInputChnage(e){
    setItem(e.target.value)
  }
  function handleButtonClick(){
    setDisplayText(item)
  }

  return (
    <>
      <input
        type="text"value={item} placeholder="Add Some To Do..."
      onChange={handleInputChnage}/>

      <button onClick={handleButtonClick}>click me</button>

      <div>
        TO-DO: {displayText}
      </div>

    </> 
  );
};

export default TodoList;
