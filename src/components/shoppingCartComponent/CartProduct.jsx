import React, { useState } from 'react';

const CartProduct = ({ image, name, oldPrice, newPrice }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <div className="cart-product">
            <img src={image} alt={name} />
            <div className="product-info">
                <h5>{name}</h5>
                <div className="quantity-input">
                    <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
                    <input
                        type="number"
                        className="form-control mx-2"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    />
                    <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
                </div>
            </div>
            <div className="product-price">
                <span className="old-price">{oldPrice}</span><br />
                <span>{newPrice}</span>
            </div>
        </div>
    );
};

export default CartProduct;