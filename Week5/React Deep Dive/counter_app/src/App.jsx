import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // define the initial state
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <CustomButton count={count} setCount={setCount} /> <br /><br />
      <CustomButton count={count + 1} setCount={setCount} /> <br /><br />
      <CustomButton count={count - 1} setCount={setCount} /> <br /><br />
      <CustomButton count={count * 10} setCount={setCount} /> 
    </div>
  );
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}
export default App;
