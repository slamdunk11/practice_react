import React, {useState, useRef} from "react";
import styled from "styled-components";


function Connection() {

    // const [word, setWord] = useState("가나");
    // const [result, setResult] = useState("");
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

    const [inputs, setInputs] = useState({
        word: "가나",
        input: "",
        result: "",
    })

     const Compare = () => {
        if(inputs.input.charAt(0) === inputs.word.charAt(inputs.word.length-1)){
            setInputs({
                word: inputs.value,
                input: "",
                result: "딩동댕",
            })
            console.log(inputs.input.charAt(0), inputs.word.charAt(inputs.word.length-1));
            return;
 
        }else{
            setInputs({
                input: "",
                result: "땡",
            })
            return;
        }
    }

 
    return(
        <div>
            <div>{inputs.word}</div>
            <div>
                <input value={inputs.input}/>
                <button onClick={Compare}>입력!</button>
            </div>
            <div>{inputs.result}</div>
        </div>
    );
}

export default Connection;