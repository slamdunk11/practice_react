import React from "react";
import styled from "styled-components";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>내 버킷리스트</h1>
          <hr/>
        </div>
      </div>
    )
  }
}