import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)


  useEffect(() => {
   alert('i will render after everyone!')
  }) 
  
  useEffect(() => {
   alert('i will render only once after render the first time!')
  },[]) 
  
  useEffect(() => {
    alert('count1 has changed!')
  }, [count1])
  // so ekhane ami bujhte parchi j, jadi ami click here-1 a click kori tahole count-1 er state ta ache seta update hobe r state update manei puro component ta re-render howa..r puro component ta jadi re-render hoy tahole ai count-2 ta update hobena karon ota te akta alada dependecy dewa ache.otate abar jakhn click korbo perticularly otai update hobe tokhn r ata update hobena..mane puro component ta re0render holeo onno kono useEffect "jar modhe dependecy dewa ache" seta kaj korbena. 

  useEffect(() => {
    alert('count2 has changed!')
  }, [count2])
  // ata jakhn kaj korbe takhn uporer ta kaj kronena,same goes for the previous one.



  return (
    <div className='container'>
      {/* first box */}
      <div className="box">
      <h1>{count1}</h1>
      <button onClick={()=>{setCount1(count1 + 1)}}>Click Here1</button>
      </div>

      {/* second box */}
      <div className="box">
      <h1>{count2}</h1>
      <button onClick={()=>{setCount2(count2 + 1)}}>Click Here2</button>
      </div> 
    </div>
  )
}

export default App



/*
||SUCH CASES WHERE I CAN USE USEeFFECT ||

Fetching Data: When you need to fetch data from an API or perform asynchronous operations after the component mounts or updates.

Subscribing to External Data Sources: If you're working with external data sources like web sockets, useEffect can be used to subscribe to these sources and handle incoming data.

Updating the DOM: When you need to manipulate the DOM directly, such as adding or removing event listeners, updating document titles, etc.

Cleaning Up: useEffect can also be used for cleanup tasks like unsubscribing from data sources or removing event listeners to prevent memory leaks.

Managing Document Title: When you want to dynamically update the document title based on the component's state or props.

Animating Components: If you're working with animations, useEffect can be used to trigger animations based on state changes.

Handling Authentication and Authorisation: useEffect can be used for managing authentication and authorization logic, such as checking if a user is logged in or has the necessary permissions.

Overall, useEffect is a versatile hook that allows you to perform various side effects in React function components, helping you manage component lifecycle and interactions with the outside world.

*/
