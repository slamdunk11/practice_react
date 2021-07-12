import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/index";

const Post = () => {
    return(
        <React.Fragment>
            <Grid>
                <Grid>
                    <Text>제목</Text>
                </Grid>
                <Grid>
                    <Text>내용</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Post;