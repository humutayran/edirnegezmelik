import React, { useRef, useState, useEffect } from "react";
import "./Anasayfa.css";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Anasayfa() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = 2 * sectionRefs[0].current.clientHeight;

    const opacity =
      1 - Math.min(scrollPosition * 1.75 / (fullHeight - windowHeight), 1);
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="sectionWrapper">
      <div
        className="background-layer"
        style={{ opacity: scrollOpacity }}
      ></div>
      <section ref={sectionRefs[0]} className="welcoming">
        <div className="textWrap">
          <div className="wrapperTextEdirneKesfet">
            <h1 className="textEdirneKesfet text-focus-in">
              Edirne Keşfet&#39;e
            </h1>
          </div>
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
      <section ref={sectionRefs[1]}>
        <div className="section2Wrapper">
          <div className="geziPlaniContainer">
            <div className="textBox">
              <h1 className="gezilecekTitle">Gezi Planlarımıza Göz Atın!</h1>
              <h2 className="explanation">Edirne&#39;de keşfedilecek pek çok harika yer var! Sizin için özenle seçip derlediğimiz gezi planları, Edirne&#39;nin zengin tarihini, kültürünü ve doğal güzelliklerini keşfetmenizi sağlayacak. Seyahat sürenize ve ilgi alanlarınıza göre özelleştirilmiş bu planlardan size en uygun olanı seçin ve Edirne&#39;yi keşfetmeye hemen başlayın. Gezi planlarına <Link to="/plan">buradan</Link> veya üst kısımda bulunan menüden ulaşabilirsiniz.</h2>
            </div>
          </div>
        </div>
      </section>
      <section ref={sectionRefs[2]}>
        <div className="section2Wrapper">
          <div className="mustTryContainer">
            <div className="textBox">
              <h1 className="yiyecekTitle">Bunları Yemeden Gitmeyin!</h1>
              <h2 className="explanation">
                Edirne&#39;nin zengin tarihini ve kültürel mirasını keşfederken, lezzetli yöresel yemeklerini tatmayı unutmayın. Edirne mutfağının en özel ve meşhur yemeklerini sizin için derledik. Şimdi bu lezzetleri keşfetmeye <Link to="/yiyecek" onClick={() => console.log('Navigating to Yiyecek')}>başlayın.</Link>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Anasayfa;

