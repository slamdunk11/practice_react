//post.js
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import moment from "moment";


//Action
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const updatePost = createAction(UPDATE_POST, (post_id, post) => ({
    post_id,
    post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({post_id}))

//initialState 초기값
const initialState = {
    list: []
}

//게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어두기
const initialPost = {
    // id: 0,
    image_url: "",
    title: "",
    contents: "",
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    // insert_dt: "2021-02-02 10:00:00",
}

const addPostFB = (title="", contents = "") => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");

        const _post  = {
            ...initialPost,
            title: title,
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")
        }
        console.log({_post});
    

        postDB.add({..._post}).then((doc) => {
            let post = {..._post, id: doc.id};
            
            //이제 리덕스에 넣어봅시다
            dispatch(addPost(post));

            //작성 후 페이지 이동
            history.replace("/");
            console.log(post);
        }).catch((err) => {
            console.log("post 작성 실패!", err);
        })
    }
}

const updatePostFB = (post_id=null, post={}) => {
    return function (dispatch, getState, {history}) {
        if(!post_id) {
            console.log("게시물 정보가 없어요!");
            return;
        }
        const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
        const _post = getState().post.list[_post_idx];

        console.log(_post);

        const postDB = firestore.collection("post");

        postDB.doc(post_id).update({...post}).then((doc) => {
            dispatch(updatePost(post_id, {...post}));
            history.replace("/");
        })
        
    }
}

const deletePostFB = (post_id) => {
    return function(dispatch, getState, {history}) {
    
        // const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
        // const _post = getState().post.list[_post_idx];

        const postDB = firestore.collection("post");

        postDB.doc(post_id).delete().then(res => {
            dispatch(deletePost(post_id));
            history.replace("/");
        })
    }
}

const getOnePostFB = (id) => {
    return function(dispatch, getState, {history}){
        const postDB = firestore.collection("post");
        postDB.doc(id).get().then(doc => {
            let _post = doc.data();
            let post = Object.keys(_post).reduce((acc, cur) =>{
                return{...acc, [cur]: _post[cur]};
            },
            {id: doc.id, user_info: {}});
            dispatch(setPost([post]));
        })
    }
}

const getPostFB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");

        //시간 순 정렬을 위해 쓰임
        // let query = postDB.orderBy("insert_dt", "desc").limit(2);
        let query = postDB.orderBy("insert_dt", "desc")

        query.get().then(docs => {

        // postDB.get().then((docs) => {
            let post_list = [];

            // forEach는 각각 배열 요소에 함수 실행
            docs.forEach((doc) => {
                // console.log(doc.id, doc.data());

                //아래의 형식 바꾸는 걸 좀 더 고수처럼 형식 맞춰주는 법
                // let _post = doc.data();

                // //['comment_cnt', 'contents', ..]
                // let post = Object.keys(_post).reduce((acc, cur) => {
                    
                //     if(cur.indexOf("user_") !== -1){
                //         return{...acc, user_info:{...acc.user_info}, [cur]: _post[cur]};
                //     }
                //     return {...acc, [cur]: _post[cur]}
                // }, {id: doc.id, user_info: {}});
                //앞의 중괄호, 처음거는 딕셔너리 형식으로 하고 싶으니까 



                //firebase랑 여기 배열이랑 형식이 안 맞아서 
                //맞추는 거 _post, post
                //acc 맨 처음엔 {id: doc.id} 딕셔너리 나온다, 
                //cur 키값-current_cnt키값 contents 등 키값이 따라 나옴
                //[cur] 변수 안에 키 값이 담긴 거니까 이렇게 대괄호 이용해주면 키값 넣을 수 있다
                let _post = {
                    id: doc.id,
                    ...doc.data()};
                    // doc.data 파이어 스토어에서 가지고 온 값

                let post = {
                    id: doc.id,
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
            draft.list = action.payload.post_list;
            // 배열 갈아끼워주기!!
        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {
            //unshift는 배열 맨 앞에 데이터를 넣어준다!
            draft.list.unshift(action.payload.post);
        }),

        [UPDATE_POST]: (state, action) => produce(state, (draft) => {
            let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
            draft.list[idx] = {...draft.list[idx], ...action.payload.post};
        }),

        [DELETE_POST]: (state, action) => produce(state, (draft) => {
            let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
            if(idx !== -1){
                draft.list.splice(idx, 1);
            }
            
        })
    },
    initialState
);

//action creator export
const actionCreators = {
    setPost,
    addPost,
    getPostFB,
    addPostFB,
    updatePostFB,
    deletePostFB,
};

export {actionCreators};