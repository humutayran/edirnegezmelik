import { useEffect, useState, React } from "react";
import { fetchData, card } from "../../components/cards/Card";
import Pagination from "../../components/pagination/Pagination";

function Tarihi() {
  const [artworks, setArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData(`/artworks/page/${currentPage}`);
        setArtworks(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    getData();
  }, [currentPage]);

  return (
    <div>
      {card(artworks, "artworks")}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Tarihi;

