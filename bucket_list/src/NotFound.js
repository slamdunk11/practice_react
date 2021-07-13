import React from "react";

const NotFound = (props) => {
    return(
        // div 대신 React.Fragment 태그 넣으니까 오류가 났다. 왜 그런 걸까?
        <div>
            <h1>주소가 올바르지 않아요!</h1>
            <button onClick={() => {props.history.goBack();}}>뒤로가기</button>
        </div>
    );
}

export default NotFound;