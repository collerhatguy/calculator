import React, { useState } from "react";
import { evaluate } from "mathjs";
import ButtonList from "./components/ButtonList";
import Display from "./components/Display";
import useVerify from "./verify";
import "./App.css"

function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");
  const [validity, errorMessage] = useVerify(display);
  const findAnswer = () => {
    // if we get an error message return
    if (!validity) return;
    setAnswer(evaluate(display))
    setDisplay(evaluate(display))
  }
  const allClear = () => {
    setAnswer("")
    setDisplay("")
  }
  const inputs = [ "*", "^", ".", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "(", "0", ")",];
  return (
    <>
      <Display error={errorMessage} display={display} answer={answer} />
      <div id="calculatorContainer">
        <ButtonList inputs={inputs} setDisplay={setDisplay} allClear={allClear} findAnswer={findAnswer}/>
      </div>

    </>
  );
}

export default App;
