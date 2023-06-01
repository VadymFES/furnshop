const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add the product to the cart or increase the quantity if it already exists
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        const updatedItems = state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cartItems: updatedItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      // Remove the specified quantity of the item from the cart
      const { productId, quantity } = action.payload;
      const updatedItems = state.cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - quantity } : item
      );
      // Filter out items with quantity 0 or less
      const filteredItems = updatedItems.filter(item => item.quantity > 0);
      return {
        ...state,
        cartItems: filteredItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
