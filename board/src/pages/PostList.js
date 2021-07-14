import React from "react";
import { Grid, Button, Image, Text } from "../elements/index";
import Post from "../components/Post";
import {useSelector} from "react-redux";



const PostList = (props) => {
    const post_list = useSelector((state) => state.post.list);
    return(
        <React.Fragment>
           <Grid>
                <Grid max_width="800px" margin="0 auto">
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
                            {post_list.map((p, idx) => {
                                return <Post key={idx} {...p} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default PostList;

