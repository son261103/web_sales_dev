import React from 'react';

const FilterBar = () => {
    return (
        <div className="filter-bar d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex">
                {['Giá', 'Hãng', 'CPU', 'RAM', 'SSD', 'Kích thước màn hình', 'Nhu cầu sử dụng', 'VGA'].map((filter, index) => (
                    <select key={index} className="form-select me-2">
                        <option selected>{filter}</option>
                    </select>
                ))}
                <select className="form-select">
                    <option selected>Sắp xếp theo:</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
