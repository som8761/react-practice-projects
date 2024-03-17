import { useState } from 'react'
import './App.css'
import FetchApi from './fetchApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FetchApi/>
    </>
  )
}

export default App
