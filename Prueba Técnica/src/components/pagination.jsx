import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import "./pagination.css"

const Paginacion = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [1, 2, 3, 4, 5]; // Ejemplo de números de página

  return (
    <Pagination className='pagination-container'>
      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Paginacion;
