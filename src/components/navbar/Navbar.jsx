import { useState } from "react";
import "./Navbar.css";
import React from "react";
import logo from "../../images/mercedesLogo.png";

function Miavbar() {
  const [isActive, setActive] = useState("anaSayfa");
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div
          key={isActive}
          className="navbar-links_logo rotate-center"
          onClick={() => setActive("anaSayfa")}
        >
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar-links_container">
          <p onClick={() => setActive("anaSayfa")} href="#anasayfa">
            <a className={isActive == "anaSayfa" ? "active" : ""}>Ana Sayfa</a>
          </p>
          <p onClick={() => setActive("gezilecek")} href="#gezilecek">
            <a className={isActive == "gezilecek" ? "active" : ""}>
              Gezilecek Yerler
            </a>
          </p>
          <p onClick={() => setActive("tarihi")} href="#tarihi">
            <a className={isActive == "tarihi" ? "active" : ""}>
              Tarihi Yerler
            </a>
          </p>
          <p onClick={() => setActive("plan")} href="#plan">
            <a className={isActive == "plan" ? "active" : ""}>Gezi Planı</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Miavbar;
