import "./Pagination.css";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const numOfpages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <div className="pagination-prev">
        <Link
          className={currentPage === 1 ? "text disabled" : "text"}
          to="#!"
          onClick={() => onPageChange(currentPage === 1 ? currentPage : currentPage - 1)}
        >
          Önceki
        </Link>
      </div>
      {numOfpages.map((page, index) => (
        <div
          key={index}
          className={currentPage === page ? "pagination-item activee" : "pagination-item"}
        >
          <Link className="item" to="#!" onClick={() => onPageChange(page)}>
            {page}
          </Link>
        </div>
      ))}
      <div className="pagination-next">
        <Link
          className="text"
          to="#!"
          onClick={() => onPageChange(currentPage === numOfpages.length ? currentPage : currentPage + 1)}
        >
          Sonraki
        </Link>
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

