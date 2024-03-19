import { useEffect, useState } from "react";
import { fetchData, Card } from "../../components/cards/Card";

function Tarihi() {
  const [artworks, setArtworks] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData("/artworks");
        setArtworks(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    getData();
  }, []);
  return Card(artworks);
}

export default Tarihi;
