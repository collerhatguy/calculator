import React, { useState } from "react";
import { evaluate } from "mathjs";
import ButtonList from "./components/ButtonList";
import "./App.css"
function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const findAnswer = () => {
    if (!verifyInput(answer)) return;
    setAnswer(evaluate(display))
    setDisplay(evaluate(display))
  }
  const allClear = () => {
    setAnswer("")
    setDisplay("")
  }
  // fro stopping invalid inputs
  const verifyInput = (answer) => {
    // if ending in any invalid expression end accordingly
    if (invalidEndInputs.includes(answer.substring(answer.length - 2, answer.length - 1))) {
      setError("You cannot end a subbmission that way");
      return false;
    }
    // if starts off invalid then return invalid
    if (invalidStartInputs.includes(answer.substring(0, 1))) {
      setError("You cannot start a subbmission that way");
      return false;
    }
    setError("")
    return true;
  }
  const inputs = [ "*", "^", ".", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "(", "0", ")",]
  const invalidEndInputs = [ "*", "^", ".", "-", "/", "(",]
  const invalidStartInputs = [ "*", "^", ".", "-", "/", ")"]
  return (
    <>
      <div id="displayContainer">
        <h2>
          <div>
            {error}
          </div>
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
