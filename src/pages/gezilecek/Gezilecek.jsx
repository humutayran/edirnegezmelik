import { useEffect, useState } from "react";
import { fetchData, card } from "../../components/cards/Card";

function Gezilecek() {
  const [artworks, setArtworks] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData("/touristic-spots");
        setArtworks(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    getData();
  }, []);
  return card(artworks, "touristic-spots");
}

export default Gezilecek;
