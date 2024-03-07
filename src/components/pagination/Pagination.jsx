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
{/* <div className="pagination-item">
                <Link className="item" to="#">1
                </Link></div>
            <div className="pagination-item">
                <Link className="item" to="#">2
                </Link ></div>
            <div className="pagination-item">
                <Link className="item" to="#">3
                </Link></div>
            <div className="pagination-item">
                <Link className="item" to="#">4
                </Link></div>
            <div className="pagination-item">
                <Link className="item" to="#">5
                </Link></div>
            <div className="pagination-item">
                <Link className="item" to="#">6
                </Link></div>
            <div className="pagination-item">
                <Link className="item" to="#">7
                </Link></div>
            <div className="pagination-item">
                <Link className="item" to="#">8
                </Link></div> */}