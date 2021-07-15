import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {shape, is_float, width, height, margin, padding, bg, color, children, _onClick} = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        bg: bg,
        color: color,
        
     
    }
    if (is_float) {
        return(
            <React.Fragment>
                <FloatButton {...styles} onClick={_onClick}>{children}</FloatButton>
            </React.Fragment>
        )
    }

    if(shape ==="round") {
        return(
            <React.Fragment>
                <RoundButton {...styles} onClick={_onClick}>{children}</RoundButton>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <RectangleButton {...styles}>{children}</RectangleButton>
        </React.Fragment>
    );

}

Button.defaultProps = {
    is_float: false,
    shape: "round",
    width: "110px",
    height: "40px",
    margin: false,
    padding: false,
    bg: "#FFFFFF",
    color: "#121212",
    _onClick: () => {},
    
}

const RectangleButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${(props) => props.margin? `margin: ${props.margin};`: ""};
    ${(props) => props.padding? `padding: ${props.padding};`: ""};
    ${(props) => props.bg? `background-color:${props.bg};`: ""};
    ${(props) => props.color? `color:${props.color};`: ""};
   
    border-radius: 5%;
    
`;

const RoundButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${(props) => props.margin? `margin: ${props.margin};`: ""};
    ${(props) => props.padding? `padding: ${props.padding};`: ""};
    ${(props) => props.bg? `background-color:${props.bg};`: ""};
    ${(props) => props.color? `color:${props.color};`: ""};

    border-radius: 20px;
    border: 0.5px solid black;
    outline:none;
`;

const FloatButton = styled.button`
    width: 50px;
    height: 50px;

    ${(props) => props.margin? `margin: ${props.margin};`: ""};
    ${(props) => props.padding? `padding: ${props.padding};`: ""};
    ${(props) => props.bg? `backgroud-color:${props.bg};`: ""};
    ${(props) => props.color? `color:${props.color};`: ""};
    ${(props) => props.center? `text-align: center`: ""};
    border-radius: 25px;
    border: none;
`;

export default Button;