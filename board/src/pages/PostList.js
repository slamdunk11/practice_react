import React, {useEffect} from "react";
import { Grid, Button, Image, Text } from "../elements/index";
import Post from "../components/Post";

import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";



const PostList = (props) => {
    
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);

    console.log(post_list);

    const {history} = props;
    

    React.useEffect(() => {
        dispatch(postActions.getPostFB());
        console.log(post_list);
    }, []);
    //effect를 수행하고 (mount하거나 unmount할 때) 
    //그것을 한 번만 실행하고 싶다면 두번째 인자로
    //[]
    return(
        <React.Fragment>
           <Grid is_flex width="auto" padding="15px">
                <Grid>아이디</Grid>
                <Grid is_flex width="auto">
                    <Button shape="round" margin="20px" _onClick={()=>{
                        history.replace("/write");
                    }}>새 글 작성</Button>
                    <Image></Image>
                </Grid>
            </Grid>
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
                            {/* <Post></Post> */}
                            {post_list.map((p, idx) => {
                                return <Post key={p.id} {...p}/>
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default PostList;

