import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Header 1");
  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
      {/* we can put an empty <> instead of <div> as parent element */}
      <button onClick={updateTitle}>Update the title</button>
      <br /><br />
      <Header title={title} />
      <Header title="Header 2" />
      <Header title="Header 3" />
      <Header title="Header 4" />
      <Header title="Header 5" />
    </div>
  );
}

const Header = React.memo(function ({ title }) {
  return (
    <div>
      I am {title}
    </div>
  )
})

export default App;
