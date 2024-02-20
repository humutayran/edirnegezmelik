import React from "react";
import styles from "./Tarihi.module.css";
import selimiye from "../../images/selimiye.jpg";
import adaletKasri from "../../images/adaletkasri.jpg";
import { motion } from "framer-motion";

function Tarihi() {
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
      <div className={styles.container}>
        <div className={styles.container_left}>
          <motion.div
            className={styles.title}
            variants={variantsTitle}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            SELİMİYE CAMİİ
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.explantion}>
              Edirne’nin her yerinden tüm ihtişamı ile görülebilen, dört zarif
              minaresi, muhteşem kubbesi ile eşsiz bir yapı olan Selimiye Camii
              dünya tarihinin ünlü mimarlarından birisi olan Mimar Sinan’ın
              eseridir.
            </div>
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
          <img src={selimiye} />
        </motion.div>
      </div>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <motion.div
            className={styles.title}
            variants={variantsTitle}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            ADALET KASRI
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.explantion}>dillerde tekbir AllahuEkber</div>
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
          <img src={adaletKasri} />
        </motion.div>
      </div>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <motion.div
            className={styles.title}
            variants={variantsTitle}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            SELİMİYE CAMİİ
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.explantion}>
              Edirne’nin her yerinden tüm ihtişamı ile görülebilen, dört zarif
              minaresi, muhteşem kubbesi ile eşsiz bir yapı olan Selimiye Camii
              dünya tarihinin ünlü mimarlarından birisi olan Mimar Sinan’ın
              eseridir.
            </div>
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
          <img src={selimiye} />
        </motion.div>
      </div>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <motion.div
            className={styles.title}
            variants={variantsTitle}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            ADALET KASRI
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.explantion}>dillerde tekbir AllahuEkber</div>
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
          <img src={adaletKasri} />
        </motion.div>
      </div>
    </div>
  );
}

export default Tarihi;
