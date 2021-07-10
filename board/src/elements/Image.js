import React from "react";
import styled from "styled-components";

const Image = (props) => {

    const {shape, width, height, } = props;
    return(
        <React.Fragment>
            <roundImage></roundImage>
        </React.Fragment>
    );
}

const roundImage = styled.div`

`;

export default Image;