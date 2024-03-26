import React, { useEffect, useRef, useState } from "react";
// import { AiFillAmazonSquare } from "react-icons/ai";
import { DiApple } from "react-icons/di";

const CountWithRef = () => {
  const [count, setcount] = useState(0);
  const ref = useRef(0);
  const inputField = useRef("");

  function incriment() {
    setcount(count + 1);
    ref.current++;

    console.log(`using useState : `, count);
    console.log(`using useRef : `, ref.current);
  }

  // function for the inputField.
  function inputFunc() {
    console.log(inputField.current.type);
    console.log(inputField.current.value);
    inputField.current.focus();
    inputField.current.style.color = 'red'
    inputField.current.style.backgroundColor = 'white'
  }

  return (
    <>
      <div>use state : {count} <DiApple  /></div>
      <div>use Ref : {ref.current} <DiApple  /></div>
      <button onClick={incriment}>incriment</button>
      <br />
      <br />
      <br />
      {/* for the inputField */}
      <input type="text" ref={inputField} />
      <button onClick={inputFunc}>input Btn</button>
    </>
  );
};

export default CountWithRef;

/*Yes, that's correct. In the case of the console.log statement, it executes immediately after the state update, but before the component has re-rendered with the updated state value. So, it logs the current value of count at that moment, which is the old value.

On the other hand, after the component re-renders with the updated state value, the UI reflects the new value. However, there's no opportunity for the console.log statement to execute again during the re-render process. Therefore, you only see the updated value in the UI after the component has re-rendered, but you don't see it in the console because the console.log statement has already executed earlier.



mane ami boltei pari j component re-render howar jonno wait kore react kintu console wait kore na..state ta update hoche r re-render a jache re-render howar por e ui te updated value tashow korche but console a state update howar por e j present value (mane 0) seta show korche karon console re-render howar dhar dharena..ui dhare..





 */
