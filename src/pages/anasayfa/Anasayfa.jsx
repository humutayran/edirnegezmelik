import React, { useState, useEffect } from "react";
import "./Anasayfa.css";
import { motion } from "framer-motion";

function Anasayfa() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (scale <= 2) {
        const scrolled = window.scrollY;
        const newScale = 1 + scrolled / 50;
        console.log(newScale);
        setScale(newScale);
        animationFrameId = requestAnimationFrame(handleScroll);
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (scale < 2) {
      // Enable smooth scrolling
      window.addEventListener("wheel", disableScroll, { passive: false });
      handleScroll();
    } else {
      // Disable smooth scrolling
      enableScroll();
    }

    return () => {
      // Cleanup: remove event listener and cancel animation frame
      window.removeEventListener("wheel", disableScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scale]);

  return (
    <div>
      <section className="welcoming" style={{ backgroundColor: "lightblue" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: scale }}
          transition={{
            stiffness: 100,
          }}
          whileTap={{ scale: 0.8 }}
          style={{
            originX: 0.5,
          }}
        >
          <h1>HOŞ GELDİNİZ</h1>
        </motion.div>
      </section>
      <section className="welcoming" style={{ backgroundColor: "red" }}>
        <h1>HOŞGELDİNİZ 2</h1>
      </section>
      <section className="welcoming" style={{ backgroundColor: "green" }}>
        <h1>HOŞGELDİNİZ 3</h1>
      </section>
      <section className="welcoming" style={{ backgroundColor: "yellow" }}>
        <h1>HOŞGELDİNİZ 4</h1>
      </section>
    </div>
  );
}

export default Anasayfa;
