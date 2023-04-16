import React from "react";
import "./js/bootsnav";
import Home from "./screens/Home"
import "./App.css";
import "./index.css";
import "../src/css/bootsnav.css";
import "./css/bootstrap.min.css";
import "../src/css/linearicons.css";
import SingleProduct from "./screens/SingleProduct/SingleProduct";
import NotFoundPage from "./screens/NotFoundPage/NotFoundPage";
import AboutUs from "./screens/AboutUs/AboutUs";
import CartPage from "./screens/CartPage/CartPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
