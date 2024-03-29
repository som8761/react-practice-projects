// import React, { useReducer } from 'react'

// let initialState = 'block'
// const ToggleText = () => {
//     const reducer = (state, action) =>{
//         switch(action){
//             case 'none':
//                 return state = 'none';
//             case 'block':
//                 return state = 'block'
//         }
//     }
//     const [display, dispatch] = useReducer(reducer, initialState)
//   return (
//     <>
//     <div style={{display: display}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, delectus temporibus, fuga commodi dolor corrupti atque laboriosam in quidem rem, ea ut dolorum repellat? Dolorum odio quia quod fugit vel. </div>

//     <button onClick={()=>{dispatch('none')}}>Hide me</button>
//     <button onClick={()=>{dispatch('block')}}>Show me</button>
//     </>
//   )
// }

// export default ToggleText



/* in this scenario instead of using useReducer usestate is more redable and comfortable.  */

import React, { useReducer,useState } from 'react'

let initialState = 'block'
const ToggleText = () => {
    const reducer = (state, action) =>{
        switch(action){
            case 'Toggle_Display':
               return state === 'block' ? 'none' : 'block';
        }
    }

    
    const [display, dispatch] = useReducer(reducer, initialState)
    const [buttonText, setButtonText] = useState('Hide Me')

    function xyz(){
        if(buttonText === 'Hide Me'){
            setButtonText('Sow Me')
        }
        else{
            setButtonText('Hide Me')
        }
    }
    function abcd(){
        dispatch('Toggle_Display')
        xyz()
    }
  return (
    <>
    <div style={{display: display}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, delectus temporibus, fuga commodi dolor corrupti atque laboriosam in quidem rem, ea ut dolorum repellat? Dolorum odio quia quod fugit vel. </div>

    <button onClick={abcd}>{buttonText}</button>
    </>
  )
}

export default ToggleText