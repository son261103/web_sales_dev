import React from 'react';

const ProductDetailInfo = ({ product }) => {
    return (
        <div className="product-info p-2">
            <h2>{product.name}</h2>
            <p className="specs">{product.specs}</p> {/* Hiển thị thông số kỹ thuật */}
            <div className="price">
                <span className="current-price">{product.price}</span>
                <span className="original-price">{product.oldPrice}</span>
                <span className="discount">-18%</span>
            </div>
            <button className="buy-now-btn">
                MUA NGAY
                <h6>Giao tận nơi hoặc nhận tại cửa hàng</h6>
            </button>

            {/* Warranty and Return Section */}
            <div className="warranty-info p-3">
                <p><strong>Thông tin bảo hành:</strong></p>
                <ul>
                    <li>Bảo hành chính hãng 36 tháng.</li>
                    <li>Hỗ trợ đổi mới sản phẩm trong vòng 7 ngày nếu có lỗi kỹ thuật.</li>
                    <li>
                        Địa chỉ bảo hành: Trung tâm bảo hành gần nhất hoặc liên hệ hỗ trợ qua Hotline.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDetailInfo;
