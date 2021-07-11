import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {bold, font_size, color, children} = props;
    const styles = {
        bold: bold,
        font_size: font_size,
        color: color,
    }
    return (
       <P>{children}</P>
    )
}

Text.defaultProps = {
    children: null,
    bold: false,
    font_size: "14px",
    color: "#212121",
}

const P = styled.p`
    ${(props) => (props.bold? `font-weight: "600"` : "400")};
    font-size: ${(props) => props.font_size};
    color: ${(props) => props.color};
`;


export default Text;