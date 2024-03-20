import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DynamicTitleChange from './components/dynamicTitleChange'
import WindowResizeApp from './components/windowResizeApp.jsx'
import ClockApp from './components/clockApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DynamicTitleChange/> */}
    {/* <WindowResizeApp/> */}
    <ClockApp/>
  </React.StrictMode>,
)
