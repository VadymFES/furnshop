import React from 'react';

import Header from '../../components/Header/Header';
import './CartPage.css';

const CartPage = () => {

  return (
    <> 
 <div><Header/></div>
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>
    
      </div>
      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
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
