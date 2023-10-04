import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, onPageChange }) => {
  const totalPages = 10;
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Link
          to={`/page/${i}`} 
          key={i}
          className={`${activePage === i
            ? "bg-blue-500 text-white"
            : "text-blue-500 hover:bg-blue-200"
          } border rounded-full h-8 w-8 flex items-center justify-center`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Link>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-2 p-5">
      <button
        className="bg-blue-500 text-white border rounded-full h-8 w-8 flex items-center justify-center"
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage === 1}
      >
        {"<"}
      </button>
      {renderPageNumbers()}
      <button
        className="bg-blue-500 text-white border rounded-full h-8 w-8 flex items-center justify-center"
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
