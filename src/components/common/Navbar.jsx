import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current URL
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleAccountClick = () => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            console.log('Mở trang tài khoản');
            // navigate('/account');
        }
    };

    const getActiveClass = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://placehold.co/150x50"
                        alt="Tech Store Logo"
                        className="img-fluid"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/')}`} to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/products')}`} to="/products">Sản phẩm</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/promotions')}`} to="/promotions">Khuyến mãi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/news')}`} to="/news">Tin tức</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/support')}`} to="/support">Hỗ trợ</Link>
                        </li>
                    </ul>
                    <form className="search-form d-flex me-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Tìm kiếm sản phẩm..."
                        />
                        <button className="btn-search" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <div className="navbar-icons">
                        <Link to="/cart" className="navbar-icon" title="Giỏ hàng">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="notification-badge">4</span>
                        </Link>
                        <Link to="/notifications" className="navbar-icon" title="Thông báo">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="notification-badge">3</span>
                        </Link>
                        <Link to="/login" className="navbar-icon btn btn-link" title="Tài khoản" onClick={handleAccountClick}>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
