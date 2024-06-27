import React,{ useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchData, card } from "../../components/cards/Card";
import Pagination from "../../components/pagination/Pagination";


function Gezilecek() {
  const [touristicSpots, setTouristicSpots] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page") || "1");
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData(`/touristic-spots/page/${currentPage}`);
        setTouristicSpots(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    getData();
  }, [currentPage]);
  const handlePageChange = (page) => {
    navigate(`?page=${page}`);
  };

  return (
    <div>
      {card(touristicSpots, "touristic-spots")}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Gezilecek;
