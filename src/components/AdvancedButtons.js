import React from 'react'
import Input from "./Input"

export default function AdvancedButtons(props) {
   const { setDisplay, advanced } = props
    const advancedInputs = ["cos(", "sin(", "tan(","e", "log("]
    if (!advanced) return null
    return (
        <div className="buttons-advanced">
            {advancedInputs.map(input => 
                <Input 
                    input={input} 
                    setDisplay={() => setDisplay(prevDisplay => prevDisplay + input)} 
                />
            )}
        </div>
    )
}
