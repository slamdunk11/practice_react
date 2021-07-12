import React from "react";
import { Grid, Button, Image, Text } from "../elements/index";

const PostList = () => {
    return(
        <React.Fragment>
            <Grid>
                <Grid>
                    <Grid is_flex>
                        <Grid is_flex>
                            <Image width="100px" height="100px"> </Image>
                            <Text>닉네임</Text>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Button>글</Button>
                        <Button>시리즈</Button>
                        <Button>소개</Button>
                    </Grid>
                    <Grid>
                        map...Post
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default PostList;

