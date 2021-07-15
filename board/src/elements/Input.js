import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Input = (props) => {
    const {multilines, type, placeholder, _onChange} = props


    if(multilines) {
        return(
            <ElTextarea 
            rows={22}
            placeholder={placeholder}
            onChange={_onChange}>
            </ElTextarea>
        )
    }
    return(
        <ElInput 
        placeholder={placeholder}
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
  
    
`;

const ElTextarea = styled.textarea`
    width: 100%;

    
`;

export default Input;

