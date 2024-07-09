import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      {/* we can put an empty <> instead of <div> as parent element */}
      <HeaderWithButton />
      <Header title="Header 2" />
      <Header title="Header 3" />
      <Header title="Header 4" />
      <Header title="Header 5" />
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Header 1");
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <br /> <br /> <br />
      <Header title={title} />
    </div>
  );
  function updateTitle() {
    setTitle(Math.random());
  }
}

function Header({ title }) {
  return <div>I am {title}</div>;
}

export default App;
