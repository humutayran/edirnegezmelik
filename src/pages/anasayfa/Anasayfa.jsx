import React, { useState, useRef } from "react";
import "./Anasayfa.css";
import { motion } from "framer-motion";

function Anasayfa() {
  const [isHovered, setHovered] = useState(false);
  const handleHoverStart = () => setHovered(true);
  const handleHoverEnd = () => setHovered(false);

  const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

  const scrollToNextSection = (index) => {
    const nextSectionRef = sectionRefs[index + 1];

    if (nextSectionRef && nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <section ref={sectionRefs[0]} className="welcoming">
        <div className="background-layer"></div>
        <div className="textWrap">
          <motion.div
            className="wrapperTextEdirneKesfet"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          >
            <h1
              className={`textEdirneKesfet text-focus-in ${
                isHovered ? "hovered" : ""
              }`}
            >
              Edirne Keşfet&#39;e
            </h1>
          </motion.div>
          <motion.div className="wrapperTextHosgeldiniz">
            <motion.div
              style={{
                display: "inline-block",
                alignSelf: "flex-end",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <h1 className="textHosgeldiniz tracking-in-expand">
                HOŞ GELDİNİZ
              </h1>
            </motion.div>
          </motion.div>
          <div className="wrapperStartDiscover slide-in-blurred-bottom">
            <svg
              className="downArrow onHover"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-circle-down"
              viewBox="0 0 24 24"
              onClick={() => scrollToNextSection(0)}
            >
              <g>
                <path
                  fill="currentColor"
                  d="M.44,10.982a1.5,1.5,0,0,1,2.121,0l7.671,7.672h0a2.5,2.5,0,0,0,3.536,0l7.671-7.672A1.5,1.5,0,1,1,23.561,13.1l-7.672,7.672a5.5,5.5,0,0,1-7.778,0L.439,13.1a1.5,1.5,0,0,1,0-2.118Z"
                />
                <path
                  fill="currentColor"
                  d="M.44,1.439a1.5,1.5,0,0,1,2.121,0l9.085,9.086h0a.5.5,0,0,0,.707,0L21.439,1.44a1.5,1.5,0,0,1,2.122,2.119L14.475,12.64a3.505,3.505,0,0,1-4.95,0L.439,3.559a1.5,1.5,0,0,1,0-2.12Z"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section ref={sectionRefs[1]} style={{ backgroundColor: "red" }}>
        <h1>HOŞGELDİNİZ 2</h1>
      </section>
      <section ref={sectionRefs[2]} style={{ backgroundColor: "green" }}>
        <h1>HOŞGELDİNİZ 3</h1>
      </section>
      <section ref={sectionRefs[3]} style={{ backgroundColor: "yellow" }}>
        <h1>HOŞGELDİNİZ 4</h1>
      </section>
    </div>
  );
}

export default Anasayfa;
