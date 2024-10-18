import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = ({ currentPage }) => {
    const location = useLocation();

    // Kiểm tra nếu đang ở trang chủ ("/home")
    if (location.pathname === "/home") {
        return null; // Không hiển thị breadcrumbs ở trang chủ
    }

    return (
        <nav aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/home"><i className="fas fa-home"></i> Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
