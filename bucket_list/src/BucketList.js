import React from "react";
import styled from "styled-components";


const BucketList = (props) => {
    const my_lists = props.list;

    return(
        <ListStyle>
            {my_lists.map((list, index) => {
                return(
                    <ItemStyle onClick={() => {
                        props.history.push('/detail');
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