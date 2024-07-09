import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function CardWrapper({ children }) {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          maxWidth: "600px",
          maxheight: "300px",
          textAlign: "center",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "5px",
          fontFamily: "Arial, sans-serif",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div>
      <CardWrapper>Hi there 1</CardWrapper>
      <CardWrapper>Hi there 2</CardWrapper>
      <CardWrapper>Hi there 3</CardWrapper>
      <CardWrapper>Hi there 4</CardWrapper>
      <CardWrapper>
        <Hello name="Om" />
      </CardWrapper>
    </div>
  );

  function Hello({ name }) {
    return <h1>Hello {name}</h1>;
  }
}

export default App;
