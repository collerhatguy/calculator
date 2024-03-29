
import React from 'react'
import Input from "./Input"; 
import AdvancedButtons from "./AdvancedButtons";

export default function ButtonList(props) {
    const { setDisplay, allClear, findAnswer, advanced } = props
    const inputs = [ "*", "^", ".", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "(", "0", ")",];
    return (
        <div
            style={advanced ? {} : {gridTemplateColumns: "1fr"}} 
            className="all-buttons">
                <AdvancedButtons 
                    setDisplay={setDisplay} 
                    advanced={advanced}
                />
            <div className="normal-buttons">
                <button 
                    className="ac" 
                    onClick={allClear}
                >ac</button>
                {inputs.map((input, index) => 
                    <Input 
                        input={input} 
                        setDisplay={() => setDisplay(prevDisplay => prevDisplay + input)}
                        key={index}
                    />
                )}
                <button 
                    className="equals" 
                    onClick={findAnswer}
                >=</button>
            </div>
        </div>
    )
}
