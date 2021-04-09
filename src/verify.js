// this is where i would like to build a hook that takes the diplay veriable and returns
// 1. a varible that says whether its valid
// 2. an error message
// 3. a function that rechecks whether the diplay is valid

const invalidEndInputs = [ "*", "^", ".", "-", "/", "(",]
const invalidStartInputs = [ "*", "^", ".", "-", "/", ")"]
const [error, setError] = useState("");

// for stopping invalid inputs
const verifyInput = (answer) => {
    const firstCharacter = answer.substring(0,1);
    const lastCharacter = answer.substring(answer.length - 1);
    if (answer.length === 0) {
        setError("You cannot send nothing");
        return false;
    }
    // if ending in any invalid expression end accordingly
    if (invalidEndInputs.includes(lastCharacter)) {
        setError("You cannot end a subbmission that way");
        return false;
    }
    // if starts off invalid then return invalid
    if (invalidStartInputs.includes(firstCharacter)) {
        setError("You cannot start a subbmission that way");
        return false;
    }
    setError("")
    return true;;
}