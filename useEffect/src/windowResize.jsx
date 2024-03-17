// clean up function
import React, { useState, useEffect } from 'react'

const WindowResize = () => {
    // first a ekhane ami initial value ta dilam,mane jeta window er j actual full width ta seta anlam.
    const [windowwidth, setWindowWidth] = useState(window.innerWidth)

    const resizeTheScreen = () =>{
        console.log(window.innerWidth);
        setWindowWidth(window.innerWidth)
    }
    
    // then ami ekhnae resize namok akta event anlam jata use korle ami width komle ba barle tar j width ta ache seta pai.
    useEffect(() => {
        console.log("add event");
        window.addEventListener('resize', resizeTheScreen);

        return () =>{
            console.log("remove event");
            window.removeEventListener('resize', resizeTheScreen);
        }
    });
    
    return (
    <>
      <div>WindowResize</div>
      <h2>The actual value of this window is:{windowwidth}</h2>
    </>
  )
}

export default WindowResize