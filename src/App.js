import "./app.css";
import logo from "./images/mercedesLogo.png";
import React, { useState } from "react";
import "./components/Miavbar";
import ReactDOM from "react-dom/client";
import Miavbar from "./components/Miavbar";
function App() {
  const [color, setColor] = useState("red");
  return (
    <div className="App">
      <div className="header">
        <div className="logoContainer">
          <img src={logo} alt="logo"></img>
        </div>
        <Miavbar/>
      </div>
      <div className="bd">
        body
      </div>
      <footer className="footer">aksdjaskdja</footer>
    </div>
  );
}

export default App;
