import "./Pagination.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pagination() {
  const pages = 10;
  const numOfpages = [];
  for (let i = 1; i <= pages; i++) {
    numOfpages.push(i);
  }
  const [currentPage, setcurrentPage] = useState(1);
  const [arrOfCurrentPage, setarrOfCurrentPage] = useState([]);

  useEffect(() => {
    /*numOfpages dizisini tempNumOfpage dizisine kopyalıyor*/
    let tempNumOfpage = [...arrOfCurrentPage];
    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';
    if (currentPage >= 1 && currentPage <= 3) {
      tempNumOfpage = [1, 2, 3, 4, dotsInitial, numOfpages.length];
    } 
    else if (currentPage === 4) {
      const sliced = numOfpages.slice(0, 5);
      tempNumOfpage = [...sliced, dotsInitial, numOfpages.length];
    } 
    else if (currentPage > 4 && currentPage < numOfpages.length - 2) {
      const sliced1 = numOfpages.slice(currentPage - 2, currentPage);
      const sliced2 = numOfpages.slice(currentPage, currentPage + 1);
      tempNumOfpage = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numOfpages.length,
      ];
    } 
    else if (currentPage > numOfpages.length - 3) {
      const sliced = numOfpages.slice(numOfpages.length - 4);
      tempNumOfpage = [1, dotsLeft, ...sliced];
    } 
    else if (currentPage === dotsInitial) {
      setcurrentPage(arrOfCurrentPage[arrOfCurrentPage.length - 3] + 1);
    } 
    else if (currentPage === dotsRight) {
      setcurrentPage(arrOfCurrentPage[3] + 2);
    } 
    else if (currentPage === dotsLeft) {
      setcurrentPage(arrOfCurrentPage[3] - 2);
    }
    setarrOfCurrentPage(tempNumOfpage);
  }, [currentPage]);
  return (
    <div className="pagination">
      <div
        className="pagination-prev"
      >
        <Link
          className={
            currentPage === 1 ? "text disabled" : "text"
          }
          to="#!"
          onClick={() =>
            setcurrentPage((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          Önceki
        </Link>
      </div>
      {arrOfCurrentPage.map((page, index) => {
        return (
          <div
            key={index}
            className={
              currentPage === page
                ? "pagination-item activee"
                : "pagination-item"
            }
          >
            <Link className="item" to="#!" onClick={() => setcurrentPage(page)}>
              {page}
            </Link>
          </div>
        );
      })}
      <div
        className={
          currentPage === numOfpages.length
            ? "pagination-next"
            : "pagination-next"
        }
      >
        <Link
          className="text"
          to="#!"
          onClick={() =>
            setcurrentPage((next) =>
              next === numOfpages.length ? next : next + 1
            )
          }
        >
          Sonraki
        </Link>
      </div>
    </div>
  );
}

export default Pagination;
