import { createStore } from 'redux';

const initialState = {
  cart: {
    items: [],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload],
        },
      };
    case 'CART_REMOVE_ITEM':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(item => item.id !== action.payload),
        },
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
