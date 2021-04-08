import React from 'react'

export default function ButtonList({inputs, setDisplay}) {
    return (
        <div>
            {inputs.map((input, index) => {
                return <Input 
                            input={input} 
                            setDisplay={() => setDisplay(prevDisplay => prevDisplay + input)} 
                            key={index}
                        />
            })}
        </div>
    )
}
