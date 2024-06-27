import React, { useEffect, useState } from "react";
import styles from "./Icerik.module.css";
import { useLocation } from "react-router-dom";
import { fetchData } from "../../components/cards/Card";
const imageUrl = (url) => {
  const imageSrc = url.fileData[1].name;
  return "http://localhost:8080/files/" + imageSrc;
};
function Icerik() {
  const location = useLocation();
  const { id, category } = location.state;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData(`${category}/${id}`); // Use the id in the URL
        setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    getData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>; // Display a loading message until data is fetched
  }

   return (
    <div className={styles.body}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.container}>
        <div className={styles.container_image}>
          <img src={imageUrl(data)} alt="Artwork" />
        </div>
        <div>
          {data.content}
        </div>
      </div>
    </div>
  );
}
export default Icerik;

