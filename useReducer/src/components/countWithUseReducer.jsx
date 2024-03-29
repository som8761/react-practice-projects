import { useReducer } from 'react'

let initialState = 0;
const CountWithUseReducer = () => {
    const reducer = (state, action) =>{
        switch(action){
            case 'Increment':
                return state + 1;
            case 'Decrement':
                return state - 1;
            default:
                return state;    
        }
    }

  const [counter, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <div>{counter}</div>
    <button onClick={()=> dispatch('Increment')}>Increment</button>
    <button onClick={()=> dispatch('Decrement')}>Decrement</button>
    </>
  )
}

export default CountWithUseReducer