import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [display, setDisplay] = useState(0);
  function update() {
    setDisplay(prevDisplay => prevDisplay + 1);
  }
  return (
    <>
      <div>
        <h1>{display}</h1>
        <button onClick={() => setDisplay(display + 1)}>1</button>
        <button onClick={update} > 2</button>
        <Button onClick={() => setDisplay(display + 1)} />
      </div>
    </>
  );
}

export default App;
