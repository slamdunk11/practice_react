import React from "react";
import styled from "styled-components";
import {Grid, Button, Image} from "../elements/index";

const Header = () => {
    return (
        <Grid>
            <Grid>아이디</Grid>
            <Grid>
                <Button>버튼이다...</Button>
                <Image></Image>
            </Grid>
        </Grid>
    );
}

export default Header;