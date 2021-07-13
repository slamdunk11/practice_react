//bucket.js

//Action
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';

//initialState 초기값
const initialState = {
    list:["영화관 가기", "매일 책읽기", "수영 배우기"],
};

//Action Creator 액션 생성 함수
export const loadBucket = (bucket) => { 
    return {type: LOAD, bucket};
}

export const createBucket = (bucket) => { //bucket은 텍스트
    return {type: CREATE, bucket};
}

//Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/LOAD":
            return state;
        
        case "bucket/CREATE":
            const new_bucket_list = [...state.list, action.bucket];
            return {list: new_bucket_list};
        
        default:
            return state;
    }
}