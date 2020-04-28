import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  ItemPrice,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>
        {name} ({quantity})
      </span>
      <ItemPrice>${price * quantity}</ItemPrice>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
