import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cartItems) || []; // Initialize cartItems to an empty array if it's undefined or null

  // Function to calculate the total price of the items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <div><Header cartItems={cartItems} /></div>
      <div className="cartpage">
        <div className="cartpage__left">
          <h2>Shopping Cart</h2>
          {/* Render the cart items */}
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="cartpage__right">
          <div className="cartpage__info">
            <p>Subtotal ({cartItems.length}) items</p>
            {/* Calculate and display the total price */}
            <p>${calculateTotalPrice()}</p>
          </div>
          <div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
