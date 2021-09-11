
import React from 'react'

export default function Input(props) {
    const { input, setDisplay } = props
    const className = parseInt(input) <= 10 ? "number" : "non-number"
    return (
        <button 
            className={className} 
            onClick={setDisplay}
        >{input}</button>
    )
}
