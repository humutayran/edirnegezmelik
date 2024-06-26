import api from "../../apiConnection/ApiConnection";
import { motion } from "framer-motion";
import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const fetchData = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const imageUrl = (artwork) => {
  const imageSrc = artwork.fileData[0].name;
  return "http://localhost:8080/files/" + imageSrc;
};

const card = (artworks, category) => {
  const navigate = useNavigate();

  const btnNavigation = (id) => {
    navigate('/icerik', { state: { id, category } });
  };

  const variantsTitle = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0 },
  };

  const variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5, delay: 0.25 };
  const viewport = { once: true };

  return (
    <div className={styles.body}>
      {artworks.map((artwork, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.container_left}>
            <motion.div
              className={styles.title}
              variants={variantsTitle}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={transition}
            >
              {artwork.title}
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={transition}
              style={{display:"flex", flexDirection:"column"}}
            >
              <div className={styles.explanation}>{artwork.description}</div>
              <button className={styles.button} onClick={() => btnNavigation(artwork.id, category)}>Daha Fazla</button>
            </motion.div>
          </div>
          <motion.div
            className={styles.container_right}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.image_container}>
              <img src={imageUrl(artwork)} alt={artwork.title} />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export { fetchData, card };

