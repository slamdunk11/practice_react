import React from "react";
import styled from "styled-components";

const Image = (props) => {

    const {shape, width, height, src, children} = props;

    const styles = {
        src: src,
        width: width,
        height: height,
    }
    if(!src){

        return null;

    }

    if(shape === "rectangle"){
        return (
        <AspectOutter>
            <AspectInner {...styles}></AspectInner>
        </AspectOutter>
            );
    }

    return(
        <React.Fragment>
            <RoundImage {...styles}>{children}</RoundImage>
        </React.Fragment>
    );
}

Image.defaultProps = {
    children: false,
    shape: "circle",
    src: "https://blog.kakaocdn.net/dn/bokozL/btqEzAJHJvd/QxXBJbKmOf956K858SmmM1/img.png",
    width: "36px",
    height: "36px",
}

const RoundImage = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-image: url("${(props) => props.src}");
    background-size: cover;
    box-shadow: 1px 1px 6px 1px #eee;
    border-radius: 50%;
    vertical-align: middle;
    
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    
`;

export default Image;