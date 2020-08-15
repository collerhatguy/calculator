import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [display, setDisplay] = useState("");
  function update() {
    setDisplay((prevDisplay) => (prevDisplay += "1"));
  }
  return (
    <>
      <div>
        <h1>{display}</h1>
        <Button onClick={update} />
      </div>
    </>
  );
}

export default App;
