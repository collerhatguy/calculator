
import React from 'react'

export default function Input({input, setDisplay}) {
    return (
        <button onClick={() => setDisplay()}>
            {input}
        </button>
    )
}
