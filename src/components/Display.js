import React from 'react'

export default function Display({error, display, answer, ghostAnswer}) {
    return (
        <div id="displayContainer">
            <h2>
                <div>
                    {error}
                </div>
                <div>
                    {display} =
                </div>
                <div id="ghost-answer">
                    {ghostAnswer}
                </div>
                <div>
                    {answer}
                </div>
            </h2>
      </div>
    )
}
