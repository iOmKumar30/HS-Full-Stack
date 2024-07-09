import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function TextComponent({ str }) {
    return (
      <div>
        <h1>{str}</h1>
      </div>
    );
  }

  /* Here, componentProps is passed as an object containing the prop str that the TextComponent expects. The spread operator {...componentProps} is used to pass all the properties in componentProps as props to Component. */
  function CardWrapper({ Component, componentProps }) {
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px", maxWidth: "300px", maxheight: "300px", textAlign: "center", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "5px", fontFamily: "Arial, sans-serif" }}>
        <Component {...componentProps} />
      </div>
    );
  }

  return (
    <div>
      <CardWrapper
        Component={TextComponent}
        componentProps={{ str: "Hello World" }}
      />
      <CardWrapper
        Component={TextComponent}
        componentProps={{ str: "Hello World 2" }}
      />
      <CardWrapper
        Component={TextComponent}
        componentProps={{ str: "Hello World 3" }}
      />
      <CardWrapper
        Component={TextComponent}
        componentProps={{ str: "Hello World 4" }}
      />
    </div>
  );
}

export default App;
