import React, {useRef, useState} from "react";
import styled from "styled-components";
import {deleteBucket, updateBucket} from "./redux/modules/bucket";

import { useDispatch, useSelector } from "react-redux";


const Detail = (props) => {
    //스토어에서 상태값 가져오기
    const bucket_list = useSelector((state) => state.bucket.list);
    const dispatch = useDispatch();

    //url 파라미터에서 인덱스 가져오기
    let bucket_index = parseInt(props.match.params.index);
    // const text = React.useRef();

    // const update_item = text.current;
    // console.log(update_item);
      
    const [text, setText] = useState("");

    const onChange = (e) => {
        // console.log(e.target);
        // console.log(e.target.value);
        setText(e.target.value);
        console.log(text);
    }
    
    
    return(
        <div>
            <div>
                {bucket_list[bucket_index]}
                <button onClick={() =>{
                dispatch(deleteBucket(bucket_index));
                props.history.goBack();
            }}>삭제하기</button>
            </div>
            <div>
                <input type="text" onChange={onChange} value={text}/>
                <button onClick={() => {
                    dispatch(updateBucket(bucket_index, 1,  text))
                }}>수정하기</button>
            </div>
            
        </div>
    );
}

export default Detail;