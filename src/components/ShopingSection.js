import React from "react";
import { Link } from 'react-router-dom';
import products from "../data/products";
import Pagination from "./Pagination";
import '../css/SingleProduct.css'


const ShopingSection = () => {
    
  return (
    <section id="new-arrivals" className="new-arrivals">
      <div className="container">
        <div className="section-header">
          <h2>new arrivals</h2>
        </div>
        <div className="new-arrivals-content">
          <div className="row">
          {products.map((product) => (
  <div className="col-md-3 col-sm-4" key={product.id}>
    <div className="single-new-arrival">
      <div className="single-new-arrival-bg">
        <img src={product.image} alt={product.name} />
        <div className="single-new-arrival-bg-overlay"></div>
        {product.isOnSale && (
          <div className="sale bg-2">
            <p>sale</p>
          </div>
        )}
        <div className="new-arrival-cart">
          <p>
            <span className="lnr lnr-cart"></span>
            <Link to={`/product/${product.id}`}>add <span>to </span> cart</Link>
          </p>
          <p className="arrival-review pull-right">
            <span className="lnr lnr-heart"></span>
            <span className="lnr lnr-frame-expand"></span>
          </p>
        </div>
      </div>
      <h4><Link to={`/product/${product.id}`}>{product.name}</Link></h4>
      <p className="arrival-product-price">${product.price}</p>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default ShopingSection;
