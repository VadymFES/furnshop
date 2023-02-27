import React, { useState } from 'react';
import products  from "../data/products.js";
import Header from '../components/Header';
import Footer from '../components/Footer';
import StarRating from '../components/StarRating';
import '../css/SingleProduct.css';

function SingleProduct() {
  const [product] = useState(products[0]);

  return (
    <div>
      <Header />
      <div className="product-page">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-rating">
            <StarRating rating={product.rating} />
            <span className="num-reviews">({product.numReviews} reviews)</span>
          </div>
          <div className="product-price">{product.countInStock > 0 ? `$${product.price}` : "Out of stock"}</div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          <div className="product-comments">
            <h2>Comments</h2>
            <ul>
              <li>Great product!</li>
              <li>Love it!</li>
              <li>Not what I expected.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
