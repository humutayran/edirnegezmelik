import { useState } from "react";
import "./Navbar.css";
import React from "react";
import logo from "../../images/mercedesLogo.png";
import {Link} from 'react-router-dom';

function Miavbar() {
  const [isActive, setActive] = useState("anaSayfa");
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div 
          key={isActive}
          className="navbar-links_logo rotate-center"
          onClick={() => setActive("anaSayfa")}
        ><Link to="/">
          <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="navbar-links_container">
          <p onClick={() => setActive("anaSayfa")}>
            <Link className={isActive == "anaSayfa" ? "active" : ""} to="/">Ana Sayfa</Link>
          </p>
          <p onClick={() => setActive("gezilecek")}>
            <Link className={isActive == "gezilecek" ? "active" : ""} to="/gezilecek">
              Gezilecek Yerler
            </Link>
          </p>
          <p onClick={() => setActive("tarihi")}>
            <Link className={isActive == "tarihi" ? "active" : ""} to="/tarihi">
              Tarihi Yerler
            </Link>
          </p>
          <p onClick={() => setActive("plan")}>
            <Link className={isActive == "plan" ? "active" : ""} to="/plan">Gezi Planı</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Miavbar;
