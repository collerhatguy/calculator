
import React from 'react'
import Input from "./Input"; 

export default function ButtonList({setDisplay, allClear, findAnswer}) {

    const inputs = [ "*", "^", ".", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "(", "0", ")",];
    return (
        <div className="buttons">
            <button className="ac" onClick={() => allClear()}>ac</button>
            {inputs.map((input, index) => {
                return <Input 
                            input={input} 
                            setDisplay={() => setDisplay(prevDisplay => prevDisplay + input)} 
                            key={index}
                        />
            })}
            <button className="equals" onClick={() => findAnswer()}>=</button>
        </div>
    )
}
