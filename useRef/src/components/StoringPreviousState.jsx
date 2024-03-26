import React, { useState, useEffect, useRef } from 'react';

function StoringPreviousState() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; // component re-render howar agei j value ta store ache count er modhe seta update hoche.karon useRef comp. re-render korai na...r niche count er value ta 1 hobe karon useState er dara hoche tai comp. re-render hobe then seta ui te show korbe...
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
export default StoringPreviousState
