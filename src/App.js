import React, { useState } from "react"
import { evaluate } from "mathjs"
import ButtonList from "./components/ButtonList"
import Display from "./components/Display"
import useVerify from "./hooks/useVerify"
import useToggle from "./hooks/useToggle"
import "./styles/App.css"

function App() {
  const [display, setDisplay] = useState("")
  const [answer, setAnswer] = useState("")
  const [advanced, toggleAdvanced] = useToggle(false)
  const [validity, errorMessage, ghostAnswer, setGhostAnswer] = useVerify(display)
  
  const findAnswer = () => {
    if (!validity) return
    setAnswer(evaluate(display))
    setGhostAnswer("")
    setDisplay(JSON.stringify(evaluate(display)))
  }
  const allClear = () => {
    setAnswer("")
    setDisplay("")
  }
  return (
    <section className="app">
      <Display 
        error={errorMessage} 
        display={display} 
        answer={answer} 
        ghostAnswer={ghostAnswer}
      />
      <ButtonList 
        setDisplay={setDisplay} 
        allClear={allClear} 
        findAnswer={findAnswer} 
        advanced={advanced}
      />
      <button 
        className="advanced-button" 
        onClick={toggleAdvanced}
      >Advanced</button>
    </section>
  )
}

export default App;
