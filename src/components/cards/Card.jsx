import api from "../../apiConnection/ApiConnection";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import Pagination from "../pagination/Pagination";

const fetchData = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// const fetchImage = async (imageName) => {
//   try {
//     const response = await api.get(`/files/${imageName}`, {
//     });
//     return response.data; // Assuming response.data is the image itself
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

const card = (artworks) => {
  // // const [images, setImages] = useState({});
  //
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const imagePromises = artworks.map((artwork) =>
  //       fetchImage(artwork.fileData[0].name)
  //     );
  //     Promise.all(imagePromises)
  //       .then((imageDataArray) => {
  //         const imagesData = {};
  //         imageDataArray.forEach((imageData, index) => {
  //           imagesData[index] = URL.createObjectURL(imageData);
  //         });
  //         // setImages(imagesData);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching images: ", error);
  //       });
  //   };
  //
    // fetchImages();


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
              <div className={styles.explanation}>{artwork.content}</div>
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
            <div className={styles.image_container}>
              <img src={imageUrl(artwork)} alt={artwork.title} />
            </div>
          </motion.div>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

const imageUrl = (artwork) => {
  const imageSrc = artwork.fileData[0].name;
  console.log("sdafasdf")
  return "http://localhost:8080/files/" + imageSrc;
}

export { fetchData, card };
