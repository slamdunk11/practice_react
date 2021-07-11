import React from "react";
import styled from "styled-components";
import {Grid, Button, Image} from "../elements/index";

const Header = () => {
    return (
        <React.Fragment>
            <Grid is_flex width="auto" padding="15px">
                <Grid>아이디</Grid>
                <Grid is_flex width="auto">
                    <Button shape="round" margin="20px">새 글 작성</Button>
                    <Image></Image>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Header;