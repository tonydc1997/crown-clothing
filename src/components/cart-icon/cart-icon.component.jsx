import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = () => (
  <div>
    <ShoppingIcon />
    <span>0</span>
  </div>
);
