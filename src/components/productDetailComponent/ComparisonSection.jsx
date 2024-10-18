import React from 'react';
import ComparisonTable from './ComparisonTable';

const ComparisonSection = () => {
    return (
        <div className="container comparison-section">
            <h3 className="mb-4">So sánh sản phẩm tương tự</h3>
            <ComparisonTable/>
        </div>
    );
};

export default ComparisonSection;
