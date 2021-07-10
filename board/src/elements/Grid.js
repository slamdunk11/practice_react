import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {is_flex, width, margin, padding, bg, center, children, _onClick} = props;

    const styles = {
        is_flex: is_flex,
        width: width,    //div의 width에 props로 받아온 width를 넣는다
        margin: margin,
        padding: padding,
        bg: bg,
        center: center,
    }
    return(
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
        </React.Fragment>
    );
}

Grid.defaultProps = {
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false,
    bg: false,
    center: false,
    _onClick: () => {}
};

const GridBox = styled.div`
    //is_flex
    ${(props) => (
        props.is_flex? 
            `display: flex; 
            align-items: center; //세로 높이에서 중간
            justify-content: space-between;` 
            : ""
        )}
    width: ${(props) => props.width};
    height: 100%;
    box-sizing: border-box;
    
    //padding
    ${(props) => props.padding? `padding: ${props.padding};` : ""};
    ${(props) => props.margin? `margin: ${props.margin};` : ""};
    ${(props) => props.bg? `background-color: ${props.bg};` : ""};
    ${(props) => props.center? `text-align: center` : ""}


`;

export default Grid;


