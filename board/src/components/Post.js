import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements/index";
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import {actionCreators as postActions} from "../redux/modules/post";

const Post = (props) => {
    
    const dispatch = useDispatch();

    // const post_id = props.match.params.id;
    

    return(
        <React.Fragment>
            <Grid padding="10px 0px 18px 0px" border_bottom="1px solid #eee">
                <Grid is_flex>
                    <Grid width="auto"><Text>{props.title}</Text></Grid>
                    <Grid  width="auto">
                        <Button _onClick={() => {history.push(`/write/${props.id}`)}}>수정하기</Button>
                        <Button _onClick={() => {
                            dispatch(postActions.deletePostFB(props.id));
                        }}>삭제하기</Button>
                    </Grid>

                </Grid>
                <Grid>
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image src={props.image_url} shape="rectangle"/>
                </Grid>
                <Grid>{props.insert_dt}</Grid>
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    title: "제목 입력하세요",
    contents: "내용 입력하세요",
    image_url: "https://blog.kakaocdn.net/dn/bokozL/btqEzAJHJvd/QxXBJbKmOf956K858SmmM1/img.png",
    insert_dt: "2021-02-02 10:00:00"
}

export default Post;