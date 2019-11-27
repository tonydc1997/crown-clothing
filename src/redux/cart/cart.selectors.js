import { createSelector } from 'reselect';
import { create } from 'domain';

const selectCart = state => state.cart;
const selectCartItems = createSelector([selectCart], cart => cart.cartItems);
const selectCartItemsCount = createSelector([selectCart], cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);
