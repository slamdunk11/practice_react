import React from "react";
import styled from "styled-components";

//redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";


const BucketList = (props) => {
    // const my_lists = props.list;

    //useSelector 훅을 통해 리덕스 스토어의 상태에 접근할 수 있다.
    const bucket_list = useSelector(state => state.bucket.list);

    return(
        <ListStyle>
            {bucket_list.map((list, index) => {
                return(
                    <ItemStyle
                    className="list_item"
                    onClick={() => {
                        props.history.push('/detail/'+index);
                    }} key={index}>
                        {list}
                    </ItemStyle>
                )
            })}
        </ListStyle>
    )
}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden; // 내용이 잘림, 스크롤바가 나타나지 x
    overflow-y: auto;   // 내용이 잘림, 필요할 때만 스크롤 나타나
       
`;

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: aliceblue;
`;

export default BucketList;