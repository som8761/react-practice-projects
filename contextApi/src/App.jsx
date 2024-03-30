import { createContext } from "react";
import "./App.css";
import CompA from "./compA";

const value = createContext();
const value1 = createContext();

function App() {
  const name = "Somnath Paul";
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SqywSnitY54CVmxpjkjGg1bFFLG9yFtySOPM3bOdFw&s";

  return (
    <>
      <value.Provider value={name}>
        <value1.Provider value={image}>
          <CompA />
        </value1.Provider>
      </value.Provider>
    </>
  );
}

export default App;
export { value,value1 };
