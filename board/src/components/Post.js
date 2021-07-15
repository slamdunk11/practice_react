import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements/index";
import { useDispatch } from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";

const Post = (props) => {
    const dispatch = useDispatch();
    return(
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Grid width="auto"><Text>{props.title}</Text></Grid>
                    <Grid width="auto"><Button>수정하기</Button></Grid>
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