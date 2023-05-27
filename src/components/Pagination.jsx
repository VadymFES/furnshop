import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  return (
    <nav className="text-center">
      <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <Link className="page-link" to={`/?page=${index + 1}`} onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
