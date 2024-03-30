import { createContext } from 'react'
import './App.css'
import CompA from './compA'

const value = createContext()
const value2 = createContext()

function App() {
  const name = 'somnath'
  const gender = 'Male'
  return (
    <value.Provider value={name}>
      <value2.Provider value={gender}>
      <CompA/>
      </value2.Provider>
    </value.Provider>

  )
}

export default App
export {value, value2}
