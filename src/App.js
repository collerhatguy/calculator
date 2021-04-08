import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css"
function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");
  const findAnswer = () => {
    setAnswer(evaluate(display))
    setDisplay("")
  }
  const inputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "/", "*"]
  return (
    <>
      <div id="displayContainer">
        <h2>
          <div>
            {display} =
          </div>
          <div>
            {answer}
          </div>
        </h2>
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
        <button onClick={() => findAnswer()}>=</button>
      </div>
    </>
  );
}

export default App;
