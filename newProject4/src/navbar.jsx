import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    let [count, setCount] = useState(0);
    // count += 1; // erom bhabe jadi ami korte chai tahole setCount er use hochena mane useState er use hochena.tai ai khane thaka 1 tai initial value hoye jache 0 r bodole..tai amake regular js er bodole always useState er setCount er use kora uchit jamn ta niche hoche..

    function incrimentVal(){
        count += 1
        return setCount(count + 1)
    }
    function decrimentVal(){
        count -= 1
        return setCount(count - 1)
    }
  return (
    <nav>
        <ul>
            {/* with out function  */}
            {/* <li onClick={()=>{setCount(count + 1)}} style={{color:"red"}}>Home{count}</li>
            <li onClick={()=>{setCount(count - 1)}}>About us{count}</li>
            <li>Contact Us</li> */}

            {/* with function (functions are mentioned in above) */}
            <li onClick={incrimentVal} style={{color:"red"}}
            >Home{count}</li>
            <li onClick={decrimentVal}>About us{count}</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar