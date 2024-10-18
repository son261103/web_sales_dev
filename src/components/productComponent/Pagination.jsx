import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [];

    // Tính toán số trang
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => paginate(currentPage - 1)} href="#" tabIndex="-1" aria-disabled={currentPage === 1}>
                        <i className="fas fa-arrow-left"></i>
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} className="page-link" href="#">{number}</a>
                    </li>
                ))}
                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => paginate(currentPage + 1)} href="#">
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
