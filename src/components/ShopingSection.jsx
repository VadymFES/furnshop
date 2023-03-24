import React from "react";
import { Link } from 'react-router-dom';
import products from "../data/products";
import Pagination from "./Pagination";
import StarRating from './StarRating';


const ShopingSection = () => {

  return (
    <section id="catalog" className="catalog">
      <div className="container">
        <div className="section-header">
          <h2>Каталог</h2>
        </div>
        <div className="catalog-content">
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 col-sm-4" key={product.id}>
                <div className="single-item">
                  <div className="single-item-bg">
                    <Link to={`/product/${product.id}`}>
                      <img className="catalog-img" src={product.image} alt={product.name} />
                    </Link>
                    <div className="single-item-bg-overlay"></div>
                    {product.isOnSale && (
                      <div className="sale bg-2">
                        <p>sale</p>
                      </div>
                    )}


                        <Link to={`/product/${product.id}`}></Link>
  
 
                  </div>

                  <div className="product-rating">
                    <StarRating rating={product.rating} />
                    <span className="num-reviews">({product.numReviews} reviews)</span>
                  </div>

                  <h4 className="product-name-home"><Link to={`/product/${product.id}`}>{product.name}</Link></h4>
                  <p className="item-product-price">${product.price}</p>


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
