import React,{useState, useEffect} from 'react'

/*Toggle Visibility:
Create a component with a button that toggles the visibility of a paragraph. Initially, the paragraph should be hidden. Use useState to manage the visibility state (boolean), and useRef to obtain a reference to the paragraph element for toggling its visibility.*/

const ToggleVisibility = () => {
    const [display, setDisplay] = useState('none')
    
   
    function togglePara(){
        if(display === 'none'){
            setDisplay('block')
            document.body.style.backgroundColor = 'red'
           
        }
        else{
            setDisplay('none')
            document.body.style.backgroundColor = 'initial'
        }
    }
  return (
    <>
    <p style={{display:display}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus modi voluptate aperiam repudiandae iusto deleniti? Illo, excepturi? Dolorem veniam, voluptate delectus minus ducimus pariatur sit adipisci repudiandae doloremque maiores fugiat.</p>

    
    <button onClick={togglePara}>Click To Toggle</button>
    </>
  )
}

export default ToggleVisibility