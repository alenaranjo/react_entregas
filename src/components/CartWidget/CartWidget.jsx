import React from 'react';
import './CartWidget.css';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const { totalItems } = useCartContext();
    return (
        <div className="widget">
            <div className="cart-icon"></div>
            <p>{totalItems > 0 && <span className="item-count">{totalItems}</span>}</p>
        </div>
    );
};
