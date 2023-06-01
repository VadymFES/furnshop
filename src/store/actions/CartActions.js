export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const removeFromCart = (productId, quantity = 1) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      productId,
      quantity,
    },
  };
};