import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-3">Tech Store</h5>
                        <p>
                            Cung cấp sản phẩm công nghệ chất lượng cao và dịch vụ khách hàng
                            xuất sắc từ năm 2023.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-3">Liên hệ</h5>
                        <p>
                            <i className="fas fa-map-marker-alt me-2"></i>123 Đường Công Nghệ, TP.
                            Hồ Chí Minh
                        </p>
                        <p><i className="fas fa-phone me-2"></i>(028) 1234 5678</p>
                        <p><i className="fas fa-envelope me-2"></i>info@techstore.com</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-3">Kết nối với chúng tôi</h5>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <hr className="my-4 bg-light"/>
                <div className="text-center">
                    <p className="mb-0">&copy; 2024 Tech Store. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
