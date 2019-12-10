import { createSelectors } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelectors(
  [selectShop],
  shop => shop.shopItems
);
