import React, {useState} from 'react';

const OrderForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        gender: 'male',
        name: '',
        phone: '',
        shipping: 'home',
        province: '',
        district: '',
        ward: '',
        address: '',
        note: '',
        invoice: false
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Thông tin khách mua hàng</label>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                    />
                    <label htmlFor="male">Anh</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                    />
                    <label htmlFor="female">Chị</label>
                </div>
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập họ tên"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập số điện thoại"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <label className="form-label">Chọn cách nhận hàng</label>
            <div className="mb-3">
                <input
                    type="radio"
                    name="shipping"
                    value="home"
                    checked={formData.shipping === 'home'}
                    onChange={handleChange}
                />
                <label>Giao hàng tận nơi</label>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <select
                        className="form-select"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                    >
                        <option>Chọn Tỉnh, Thành phố</option>
                        {/* Add options here */}
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <select
                        className="form-select"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                    >
                        <option>Chọn Quận, Huyện</option>
                        {/* Add options here */}
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <select
                        className="form-select"
                        name="ward"
                        value={formData.ward}
                        onChange={handleChange}
                    >
                        <option>Chọn Phường, Xã</option>
                        {/* Add options here */}
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Số nhà, tên đường"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="mb-3">
        <textarea
            className="form-control"
            placeholder="Lưu ý, yêu cầu khác (Không bắt buộc)"
            name="note"
            value={formData.note}
            onChange={handleChange}
        ></textarea>
            </div>
            <div className="form-check mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="invoice"
                    checked={formData.invoice}
                    onChange={handleChange}
                />
                <label className="form-check-label">Xuất hóa đơn cho đơn hàng</label>
            </div>

            <div className="total-price mt-4">Tổng tiền: 4.990.000đ</div>
            <div className="d-flex">
                <button type="button" className="btn btn-secondary col-md-2 mx-2">Quay trở về</button>
                <button type="submit" className="checkout-btn col-md-10">XÁC NHẬN ĐẶT HÀNG</button>
            </div>
        </form>
    );
};

export default OrderForm;