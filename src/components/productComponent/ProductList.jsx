import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import FilterBar from "./FilterBar";

const ProductList = ({ products = [] }) => { // Đảm bảo products là một mảng
    return (
        <section id="products" className="py-4">
            <div className="container">
                {/* Thanh lọc sản phẩm */}
                <FilterBar/>

                <div className="row">
                    {/* Render thẻ sản phẩm */}
                    {products.map((product) => (
                        <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
                            <Link
                                to={`/products/${product.id}`} // Sử dụng Link để chuyển đến trang chi tiết
                                className="text-decoration-none text-dark"
                            >
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={product.imgSrc}
                                        className="card-img-top"
                                        alt={product.name}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text small">{product.specs}</p>
                                        <p className="text-danger fw-bold">{product.price}</p>
                                        <p className="text-muted text-decoration-line-through small">
                                            {product.oldPrice}
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm mt-2 w-100">
                                            <i className="fas fa-shopping-cart me-1"></i> Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Nếu cần thiết, có thể thêm phân trang */}
                {/* <Pagination/> */}
            </div>
        </section>
    );
};

export default ProductList;
