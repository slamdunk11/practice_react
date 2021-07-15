import React from "react";
import { Grid, Button, Image, Text, Input } from "../elements/index";
import { useDispatch, useSelector } from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";

const Write = (props) => {
    const {history} = props;
    const dispatch = useDispatch();
   
    const post_list = useSelector((state) => state.post.list);

    const post_id = props.match.params.id;
    //이 post_id 여부에 따라 수정중인지, 작성인지 알 수 있도록
    
    const is_edit = post_id ? true : false;

    console.log(props.match.params.id);

    let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
    console.log(_post);

    const [title, setTitle] = React.useState(_post? _post.title : "");
    const [contents, setContents] = React.useState(_post? _post.contents : "");    

    React.useEffect(() => {
        if(is_edit && !_post) {
            console.log('포스트 정보가 없어요!');
            history.replace("/");

            return;
        }
    })

    const changeTitle = (e) => {
        setTitle(e.target.value);
        
    }
    
    const changeContents = (e) => {
        setContents(e.target.value);
        
    }

    const addPost = () => {
        dispatch(postActions.addPostFB(title, contents));
    }

    const updatePost = () => {
        dispatch(postActions.updatePostFB(post_id, {title: title, contents: contents}));
    }
    return(
        <React.Fragment>
            <Grid margin="15px 0px 0px 0px">
                <Input value={title} _onChange={changeTitle} placeholder="제목을 입력하세요"/>
                <Input value={contents} _onChange={changeContents} multilines placeholder="당신의 이야기를 적어보세요"/>
            </Grid>
            <Grid is_flex>
                <Grid width="auto">
                    <Button _onClick={() => {
                        history.replace("/");
                    }}>나가기</Button>
                </Grid>
                <Grid width="auto">
                    {/* <Button>임시저장</Button> */}
                    {is_edit ? (
                        <Button _onClick={updatePost}>수정하기</Button>
                    ) : (
                        <Button _onClick={addPost}>출간하기</Button>
                    )}
                    
                </Grid>
            </Grid>
        </React.Fragment>
        
    );
}

export default Write;