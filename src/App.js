import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './store/reducers/CartReducer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./screens/Home";
import "./App.css";
import "./index.css";
import "./css/bootstrap.min.css";
import "../src/css/linearicons.css";
import SingleProduct from "./screens/SingleProduct/SingleProduct";
import NotFoundPage from "./screens/NotFoundPage/NotFoundPage";
import AboutUs from "./screens/AboutUs/AboutUs";
import CartPage from "./screens/CartPage/CartPage";

const store = createStore(cartReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/products" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
