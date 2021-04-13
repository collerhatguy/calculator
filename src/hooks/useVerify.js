// this is where i would like to build a hook that takes the diplay veriable and returns
// 1. a varible that says whether its valid
// 2. an error message
// 3. a function that rechecks whether the diplay is valid
import {useState, useEffect} from "react"



export default function useVerify(input) {
    const [errorMessage, setErrorMessage] = useState("");
    const [validity, setValidity] = useState(true);
    // for stopping invalid inputs
    const verifyInput = (answer) => {

        if (!checkLength(answer, setErrorMessage, setValidity)) return; 
        if (!checkEnd(answer, setErrorMessage, setValidity)) return; 
        if (!checkStart(answer, setErrorMessage, setValidity)) return; 
        if (!checkParentheses(answer, setErrorMessage, setValidity)) return; 
        if (!checkOrder(answer, setErrorMessage, setValidity)) return; 
        // if there are no errors than continue 
        setErrorMessage("");
        setValidity(true);
        return;
    }
    useEffect(() => {
        verifyInput(input)
    }, [input])
    return [validity, errorMessage]
}

const checkParentheses = (answer, setErrorMessage, setValidity) => {
    var parenthesesCount = 0;
    for (var i = 0; i < answer.length; i++) {
        if (answer.charAt(i) === "(") parenthesesCount++;
        if (answer.charAt(i) === ")") parenthesesCount--;
        // if our count ever dips below zero then a closing parentheses is out of order
        if (parenthesesCount < 0) {
            setErrorMessage("Invalid parentheses")
            setValidity(false)
            return
        }
    }
    // if out count doest return to zero than the parentheses are unequel
    if (!parenthesesCount === 0) {
        setErrorMessage("Invalid parentheses")
        setValidity(false)
        return
    }
    return true;
}
const checkEnd = (answer, setErrorMessage, setValidity) => {
    const invalidEndInputs = [ "*", "+", "^", ".", "-", "/", "("]
    const lastCharacter = answer.charAt(answer.length - 1);
    if (invalidEndInputs.includes(lastCharacter)) {
        setErrorMessage("You cannot end a calculation that way");
        setValidity(false);
        return false;
    } 
    return true
}
const checkStart = (answer, setErrorMessage, setValidity) => {
    const invalidStartInputs = [ "*", "+", "^", "/", ")"]
    const firstCharacter = answer.charAt(0);
    if (invalidStartInputs.includes(firstCharacter)) {
        setErrorMessage("You cannot start a calculation that way");
        setValidity(false);
        return false;
    } 
    return true
}
const checkLength = (answer, setErrorMessage, setValidity) => {
    if (answer.length === 0) {
        setErrorMessage("Cannont calculate nothing")
        setValidity(false)
        return false;
    }
    return true;
}
const checkOrder = (answer, setErrorMessage, setValidity) => {
    const invalidNextToEachOther = ["*", "+", "^", "/", "-"]
    for (var i = 0; i < answer.length; i++) {
        if (!answer.charAt(i-1)) continue;
        if (invalidNextToEachOther.includes(answer.charAt(i-1)) && invalidNextToEachOther.includes(answer.charAt(i))) {
            setErrorMessage("Those two cant be next to each other")
            setValidity(false)
            return false;
        }
    }
    return true;
}