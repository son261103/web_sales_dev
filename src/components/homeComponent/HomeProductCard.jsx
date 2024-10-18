import React from 'react';

const HomeProductCard = ({product}) => {
    return (
        <a href={product.link} className="text-decoration-none text-dark">
            <div className="product-card me-3">
                <div className="card h-100 shadow-sm">
                    <div className="badge-overlay">
                        <span className="badge bg-danger">{product.discount}</span>
                    </div>
                    <img src={product.image} className="card-img-top" alt={product.name}/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text small">{product.description}</p>
                        <div className="mt-auto">
                            <p className="mb-0">
                                <span className="text-danger fw-bold">{product.price}</span>
                            </p>
                            <p className="text-muted text-decoration-line-through small">{product.originalPrice}</p>
                            <button className="btn btn-outline-primary btn-sm mt-2 w-100">
                                <i className="fas fa-shopping-cart me-1"></i>Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default HomeProductCard;
