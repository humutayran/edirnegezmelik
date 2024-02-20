import React from "react";
import styles from "./Gezilecek.module.css";
import karaagac from "../../images/karaagac.jpg";
import kentormani from "../../images/edirnekentormani.jpg";
import { motion } from "framer-motion";

function Gezilecek() {
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
            KARAAĞAÇ
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.explanition}>
              Karaağaç, Edirne ilinin Merkez ilçesine bağlı bir mahalle.
              Karaağaç, Meriç nehrinin 2 km batısında, Yunanistan sınırına 4 km
              uzaklıktadır.
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
          <img src={karaagac} />
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
            Edirne Kent Ormanı
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.explanition}>
              İl merkezinin güney kesminde Edirne-Karaağaç yolu üzerinde kente 2
              kilometre mesafede olan bir mesire yeridir.
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
          <img src={kentormani} />
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
            KARAAĞAÇ
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.explanition}>
              Karaağaç, Edirne ilinin Merkez ilçesine bağlı bir mahalle.
              Karaağaç, Meriç nehrinin 2 km batısında, Yunanistan sınırına 4 km
              uzaklıktadır.
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
          <img src={karaagac} />
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
            Edirne Kent Ormanı
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
          >
            <div className={styles.explanition}>
              İl merkezinin güney kesminde Edirne-Karaağaç yolu üzerinde kente 2
              kilometre mesafede olan bir mesire yeridir.
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
          <img src={kentormani} />
        </motion.div>
      </div>
    </div>
  );
}

export default Gezilecek;
