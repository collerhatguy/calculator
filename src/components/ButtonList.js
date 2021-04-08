
import React from 'react'
import Input from "./Input"; 

export default function ButtonList({inputs, setDisplay, allClear, findAnswer}) {
    return (
        <div className="buttons">
            <button onClick={() => allClear()}>ac</button>
            {inputs.map((input, index) => {
                return <Input 
                            input={input} 
                            setDisplay={() => setDisplay(prevDisplay => prevDisplay + input)} 
                            key={index}
                        />
            })}
            <button onClick={() => findAnswer()}>=</button>
        </div>
    )
}
