import { useCallback, useState } from 'react'
import './App.css'
import ChildA from './childA'

function App() {
  const [counter, setcounter] = useState(0);
  const [add, setAdd] = useState(0);

  const initialUpdate = useCallback( function xyz(){
    //
  },[]) // only display once after initial value update.

  const dependencyUpdate = useCallback( function xyz(){
    //
  },[counter]) // it updates after every re-render,means after state update and re-render.

  return (
    <>
      <ChildA initialUpdate={initialUpdate} dependencyUpdate={dependencyUpdate}/>


      <div>counter: {counter}</div>
      <div>add : {add}</div>

      <button onClick={()=>{setcounter(counter + 1)}}>counter</button>
      <button onClick={()=>{setAdd(add + 1)}}>add</button>
    </>
  )
}

export default App

/*so what is happening here ,the initial values are updated for the first time when the component is being run for the first time...however i click on the add button the component(ChildA) has not been called,because the component has npt get the any dependency with add veriable..

but whenever i Click on the counter button the component(ChildA) is being called and the data of this component is render on the ui...so basically the counter state update > for that reason the d"ependencyUpdate useCallback " is being called and the comp re-render and the and all the data has shown in ui again and again ...

modda kotha holo counter e click hole component ta run hobe but add a click hole run hobena karon add kono dependency te nai..
 */


/*Basic difference between useCall back and useMemo.

useMemo:

Memoizing Expensive Computations: When you have a costly computation or calculation within a component that depends on certain values, you can use useMemo to memoize the result of that computation. This avoids recalculating the value on each render if the dependencies haven't changed.
Optimizing Component Rendering: Use useMemo to memoize values that are derived from other props or state variables. This ensures that those values are only recalculated when their dependencies change, improving performance by avoiding unnecessary recalculations.
In summary, useCallback is used to memoize functions, while useMemo is used to memoize values. They are both performance optimization tools provided by React Hooks and should be used in situations where you want to optimize the rendering and performance of your components.




useCallback:

Memoizing Functions: When you need to memoize a function to prevent it from being recreated on each render. This is particularly useful when passing callbacks to child components to ensure they don't cause unnecessary re-renders.
Optimizing Child Components: When passing callbacks as props to child components, you can use useCallback to memoize those callbacks, ensuring that the child components only re-render when their dependencies change.
Avoiding Unnecessary Re-renders: Use useCallback when defining event handlers or functions that are used as dependencies in other hooks like useEffect.





*/



