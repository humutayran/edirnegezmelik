import { useEffect, useState } from "react";
import "./Navbar.css";
import React from "react";
import logo from "../../images/mercedesLogo.png";
import { Link } from "react-router-dom";

const navLinks = [
  { text: "Ana Sayfa", path: "/" },
  { text: "Gezilecek Yerler", path: "/gezilecek" },
  { text: "Tarihi Yerler", path: "/tarihi" },
  { text: "Gezi Planı", path: "/plan" },
];

function Miavbar() {
  const [isActive, setActive] = useState("anaSayfa");
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div id="navbar" className="navbar">
      <div className="navbar-links">
        {navLinks.map((link, i) => (
          <div
            key={link.text}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Link
              onClick={() => setActive(link.text)}
              className={
                isActive === link.text ? "link active" : "link inactive"
              }
              to={link.path}
            >
              {link.text}
            </Link>
            {i === 1 && (
              <div
                key={isActive}
                className="navbar-links_logo link rotate-center"
              >
                <Link to="/" onClick={() => setActive("anaSayfa")}>
                  <img src={logo} alt="logo"></img>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Miavbar;
