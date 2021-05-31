import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  const changeColor = (e) => {
    e.preventDefault();
    let temp = "0123456789ABCDEF";
    let initial = "#";
    for (let i = 0; i < 6; i++) {
      initial += temp[Math.floor(Math.random() * 16)];
    }
    setColor(initial);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card"
        onClick={(e) => changeColor(e)}
        style={{
          height: 500,
          width: 500,
          backgroundColor: color,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          boxShadow: "5px 5px 5px  #808080",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          This is some text within a card body.
        </h1>
      </div>
    </div>
  );
}

export default App;
