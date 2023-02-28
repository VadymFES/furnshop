import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import products from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Rating from '../components/Rating';




function SingleProduct() {
  const { id } = useParams();


  const product = products.find((product) => product.id === id);
  const [comments, setComments] = useState([]);

  
  if (!product) {
    return <div>Product not found</div>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    setComments([...comments, comment]);
    e.target.reset();
  };

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
            <Rating rating={product.rating} />
            <span className="num-reviews">({product.numReviews} reviews)</span>
          </div>
          <div className="product-price">{product.countInStock > 0 ? `$${product.price}` : "Out of stock"}</div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          <div className="product-comments">
            <h2>Comments</h2>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <input type="text" name="comment" placeholder="Add a comment" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
