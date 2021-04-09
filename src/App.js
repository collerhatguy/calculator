import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import ButtonList from "./components/ButtonList";
import useVerify from "./verify";
import "./App.css"

function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");
  const [valid, errorMessage, verify] = useVerify(answer)
  const findAnswer = () => {
    // if we get an error message return
    if (valid) return;
    setAnswer(evaluate(display))
    setDisplay(evaluate(display))
  }
  const allClear = () => {
    setAnswer("")
    setDisplay("")
  }
  // whenever the answer changes check if its valid
  useEffect(() => {
    verify(answer)
  }, [answer])
  const inputs = [ "*", "^", ".", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "(", "0", ")",]
  return (
    <>
      <div id="displayContainer">
        <h2>
          <div>
            {errorMessage}
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
