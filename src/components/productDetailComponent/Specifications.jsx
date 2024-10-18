import React from 'react';

const Specifications = () => {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="product-details">
                <h3>Thông số cấu hình</h3>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <th>Nhà sản xuất</th>
                        <td>Asus</td>
                    </tr>
                    <tr>
                        <th>Model</th>
                        <td>PA248QV</td>
                    </tr>
                    <tr>
                        <th>Kích thước màn hình</th>
                        <td>24 inch</td>
                    </tr>
                    <tr>
                        <th>Độ phân giải</th>
                        <td>1920x1200 (16:10)</td>
                    </tr>
                    <tr>
                        <th>Tần số quét</th>
                        <td>75Hz</td>
                    </tr>
                    <tr>
                        <th>Tấm nền</th>
                        <td>IPS</td>
                    </tr>
                    <tr>
                        <th>Độ sáng</th>
                        <td>300cd/m²</td>
                    </tr>
                    <tr>
                        <th>Cổng kết nối</th>
                        <td>HDMI, DisplayPort, D-Sub</td>
                    </tr>
                    <tr>
                        <th>Tiện ích</th>
                        <td>Tích hợp loa, Adaptive-Sync, Ergonomic Stand (Điều chỉnh độ cao, xoay dọc)</td>
                    </tr>
                    <tr>
                        <th>Bảo hành</th>
                        <td>36 tháng</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Specifications;
