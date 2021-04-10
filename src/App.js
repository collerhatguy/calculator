import React, { useState } from "react";
import { evaluate } from "mathjs";
import ButtonList from "./components/ButtonList";
import ButtonListAdvanced from "./components/ButtonListAdvanced";
import Display from "./components/Display";
import useVerify from "./verify";
import "./App.css"

function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");
  const [advanced, setAdvanced] = useState(false);
  const [validity, errorMessage] = useVerify(display);
  const findAnswer = () => {
    // if we get an error message return
    if (!validity) return;
    setAnswer(evaluate(display))
    setDisplay(JSON.stringify(evaluate(display)))
  }
  const allClear = () => {
    setAnswer("")
    setDisplay("")
  }
  return (
    <div className="app">
      <Display error={errorMessage} display={display} answer={answer} />
      <ButtonList setDisplay={setDisplay} allClear={allClear} findAnswer={findAnswer} advanced={advanced}/>
      <ButtonListAdvanced setDisplay={setDisplay} allClear={allClear} findAnswer={findAnswer} advanced={advanced}/>
      
    </div>
  );
}

export default App;
