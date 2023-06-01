import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/CartActions';

import Header from '../../components/Header/Header';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cartItems) || [];
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleRemoveOneFromCart = (productId) => {
    const itemToRemove = cartItems.find(item => item.id === productId);
    if (itemToRemove && itemToRemove.quantity > 1) {
      dispatch(removeFromCart(productId, 1));
    }
  };

  const getGroupedCartItems = () => {
    const groupedItems = {};
    cartItems.forEach(item => {
      if (groupedItems[item.id]) {
        groupedItems[item.id].quantity += item.quantity;
      } else {
        groupedItems[item.id] = { ...item, quantity: item.quantity };
      }
    });
    return Object.values(groupedItems);
  };

  return (
    <>
      <div>
        <Header cartItems={cartItems} />
      </div>
      <div className="cartpage">
        <div className="cartpage__left">
          <h2 className='cartpage__header'>Shopping Cart</h2>
          {cartItems.length > 0 ? (
            <ul>
              {getGroupedCartItems().map(item => (
                <li key={item.id} className="cartpage__item">
                  <img src={item.image} alt={item.name} className="cartpage__item-image" />
                  <div className="cartpage__item-details">
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price * item.quantity}</p>
                    <div>
                      <button
                        className="remove-one-from-cart-button"
                        onClick={() => handleRemoveOneFromCart(item.id)}
                      >
                        Remove One
                      </button>
                      <button
                        className="remove-from-cart-button"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove All
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="cartpage__right">
          <div className="cartpage__info">
            <p>Subtotal ({calculateTotalItems()}) items</p>
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
