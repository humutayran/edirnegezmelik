import { useEffect, useState } from "react";
import "./Navbar.css";
import React from "react";
import logo from "../../images/mercedesLogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <div
          key={isActive}
          className="navbar-links_logo rotate-center"
          onClick={() => setActive("anaSayfa")}
        >
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="navbar-links_container">
          {navLinks.map((link) => (
            <motion.div
              key={link.text}
              onClick={() => setActive(link.text)}
              whileHover={{
                scale: 1.15

              }}
              transition={{
                type: "spring",
                duration: 0.4,
              }}
              style={{
                float: "right"
              }}
            >
              <Link
                className={isActive === link.text ? "active" : ""}
                to={link.path}
              >
                {link.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Miavbar;
