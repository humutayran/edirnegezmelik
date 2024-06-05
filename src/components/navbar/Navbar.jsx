import { useEffect, useState } from "react";
import "./Navbar.css";
import React from "react";
import logo from "../../images/mercedesLogo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { text: "Ana Sayfa", path: "/" },
  { text: "Gezilecek Yerler", path: "/gezilecek" },
  { text: "Tarihi Yerler", path: "/tarihi" },
  { text: "Gezi Planı", path: "/plan" },
];

function Miavbar() {
  const location = useLocation();
  const [isActive, setActive] = useState(location.pathname);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const controlNavbar = () => {
    if (lastScrollY < window.scrollY) {
      document.getElementById("navbar").style.top = "-100px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleLinkClick = (text) => {
    setActive(text);
    setRotate(true);
    setTimeout(() => setRotate(false), 600); // Reset rotate after animation duration
  };

  return (
    <div id="navbar" className="navbar">
      <div className="navbar-links">
        {navLinks.slice(0, 2).map((link) => (
          <Link
            key={link.text}
            onClick={() => handleLinkClick(link.path)}
            className={isActive === link.path ? "link active" : "link inactive"}
            to={link.path}
          >
            {link.text}
          </Link>
        ))}
        <div className={`navbar-logo ${rotate ? "rotate-center" : ""}`}>
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {navLinks.slice(2).map((link) => (
          <Link
            key={link.text}
            onClick={() => handleLinkClick(link.path)}
            className={isActive === link.path ? "link active" : "link inactive"}
            to={link.path}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Miavbar;
