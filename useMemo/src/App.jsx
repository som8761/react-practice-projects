import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(100);

  // function multiplication(){
  //   console.log('*********');
  //   return plus * 10;
  // } // with out using useMemo.

  const multiply = useMemo(function multiplication(){
    console.log('*********');
    return plus * 10;
  },[plus]) // with useMemo.
  return (
    <>
      <div>Plus : {plus}</div>
      <div>Minus: {minus}</div>

      {multiply}
      {/* {multiplication()} */} 

      <button onClick={()=>{setPlus(plus + 1)}}>addition</button>
      <button onClick={()=>{setMinus(minus - 1)}}>subtraction</button>
    </>
  )
}

export default App


/*
In React, when you update state using useState hooks (setPlus and setMinus in your case), React schedules a re-render of the component. After the state is updated and the component is re-rendered, any subsequent code within the component function is executed, including the multiplication() function call.

So, the sequence of events is as follows:

The initial state values are plus = 0 and minus = 100.
When you click the "addition" button, setPlus(plus + 1) is called, which updates the plus state to the new value of plus + 1.
Similarly, when you click the "subtraction" button, setMinus(minus - 1) is called, which updates the minus state to the new value of minus - 1.
After each state update, React schedules a re-render of the component.
After the re-render, the updated state values (plus and minus) are displayed in the UI.
Following the UI update, the multiplication() function is called, which returns plus * 10, and this result is displayed in the UI.
So, in summary, your understanding of the sequence is correct. */



/*
My question is "use memo yaha pe kab run ho raha hay state update hone ke bad ?ya fir state update hone ke bad jo comp re-render hota hay uske bad?"

Ans:
Here's the sequence of events:

A state update occurs when you click the "addition" button (setPlus(plus + 1)).
After the state update, React schedules a re-render of the component.
During the re-render, the useMemo hook is called because it's part of the component's function body. It recalculates the value of multiply based on the updated state (plus in this case).
Once the value of multiply is computed, it's displayed in the UI along with other elements in the component.
So, to answer your question, useMemo runs during the component re-render, which occurs after a state update. It recalculates the memoized value based on the updated state or dependencies and provides that value to the component for rendering.
*/


/*some common cases for usememo
Here are some common use cases for useMemo:

Optimizing performance: If a computation within a component is computationally expensive and its result doesn't depend on every render, you can use useMemo to memoize the result and prevent unnecessary recalculations.

Preventing unnecessary re-renders: By memoizing values derived from props or state, you can prevent child components from re-rendering when their inputs haven't changed.

Avoiding redundant calculations: If a function is called within a component and its result doesn't change for the same inputs, you can use useMemo to memoize the result and avoid redundant calculations.

Here's a basic example of how useMemo can be used:
 */