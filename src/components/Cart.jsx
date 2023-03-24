import React from 'react';

const Cart = ({cartItems, removeCartItem, updateCartItem}) => {
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleQuantityChange = (event, item) => {
    const quantity = parseInt(event.target.value);
    updateCartItem({...item, quantity});
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(e, item)}
            />
            <button onClick={() => removeCartItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cartTotal}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
