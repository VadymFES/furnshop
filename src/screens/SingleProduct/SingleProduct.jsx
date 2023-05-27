import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import products from '../../data/products';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import StarRating from '../../components/StarRating';
import './SingleProduct.css';
import breadcrumbIcon from '../../assets/icons/breadcrumb.png';
import homeBreadcrumb from '../../assets/icons/home-breadcrumb.png';
import { addToCart } from '../../store/actions/CartActions'; 

function SingleProduct() {
  const { id } = useParams();
  const product = products.find((product) => product.id );
  const [comments, setComments] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments_${id}`));
    if (savedComments) {
      setComments(savedComments);
    }

    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [id]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? product.carouselImages.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === product.carouselImages.length - 1 ? 0 : currentSlide + 1);
  };

  if (!product) {
    return <div>Product not found</div>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    const newComment = { name: name, text: comment, date: new Date() };
    setComments([...comments, newComment]);
    localStorage.setItem(
      `comments_${id}`,
      JSON.stringify([...comments, newComment])
    );
    e.target.reset();
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
    setCartItems(cartItems + 1);
  };






  return (
    <div key={product.id}>
      <Header />
      <div className="product-page">
        <nav >
          <div className="breadcrumb-item">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
              <img className="breadcrumb-icon" src={homeBreadcrumb} alt="Home" />
                <Link to="/">Головна</Link> </li>
              
            
              
              <li className="breadcrumb-item"><img className="breadcrumb-icon" src={breadcrumbIcon} alt="breadcrumbIcon" />
              <span className="product-name-breadcrumbs">{product.name}</span></li>
            </ol>
          </div>
        </nav>
        <div className="product-container">
          <div className="product-image">
            <div className="carousel">
              <img src={product.carouselImages[currentSlide]} alt={product.name} />
              <div className="carousel-nav">
                <button onClick={prevSlide}>{"<"}</button>
                <button onClick={nextSlide}>{">"}</button>
              </div>
            </div>
            <div className="carousel-thumbnails">
              {product.carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`thumbnail ${index === currentSlide ? "active" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="product-details">
            <h1 className="product-name">{product.name}</h1>
            <div className="product-rating">
              <StarRating rating={product.rating} />
              <span className="num-reviews">({product.numReviews} відгуків)</span>
            </div>
            <div className="product-price">
              {product.countInStock > 0 ? `$${product.price}` : "Out of stock"}
              {product.countInStock > 0 &&
                <button className="add-to-cart-button" onClick={handleAddToCart}>Додати в кошик</button>
              }
            </div>
            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <section className="product-comments">
              <p className="comments-h2">Відгуки</p>

              <form onSubmit={handleSubmit}>
                <legend>Залишити відгук</legend>
                <label>
                  Ім'я:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>

                <textarea type="text" name="comment" placeholder="Ваш відгук" style={{ wordWrap: 'break-word' }} />
                <button className="submit-btn" type="submit">Submit</button>
              </form>

              {comments.slice(0).reverse().map((comment, index) => (
                <div key={index} className="comment-box">
                  <p><strong>{comment.name}</strong> <span className="comment-date">{new Date(comment.date).toLocaleDateString()}</span></p>
                  <p>{comment.text}</p>
                </div>
              ))}

            </section>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
