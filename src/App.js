import React, { useState } from "react";
import { evaluate } from "mathjs";
import ButtonList from "./components/ButtonList";
import Display from "./components/Display";
import "./App.css"

function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const findAnswer = () => {
    // if we get an error message return
    if (!verifyInput(display)) return;
    setAnswer(evaluate(display))
    setDisplay(evaluate(display))
  }
  const allClear = () => {
    setAnswer("")
    setDisplay("")
  }
  // for stopping invalid inputs
  const verifyInput = (answer) => {
    const firstCharacter = answer.substring(0,1);
    const lastCharacter = answer.substring(answer.length - 1);
    if (answer.length === 0) {
      setError("You cannot send nothing");
      return false;
    }
    // if ending in any invalid expression end accordingly
    if (invalidEndInputs.includes(lastCharacter)) {
      setError("You cannot end a subbmission that way");
      return false;
    }
    // if starts off invalid then return invalid
    if (invalidStartInputs.includes(firstCharacter)) {
      setError("You cannot start a subbmission that way");
      return false;
    }
    setError("")
    return true;;
  }
  const inputs = [ "*", "^", ".", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "(", "0", ")",]
  const invalidEndInputs = [ "*", "^", ".", "-", "/", "(",]
  const invalidStartInputs = [ "*", "^", ".", "-", "/", ")"]
  return (
    <>
      <Display error={error} display={display} answer={answer} />
      <div id="calculatorContainer">
        <ButtonList inputs={inputs} setDisplay={setDisplay} allClear={allClear} findAnswer={findAnswer}/>
      </div>

    </>
  );
}

export default App;
