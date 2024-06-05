import "./Pagination.css";
import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const numOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handlePageChange = (page) => {
    query.set("page", page);
    navigate(`${location.pathname}?${query.toString()}`);
    onPageChange(page);
    window.location.reload();
  };

  return (
    <div className="pagination">
      <div className="pagination-prev">
        <button
          className={currentPage === 1 ? "text disabled" : "text"}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Önceki
        </button>
      </div>
      {numOfPages.map((page, index) => (
        <div
          key={index}
          className={currentPage === page ? "pagination-item activee" : "pagination-item"}
        >
          <button className="item" onClick={() => handlePageChange(page)}>
            {page}
          </button>
        </div>
      ))}
      <div className="pagination-next">
        <button
          className={currentPage === numOfPages.length ? "text disabled" : "text"}
          disabled={currentPage === numOfPages.length}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
