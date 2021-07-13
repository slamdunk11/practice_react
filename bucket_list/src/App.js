import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";

//리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import {connect} from "react-redux";
//리덕스 모듈에서 (bucket 모듈에서) 액션 생성 함수 두 개를 가져올게요!
import {loadBucket, createBucket} from "./redux/modules/bucket";

//mapStateToProps 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수에요.
const mapStateToProps = (state) => {
  return {bucket_list: state.bucket.list}
};

//mapDispatchToProps 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수에요.
const mapDispatchToProps = (dispatch) => {
  return{
    load: () => {
    dispatch(loadBucket());
    },
    create: (new_item) => {
    dispatch(createBucket(new_item));
  }}
};

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
    this.text = React.createRef();
    // Ref는 render메서드에서 생성된 DOM노드나 React엘리먼트에 접근하는 방법을 제공
  }

  componentDidMout(){
    // console.log(this.text);
    this.props.load();
  }

  addBucketList = () => {
    // let list = this.state.list;
    const new_item = this.text.current.value;
    this.props.create(new_item);
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Line/>
          <Switch>
          <Route path="/" exact render={(props) => (
          <BucketList list={this.state.list} history={this.props.history}/>)}/>
          <Route path="/detail/:index" exact component={Detail} 
          history={this.props.history} />
          <Route render={(props) => (
            <NotFound history={this.props.history}/>
          )} />
          </Switch>
          
        </Container>
        <div>
          <input type="text" ref={this.text}/>
          <button onClick={this.addBucketList}>추가하기</button>
        </div>
      </div>
    )
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));