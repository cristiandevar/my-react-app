import { useState, useEffect, useRef } from "react";

function HooksExample10(){
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }
    , [inputValue]);

    return(
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <p>Current Input Value: {inputValue}</p>
            <p>Previous Input Value: {previousInputValue.current}</p>
        </>
    );
}

export default HooksExample10;