import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./navbar";
import NewComp from "./newComp";

function App() {
  const [count, setcount] = useState(0);
  const [first, setFirst] = useState(0);
  // ai useEffect ta takhon chalao jakhn ai component ta render hoche r ete kichu change hochena..[]- square bracket er modhe kono kichu nai mane kichu change hochena...
  useEffect(() => {
    alert("hey i am a developer!");
  }, []);

  useEffect(() => {
    console.log("this value has changed");

    alert("count has changed.");
  }, [count]); // count change hoche r alert ta kaj korlo.first page reload useeffect consider korche j count ta change hoche ..tai alert ta asche r jakhn button a click hoche tokhn o alert ta asche.

  useEffect(() => {
    alert("First has changed");
  }, [first]);

  return (
    <>
      <Navbar />
      <NewComp boxName="somnath" />
      <NewComp boxName="paul" />
      <NewComp boxName="Momo" />

      <button onClick={() => setcount(count + 1)}>click me{count}</button>
    </>
  );
}

export default App;
