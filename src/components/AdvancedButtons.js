import React from 'react';
import Input from "./Input";

export default function AdvancedButtons({setDisplay, advanced}) {
    const style = {
        display: advanced ? "grid" : "none",
    }
    const advancedInputs = []
    return (
        <div className="buttons-advanced" style={style}>
        </div>
    )
}
