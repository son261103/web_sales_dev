import React from 'react';

const ComparisonTable = () => {
    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Thông số</th>
                <th>Laptop HP 14s-dq5121TU i3</th>
                <th>Laptop Lenovo IdeaPad 1 15AMN7 R5</th>
                <th>Laptop Dell Inspiron N3511 i5</th>
                <th>Laptop Lenovo V15 G4 IAH i5</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Hình ảnh</td>
                <td><img src="https://placehold.co/150x100" alt="Laptop HP"/></td>
                <td><img src="https://placehold.co/150x100" alt="Laptop Lenovo"/></td>
                <td><img src="https://placehold.co/150x100" alt="Laptop Dell"/></td>
                <td><img src="https://placehold.co/150x100" alt="Laptop Lenovo V15"/></td>
            </tr>
            <tr>
                <td>Giá</td>
                <td>
                    <span className="product-price">10.490.000 đ</span> <br/>
                    <span className="old-price">12.990.000 đ</span><br/>
                    <a href="#" className="btn-compare">Xem chi tiết</a>
                </td>
                <td>
                    <span className="product-price">9.890.000 đ</span> <br/>
                    <span className="old-price">13.490.000 đ</span><br/>
                    <a href="#" className="btn-compare">Xem chi tiết</a>
                </td>
                <td>
                    <span className="product-price">10.990.000 đ</span> <br/>
                    <span className="old-price">11.990.000 đ</span><br/>
                    <a href="#" className="btn-compare">Xem chi tiết</a>
                </td>
                <td>
                    <span className="product-price">13.490.000 đ</span> <br/>
                    <span className="old-price">13.990.000 đ</span><br/>
                    <a href="#" className="btn-compare">Xem chi tiết</a>
                </td>
            </tr>
            <tr>
                <td>Loại CPU</td>
                <td>1215U</td>
                <td>7520U</td>
                <td>1135G7</td>
                <td>12500H</td>
            </tr>
            <tr>
                <td>Dung lượng RAM</td>
                <td>8 GB</td>
                <td>8 GB</td>
                <td>4 GB</td>
                <td>16 GB</td>
            </tr>
            <tr>
                <td>Hỗ trợ RAM tối đa</td>
                <td>32 GB</td>
                <td>Không nâng cấp</td>
                <td>16 GB</td>
                <td>16 GB</td>
            </tr>
            <tr>
                <td>Kích thước màn hình</td>
                <td>14 inch</td>
                <td>15.6 inch</td>
                <td>15.6 inch</td>
                <td>15.6 inch</td>
            </tr>
            <tr>
                <td>Độ phân giải</td>
                <td>1920 x 1080 Pixels</td>
                <td>1920 x 1080 Pixels</td>
                <td>1920 x 1080 Pixels</td>
                <td>1920 x 1080 Pixels</td>
            </tr>
            <tr>
                <td>Tần số quét</td>
                <td>0</td>
                <td>60 Hz</td>
                <td>60 Hz</td>
                <td>60 Hz</td>
            </tr>
            </tbody>
        </table>
    );
};

export default ComparisonTable;
