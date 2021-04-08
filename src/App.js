import React, { useState } from "react";
import { evaluate } from "mathjs";
import ButtonList from "./components/ButtonList";
import "./App.css"
function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");
  const findAnswer = () => {
    setAnswer(evaluate(display))
    setDisplay(evaluate(display))
  }
  const allClear = () => {
    setAnswer("")
    setDisplay("")
  }
  const inputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", ".", "/", "*", "^", "(", ")"]
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
        <ButtonList inputs={inputs} setDisplay={setDisplay} allClear={allClear} findAnswer={findAnswer}/>
      </div>
    </>
  );
}

export default App;
