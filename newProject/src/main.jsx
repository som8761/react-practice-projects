import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import Products from './products.jsx'

const element = (
  <a href='https://google.com' target='_blank'>visit google</a>
)
// const anotherElm = "chai aur code"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  element
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  // <App />
  // <Products/>
  // </>
  reactElement
)

