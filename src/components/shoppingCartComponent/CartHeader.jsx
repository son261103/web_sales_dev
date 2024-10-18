import React from 'react';

const CartHeader = ({currentStep}) => {
    const steps = ['cart', 'order', 'payment', 'completion'];
    const stepNames = ['Giỏ hàng', 'Thông tin đặt hàng', 'Thanh toán', 'Hoàn tất'];

    return (
        <div className="cart-header mb-4">
            {steps.map((step, index) => (
                <a
                    key={step}
                    href="#"
                    className={currentStep === step ? 'active' : ''}
                >
                    {stepNames[index]}
                </a>
            ))}
        </div>
    );
};

export default CartHeader;