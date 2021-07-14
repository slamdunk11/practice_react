//post.js
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


//Action
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

//initialState 초기값
const initialState = {
    list: []
}

//게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어두기
const initialPost = {
    image_url: "",
    title: "제목이다",
    contents: "내용이다",
    insert_dt: "2021-02-02 10:00:00",
}

//리듀서
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {

        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {

        })
    },
    initialState
)

//action creator export
const actionCreators = {
    setPost,
    addPost,
};

export {actionCreators};