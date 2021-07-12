import logo from './logo.svg';
import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    }
  }
  componentDidMount(){}

  addNemo = () => {
    // this.setState로 count를 하나 더해줍니다.
    this.setState({count: this.state.count + 1});
  };

  removeNemo = () => {
    //네모 개수가 0보다 작을 수 없겠죠! if문으로 조건을 걸어줍시다!
    if(this.state.count > 0){
      //this.setState로 count를 하나 빼줍니다.
      this.setState({count: this.state.count - 1});
    }else{
      window.alert('네모없어요')
    }
  }

  render(){
     // 배열을 만듭니다.
    // Array.from()은 배열을 만들고 초기화까지 해주는 내장 함수입니다.
    // Array.from()의 첫번째 파라미터로 {length: 원하는 길이} 객체를,
    // 두번째 파라미터로 원하는 값을 반환하는 콜백함수를 넘겨주면 끝!
    // array의 내장함수 대부분은 콜백 함수에서 (현재값, index넘버)를 인자로 씁니다.
    const nemo_count = Array.from({length: this.state.count}, (v, i) => i);
    //현재값, 인덱스 넘버
    console.log(nemo_count);

    return(
      <div className="App">
        {nemo_count.map((num, idx) => {
          return (
            <div key={idx}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#ddd",
                margin: "10px",
              }}>
                nemo
            </div>
          )
        })}
        <div>
          <button onClick={this.addNemo}>하나 추가</button>
          <button onClick={this.removeNemo}>하나 빼기</button>
        </div>
      </div>
    )
  }
}



export default App;
