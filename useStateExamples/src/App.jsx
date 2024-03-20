import { useState } from 'react'
import './App.css'
import Counter from './components/counter';
import ToggleText from './components/toggleText';
import InputFieldexample from './components/inputFieldexample';
import TodoList from './components/todoList';
import ColorPicker from './components/colorPicker';
import SimpleForm from './components/simpleForm';

function App() {
  return (
    <>
      {/* <Counter/> */}
      <ToggleText/>
      <InputFieldexample/>
      <TodoList/>
      <ColorPicker/>
      <SimpleForm/>
    </>
  )
}

export default App
