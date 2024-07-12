import { memo, useCallback, useState, useMemo } from "react";
import React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  
  var a = useCallback(() => {
    console.log("a");
  }, []);

/*   var a = () => {
    console.log("a");
  } */

/*    var a = {
    sum: 1
  } */

  /* un-comment each to see the difference on console */
 /*  var a = useCallback(() => {
    sum: 100;
  }, []); */
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>

      <Demo a={a} />
    </div>
  );
}
const Demo = memo(({ a }) => {
  console.log("Re-rendered");
  return <div>Hi there</div>;
});

export default App;
