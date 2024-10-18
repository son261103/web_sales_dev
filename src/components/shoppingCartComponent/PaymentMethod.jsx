import React, { useState } from 'react';

const PaymentMethod = ({ onSubmit }) => {
    const [paymentMethod, setPaymentMethod] = useState('qr');
    const [cardDetails, setCardDetails] = useState({
        name: '',
        number: '',
        expiry: '',
        cvv: ''
    });

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ paymentMethod, cardDetails });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-4">
                    <label className="form-label">Chọn phương thức thanh toán</label>
                    <div className="mb-3">
                        <input
                            type="radio"
                            name="paymentMethod"
                            id="qrPayment"
                            value="qr"
                            checked={paymentMethod === 'qr'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="qrPayment">Thanh toán bằng mã QR</label>
                    </div>
                    <div className="mb-3">
                        <input
                            type="radio"
                            name="paymentMethod"
                            id="cardPayment"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="cardPayment">Thanh toán bằng thẻ (Visa, MasterCard)</label>
                    </div>
                </div>

                <div className="col-md-8">
                    {paymentMethod === 'qr' ? (
                        <div id="qrCodeSection" className="payment-method-section">
                            <h5>Thanh toán bằng mã QR</h5>
                            <p>Quý khách vui lòng quét mã QR dưới đây để thanh toán đơn hàng của mình:</p>
                            <div className="qr-code">
                                <img src="https://placehold.co/200x200?text=QR+Code" alt="QR Code" />
                            </div>
                        </div>
                    ) : (
                        <div id="cardPaymentSection" className="payment-method-section">
                            <h5>Thanh toán bằng thẻ</h5>
                            <div className="mb-3">
                                <label className="form-label">Tên trên thẻ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập tên trên thẻ"
                                    name="name"
                                    value={cardDetails.name}
                                    onChange={handleCardDetailsChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Số thẻ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập số thẻ"
                                    name="number"
                                    value={cardDetails.number}
                                    onChange={handleCardDetailsChange}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Ngày hết hạn</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="MM/YY"
                                        name="expiry"
                                        value={cardDetails.expiry}
                                        onChange={handleCardDetailsChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Mã CVV</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="CVV"
                                        name="cvv"
                                        value={cardDetails.cvv}
                                        onChange={handleCardDetailsChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="d-flex mt-4">
                <button type="button" className="btn btn-secondary col-md-2 mx-2">Quay trở về</button>
                <button type="submit" className="checkout-btn col-md-10">XÁC NHẬN THANH TOÁN</button>
            </div>
        </form>
    );
};

export default PaymentMethod;