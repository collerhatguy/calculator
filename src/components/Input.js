
import React from 'react'

export default function Input({input, setDisplay}) {
    var className = "";
    parseInt(input) <= 10 ? className = "number" : className = "non-number";
    console.log(parseInt(input))
    return (
        <button className={className} onClick={() => setDisplay()}>
            {input}
        </button>
    )
}
