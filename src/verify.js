// this is where i would like to build a hook that takes the diplay veriable and returns
// 1. a varible that says whether its valid
// 2. an error message
// 3. a function that rechecks whether the diplay is valid
import {useState, useEffect} from "react"



export default function useVerify(input) {
    const invalidEndInputs = [ "*", "+", "^", ".", "-", "/", "("]
    const invalidStartInputs = [ "*",  "+", "^", ".", "-", "/", ")"]
    const [errorMessage, setErrorMessage] = useState("");
    const [validity, setValidity] = useState(true);
    // for stopping invalid inputs
    const verifyInput = (answer) => {
        
        if (answer.length === 0) {
            setErrorMessage("You cannot calculate nothing");
            setValidity(false);
            return;
        } 
        // if there is more than one character than set the variables
        const firstCharacter = answer.substring(0,1);
        const lastCharacter = answer.substring(answer.length - 1);
        // represents parenthesis in our answer
        
        if (invalidEndInputs.includes(lastCharacter)) {
            setErrorMessage("You cannot end a subbmission that way");
            setValidity(false);
            return;
        } 
        if (invalidStartInputs.includes(firstCharacter)) {
            setErrorMessage("You cannot start a subbmission that way");
            setValidity(false);
            return;
        } 
        setErrorMessage("");
        setValidity(true);
        return;
    }
    useEffect(() => {
        verifyInput(input)
        setTimeout(() => {
            console.log(validity, errorMessage)
        }, 500)
    }, [input])
    return [validity, errorMessage]
}

const parenthesesCheck = (answer, setErrorMessage, setValidity) => {
    var parenthesesCount = 0;
    parenthesesCheck: for (var i = 0; i < answer.length; i++) {
        if (answer.charAt(i) == "(") parenthesesCount++;
        if (answer.charAt(i) == ")") parenthesesCount--;
        // if our count ever dips below zero then a closing parentheses is out of order
        if (parenthesesCount < 0) {
            setErrorMessage("invalid parentheses")
            setValidity(false)
            return
        }
    }
    // if out count doest return to zero than the parentheses are unequel
    if (!parenthesesCount === 0) {
        setErrorMessage("invalid parentheses")
        setValidity(false)
        return
    }
}
