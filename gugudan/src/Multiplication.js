import React, {useState, useRef} from "react";
import './App.css';

function Multiplication({rand1, rand2, result}) {
  const numberInput = useRef();
  const [check, setCheck] = useState("");

  const Compare = () => {
    if(Number(numberInput.current.value) === result){ 
      //ref로 받아온 것은 문자로 받아지나봄, ==으로 해서 느슨하게 비교하거나, 형 변환 해줘야함
      setCheck("딩동댕");
    }else{
      setCheck("땡");
      console.log(numberInput.current.value, result);
    }
  }

  return (
    <div className="Multiplication">
      <div>
        <text>{rand1}곱하기{rand2}는?</text>
      </div>
      <div>
        <input ref={numberInput} type="text"/>
        <button onClick={Compare}>입력!</button>
      </div> 
      <div>
        <text>{check}</text>
      </div>
    </div>
  );
}

export default Multiplication;
