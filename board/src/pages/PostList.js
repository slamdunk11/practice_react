import React from "react";
import { Grid, Button, Image, Text } from "../elements/index";

const PostList = () => {
    return(
        <React.Fragment>
            <Grid>
                <Grid>
                    <Grid>
                        <Grid>
                            <Image>사진</Image>
                            <Text>닉네임</Text>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Button>글</Button>
                        <Button>시리즈</Button>
                        <Button>소개</Button>
                    </Grid>
                    <Grid>postlist</Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default PostList;

