import React, {useState, useRef} from "react";
// import styled from "styled-components";


function Connection() {

    const [word, setWord] = useState("가나");
    const [result, setResult] = useState("");
    // const wordInput = useRef("");
    // const Compare = () => {
    //     if(wordInput.current.value.charAt(0) === word.charAt(word.length-1)){
    //         setWord(wordInput.current.value);
    //         console.log(wordInput.current.value.charAt(0), word.charAt(word.length-1));
    //         setResult("딩동댕");
            
    //     }else{
    //         setResult("땡");
            
    //     }
    // }

    // const [inputs, setInputs] = useState({
    //     word: "가나",
       
    //     result: "",
    // })

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

     const Compare = () => {
        if(input.charAt(0) === word.charAt(word.length-1)){
            setWord(input)
            setResult("딩동댕")
            setInput("")
            
            return;
 
        }else{
            setResult("땡")
            setInput("")
            return;
        }
    }

 
    return(
        <div>
            <div>{word}</div>
            <div>
                <input onChange={handleChange} value={input}/>
                <button onClick={Compare}>입력!</button>
            </div>
            <div>{result}</div>
        </div>
    );
}

export default Connection;