import React from 'react';
import Input from "./Input";

export default function AdvancedButtons({setDisplay, advanced}) {
   
    // would like to add ln and square root
    // "√" not accepted
    const advancedInputs = ["cos(", "sin(", "tan(","e", "log("]
    return (
        <div className={advanced ? "buttons-advanced" : "hidden"}>
            {advancedInputs.map(input => {
                return <Input input={input} setDisplay={() => setDisplay(prevDisplay => prevDisplay + input)} />
            })}
        </div>
    )
}
