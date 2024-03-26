import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   </React.StrictMode>,
)


/*EXERCISES :

Counter with Previous Value:
Create a component that displays a counter and a button to increment it. Additionally, display the previous value of the counter below the current value. Use useState to manage the counter value and useRef to store the previous value.

Fetch Data from API:
Create a component that fetches data from a public API (e.g., JSONPlaceholder) when the component mounts. Display the fetched data in the component. Use useState to store the fetched data, and useEffect to fetch the data when the component mounts.

Dynamic Input Focus:
Create a form with multiple input fields. When the user clicks on an input field, focus should shift to that field. Use useRef to obtain references to the input fields, and useEffect to handle the focus behaviour.

Toggle Visibility:
Create a component with a button that toggles the visibility of a paragraph. Initially, the paragraph should be hidden. Use useState to manage the visibility state (boolean), and useRef to obtain a reference to the paragraph element for toggling its visibility.

Interval Timer:
Create a component that displays a timer that increments every second. Use useState to manage the timer value, and useEffect to update the timer every second. Use useRef to store the interval ID for clearing the interval when the component unmounts. 

*/
