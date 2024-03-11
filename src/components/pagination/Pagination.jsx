import "./Pagination.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Pagination() {
    const pages =5;
    const numOfpages = [];
    for (let i = 1; i <= pages; i++) {
        numOfpages.push(i);
    }
    const [currentPage,setcurrentPage]=useState(1);
    return(
        <div className="pagination">
            <div className={currentPage === 1 ? "pagination-prev disabled" : "pagination-prev"}>
            <Link className="text" to="#!" onClick={()=> setcurrentPage((prev) => prev===1 ? prev : prev-1)}>Önceki
                </Link></div>
            {
                numOfpages.map((page,index) => {
                    return(
                    <div key={index} className={currentPage === page ? "pagination-item activee" : "pagination-item"}>
                <Link className="item" to="#!" onClick={()=>setcurrentPage(page)}>{page}
                </Link></div>
                )})
            }
            <div className={currentPage === numOfpages.length ? 'pagination-next' : 'pagination-next'}>
                <Link className="text" to="#!" onClick={()=> setcurrentPage((next) => next===numOfpages.length ? next : next+1)}>Sonraki
                </Link></div>
        </div>
    );
}

export default Pagination;
