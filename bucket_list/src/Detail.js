import React from "react";
import styled from "styled-components";
import {deleteBucket} from "./redux/modules/bucket";

import { useDispatch, useSelector } from "react-redux";


const Detail = (props) => {
    //스토어에서 상태값 가져오기
    const bucket_list = useSelector((state) => state.bucket.list);
    const dispatch = useDispatch();

    //url 파라미터에서 인덱스 가져오기
    let bucket_index = parseInt(props.match.params.index);
    
    return(
        <div>
            {/* {bucket_list[bucket_index]} */}
            <button onClick={() =>{
                dispatch(deleteBucket(bucket_index));
                props.history.goBack();
            }}>삭제하기</button>
        </div>
    );
}

export default Detail;