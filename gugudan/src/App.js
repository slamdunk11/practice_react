import React from "react";
import './App.css';
import Multiplication from "./Multiplication.js";

function App() {
  const rand1 = Math.floor(Math.random()*9)+1
  const rand2 = Math.floor(Math.random()*9)+1
  const result = rand1 * rand2


  return (
    <div className="App">
      <Multiplication rand1={rand1} rand2={rand2} result={result}/>
    </div>
  );
}

export default App;
