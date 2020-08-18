import React, { useState, useEffect } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useEffect(
    function () {
      setAnswer(evaluate(display));
    },
    [display]
  );
  return (
    <>
      <div id="displayContainer">
        <h1>
          {display}
          {answer}
        </h1>
      </div>
      <div id="calculatorContainer">
        <button onClick={() => setDisplay(display + "1")}>1</button>
        <button onClick={() => setDisplay(display + "2")}>2</button>
        <button onClick={() => setDisplay(display + "3")}>3</button>
        <button onClick={() => setDisplay(display + "+")}>+</button>
        <button onClick={() => setDisplay(display + "4")}>4</button>
        <button onClick={() => setDisplay(display + "5")}>5</button>
        <button onClick={() => setDisplay(display + "6")}>6</button>
        <button onClick={() => setDisplay(display + "-")}>-</button>
        <button onClick={() => setDisplay(display + "7")}>7</button>
        <button onClick={() => setDisplay(display + "8")}>8</button>
        <button onClick={() => setDisplay(display + "9")}>9</button>
        <button onClick={() => setDisplay(display + "*")}>*</button>
        <button onClick={() => setDisplay(display + ".")}>.</button>
        <button onClick={() => setDisplay(display + "0")}>0</button>
        <button onClick={() => setDisplay("")}>ac</button>
        <button onClick={() => setDisplay(evaluate(display))}>=</button>
      </div>
    </>
  );
}

export default App;
