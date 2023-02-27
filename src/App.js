import React from "react";
import "./js/bootsnav";
import Home from "./screens/Home"
import "./App.css";
import "./index.css";
import "../src/css/animate.css";
import "../src/css/bootsnav.css";
import "./css/bootstrap.min.css";
import "../src/css/linearicons.css";
import SingleProduct from "./screens/SingleProduct";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
