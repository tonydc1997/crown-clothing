import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = () => (
  <div className="checkout">
    <div className="image-container">
      <img alt="item" />
    </div>
    <span className="name"></span>
    <span className="quantity"></span>
    <span className="price"></span>
    <div className="remove-button">&#10005;</div>
  </div>
);
