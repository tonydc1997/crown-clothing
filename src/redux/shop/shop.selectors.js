import { createSelectors } from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelectors(
  [selectShop],
  shop => shop.shopItems
);
