export const addItemtoCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd
  );
};
