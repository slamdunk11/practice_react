//post.js
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";


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

const getPostFB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");
        postDB.get().then((docs) => {
            let post_list = [];

            // forEach는 각각 배열 요소에 함수 실행
            docs.forEach((doc) => {
                console.log(doc.id, doc.data());

                let _post = doc.data();
                let post = {
                    title: _post.title,
                    contents: _post.contents,
                    image_url: _post.image_url,
                    insert_dt: _post.insert_dt
                }
                post_list.push(post);
            })

            //리스트 확인하기
            console.log(post_list, "리스트 확인하기");
            dispatch(setPost(post_list));
        })
    }
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
    getPostFB,
};

export {actionCreators};