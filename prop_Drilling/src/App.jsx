import './App.css'
import CompA from './compA'

function App() {

  const name = "somnath"
  const image = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';
  
  return (
    <>
      <CompA name = {name} image = {image}/>
    </>
  )
}

export default App
