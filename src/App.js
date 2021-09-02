import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement} from  './actions';
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dipatch = useDispatch();
  return (
    <div className="App">
      <h1> Counter {counter} </h1>
      <button onClick={() => dipatch(increment(3))}> + </button>
      <button  onClick={() => dipatch(decrement())}> - </button>

     {isLogged ?  <h3> Valuable Information I shouldn't see </h3> : ' '}
    </div>
  );
}

export default App;
