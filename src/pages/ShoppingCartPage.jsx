import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import CartProduct from "../components/shoppingCartComponent/CartProduct";
import OrderForm from "../components/shoppingCartComponent/OrderForm";
import PaymentMethod from "../components/shoppingCartComponent/PaymentMethod";
import PaymentCompletion from "../components/shoppingCartComponent/PaymentCompletion";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CartHeader from "../components/shoppingCartComponent/CartHeader";
import '../styles/user/css/shopping-cart.css';

const ShoppingCartPage = () => {
    const [currentStep, setCurrentStep] = useState('cart');
    const [orderDetails, setOrderDetails] = useState({
        products: [
            { name: 'Màn hình ASUS ProArt PA248QV', quantity: 1, price: 4990000 },
            { name: 'Laptop Lenovo IdeaPad 3', quantity: 1, price: 9990000 },
        ],
        total: 14980000,
    });

    const handleOrderSubmit = (formData) => {
        // Process order data
        setCurrentStep('payment');
    };

    const handlePaymentSubmit = (paymentData) => {
        // Process payment data
        setCurrentStep('completion');
    };

    const renderStep = () => {
        switch (currentStep) {
            case 'cart':
                return (
                    <>
                        {orderDetails.products.map((product, index) => (
                            <CartProduct
                                key={index}
                                image="https://placehold.co/120x100"
                                name={product.name}
                                oldPrice={`${product.price + 1300000}đ`}
                                newPrice={`${product.price}đ`}
                            />
                        ))}
                        <div className="total-price mt-4">Tổng tiền: {orderDetails.total}đ</div>
                        <button className="checkout-btn" onClick={() => setCurrentStep('order')}>
                            ĐẶT HÀNG NGAY
                        </button>
                    </>
                );
            case 'order':
                return <OrderForm onSubmit={handleOrderSubmit} />;
            case 'payment':
                return <PaymentMethod onSubmit={handlePaymentSubmit} />;
            case 'completion':
                return <PaymentCompletion orderDetails={orderDetails} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Navbar />
            <Breadcrumbs />
            <div className="container">
                <CartHeader currentStep={currentStep} />
                {renderStep()}
            </div>
        </div>
    );
};

export default ShoppingCartPage;