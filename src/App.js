import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
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



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
