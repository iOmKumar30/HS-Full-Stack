import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      {/* we can put an empty <> instead of <div> as parent element */}
      <Header title="Header 1" />
      <Header title="Header 2" />
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
