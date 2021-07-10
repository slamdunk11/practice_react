import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {is_float, width, height, margin, padding, bg, color, children, _onClick} = props;

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
                <FloatButton>{children}</FloatButton>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <ElButton {...styles}>{children}</ElButton>
        </React.Fragment>
    );

}

Button.defaultProps = {
    is_float: false,
    width: "110px",
    height: "40px",
    margin: false,
    padding: false,
    bg: false,
    color: "#121212",
}

const ElButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${(props) => props.margin? `margin: ${props.margin};`: ""};
    ${(props) => props.padding? `padding: ${props.padding};`: ""};
    ${(props) => props.bg? `backgroud-color:${props.bg};`: ""};
    ${(props) => props.color? `color:${props.color};`: ""};
   
    border-radius: 5%;
    border: none;
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