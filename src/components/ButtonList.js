
import React from 'react'
import Input from "./Input"; 

export default function ButtonList({inputs, setDisplay, allClear, findAnswer}) {
    return (
        <div className="buttons">
            {inputs.map((input, index) => {
                return <Input 
                            input={input} 
                            setDisplay={() => setDisplay(prevDisplay => prevDisplay + input)} 
                            key={index}
                        />
            })}
            <button onClick={() => allClear()}>ac</button>
            <button onClick={() => findAnswer()}>=</button>
        </div>
    )
}
