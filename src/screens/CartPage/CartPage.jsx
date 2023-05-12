import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { addToCart, removeFromCart } from '../../store/actions/CartActions';
import useLocalStorage from '../../hooks/useLocalStorage';
import './CartPage.css';

const CartPage = ({ cartItems, addToCart, removeFromCart }) => {
  const [storedCartItems, setStoredCartItems] = useLocalStorage('cartItems', []);

  useEffect(() => {
    setStoredCartItems(cartItems);
  }, [cartItems, setStoredCartItems]);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = storedCartItems.filter(item => item.id !== itemId);
    setStoredCartItems(updatedCartItems);
    removeFromCart(itemId);
  };

  const handleAddItem = (item) => {
    addToCart(item);
  };

  const getItemCount = (itemId) => {
    const item = storedCartItems.find((item) => item.id === itemId);
    return item ? item.count : 0;
  };

  const getTotalPrice = () => {
    return storedCartItems.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div className='cart-page'>
      <Header/> 
      <h1>Cart Page</h1>
      {storedCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {storedCartItems.map((item) => (
              <li key={item.id}>
                <div className="product-info">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price} грн</p>
                    <p>Quantity: {getItemCount(item.id)}</p>
                  </div>
                </div>
                <div className="actions">
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  <button onClick={() => handleAddItem(item)}>Add</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: {getTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (itemId) => dispatch(removeFromCart(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
