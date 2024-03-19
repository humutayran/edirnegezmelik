import api from "../../apiConnection/ApiConnection";
import { motion } from "framer-motion";
import React from "react";
import styles from "./Card.module.css";

const fetchData = async (url) => {
  try {
    const response = await api.get(url);
    return response.data; // or do something with the response
  } catch (err) {
    console.log(err);
    throw err; // rethrowing the error for handling outside of fetchData
  }
};

const Card = (artworks) => {
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
            >
              <div className={styles.explantion}>{artwork.content}</div>
              <button className={styles.button}>Daha Fazla</button>
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
            <img src={artwork.image} alt={artwork.title} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export {fetchData, Card};
