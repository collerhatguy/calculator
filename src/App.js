import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";

function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState(0);
  useEffect(setAnswer(evaluate(display)), [display]);
  return (
    <>
      <div id="displayContainer">
        <h1>
          {display}
          {answer}
        </h1>
      </div>
      <div id="calculatorContainer">
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "1")}>
          1
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "2")}>
          2
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "3")}>
          3
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "4")}>
          4
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "5")}>
          5
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "6")}>
          6
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "7")}>
          7
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "8")}>
          8
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "9")}>
          9
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "0")}>
          0
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + ".")}>
          .
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "/")}>
          /
        </button>
        <button onClick={() => setDisplay((prevDisplay) => prevDisplay + "*")}>
          *
        </button>
        <button onClick={() => setDisplay("")}>ac</button>
        <button onClick={() => setDisplay(evaluate(display))}>=</button>
      </div>
    </>
  );
}

export default App;
