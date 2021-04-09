// this is where i would like to build a hook that takes the diplay veriable and returns
// 1. a varible that says whether its valid
// 2. an error message
// 3. a function that rechecks whether the diplay is valid
import {useState} from "react"

const invalidEndInputs = [ "*", "^", ".", "-", "/", "(",]
const invalidStartInputs = [ "*", "^", ".", "-", "/", ")"]

const [errorMessage, setErrorMessage] = useState("");
const [validity, setValidity] = useState(true);

// for stopping invalid inputs
const verifyInput = (answer) => {
    const firstCharacter = answer.substring(0,1);
    const lastCharacter = answer.substring(answer.length - 1);
    if (answer.length === 0) {
        setErrorMessage("You cannot send nothing");
        setValidity(false);
    }
    // if ending in any invalid expression end accordingly
    if (invalidEndInputs.includes(lastCharacter)) {
        setErrorMessage("You cannot end a subbmission that way");
        setValidity(false);
    }
    // if starts off invalid then return invalid
    if (invalidStartInputs.includes(firstCharacter)) {
        setErrorMessage("You cannot start a subbmission that way");
        setValidity(false);
    } else {
        setErrorMessage("");
        setValidity(true);
    }
}
const useVerify = () => {
    
}
