import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './CartConstants';


export const addToCart = (item) => ({
  type: CART_ADD_ITEM,
  payload: item,
  count: 1,
});

export const removeFromCart = (itemId) => ({
  type: CART_REMOVE_ITEM,
  payload: itemId,
});
