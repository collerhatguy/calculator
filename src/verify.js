import React, {useState} from "react"

const invalidEndInputs = [ "*", "^", ".", "-", "/", "(",]
const invalidStartInputs = [ "*", "^", ".", "-", "/", ")"]
const [error, setError] = useState("");
const [valid, setValid] = useState(true);

const useVerify = (answer) => {
    // the verification process
    const verify = (answer) => {
        const firstCharacter = answer.substring(0,1);
        const lastCharacter = answer.substring(answer.length - 1);
        console.log(lastCharacter);
        // if too short than invalid
        if (answer.length === 0) {
            setError("You cannot send nothing");
            setValid(false);
        }
        // if ending in any invalid expression end accordingly
        if (invalidEndInputs.includes(lastCharacter)) {
            setError("You cannot end a subbmission that way");
            setValid(false);
        }
        // if starts off invalid then return invalid
        if (invalidStartInputs.includes(firstCharacter)) {
            setError("You cannot start a subbmission that way");
            setValid(false);
        } else {
            setError("")
            setValid(true)
        }
    }
    return [valid, error, () => verify(answer)]
}
export default useVerify;