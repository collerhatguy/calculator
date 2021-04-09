import React from 'react'

export default function Display({error, display, answer}) {
    return (
        <div id="displayContainer">
            <h2>
                <div>
                    {error}
                </div>
                <div>
                    {display} =
                </div>
                <div>
                    {answer}
                </div>
            </h2>
      </div>
    )
}
