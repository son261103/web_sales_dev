import React from 'react';

const PaymentCompletion = ({ orderDetails }) => {
    return (
        <div className="payment-completion-container">
            <h2 className="text-center my-4">Thanh Toán Thành Công</h2>
            <div className="alert alert-success text-center" role="alert">
                Cảm ơn bạn! Thanh toán của bạn đã được thực hiện thành công.
            </div>

            <h5 className="mt-4">Hóa Đơn Của Bạn</h5>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên Sản Phẩm</th>
                    <th scope="col">Số Lượng</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Tổng</th>
                </tr>
                </thead>
                <tbody>
                {orderDetails.products.map((product, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price} VNĐ</td>
                        <td>{product.quantity * product.price} VNĐ</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="4" className="text-right"><strong>Tổng Cộng</strong></td>
                    <td>{orderDetails.total} VNĐ</td>
                </tr>
                </tfoot>
            </table>

            <div className="text-center mt-4">
                <a href="#" className="btn btn-primary">Trở Về Trang Chủ</a>
                <a href="#" className="btn btn-secondary">In Hóa Đơn</a>
            </div>
        </div>
    );
};

export default PaymentCompletion;