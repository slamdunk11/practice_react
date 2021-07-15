import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Input = (props) => {
    const {multilines, type, placeholder, _onChange, value} = props


    if(multilines) {
        return(
            <ElTextarea 
            rows={22}
            value={value}
            placeholder={placeholder}
            onChange={_onChange}>
            </ElTextarea>
        )
    }
    return(
        <ElInput 
        placeholder={placeholder}
        value={value}
        onChange={_onChange}/>
    )
}

Input.defaultProps = {
    multilines: false,
    type: "text",
    placeholder: "텍스트를 입력해주세요",
    _onChange: () => {}
}

const ElInput = styled.input`
    width: 100%;
    border: none;
    font-size: 30px;
    margin: 15px 0px 10px 15px;
    
`;

const ElTextarea = styled.textarea`
    width: 100%;
    border: none;
    margin: 5px 0px 0px 15px;
    
`;

export default Input;

