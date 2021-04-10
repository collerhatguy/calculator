import React from 'react';
import Input from "./Input";

export default function AdvancedButtons({setDisplay, advanced}) {
    const style = {
        display: advanced ? "grid" : "none",
    }
    // would like to add ln and square root
    const advancedInputs = ["cos(", "sin(", "tan(","e", "log(",]
    return (
        <span className="buttons-advanced" style={style}>
            {advancedInputs.map(input => {
                return <Input input={input} setDisplay={() => setDisplay(prevDisplay => prevDisplay + input)} />
            })}
        </span>
    )
}
