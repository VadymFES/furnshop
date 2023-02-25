import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    {
      image: slider1,
      title: 'Product 1',
      description: 'Description of product 1',
    },
    {
      image: slider2,
      title: 'Product 2',
      description: 'Description of product 2',
    },
    {
      image: slider3,
      title: 'Product 3',
      description: 'Description of product 3',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Product 4',
      description: 'Description of product 4',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % products.length);
  }, [currentSlide, products.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((currentSlide - 1 + products.length) % products.length);
  }, [currentSlide, products.length]);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [nextSlide]);

  return (
    <div className="product-carousel">
      <div className="carousel-container">
        <div className="carousel-arrow-wrapper arrow-left">
          <button className="carousel-arrow" onClick={prevSlide}>
            {'<'}
          </button>
        </div>
        {products.map((product, index) => (
          <div
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <img src={product.image} alt={product.title} />
            <div className="carousel-slide-content">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
        <div className="carousel-arrow-wrapper arrow-right">
          <button className="carousel-arrow" onClick={nextSlide}>
            {'>'}
          </button>
        </div>
        <div className="carousel-position-indicators">
          {products.map((product, index) => (
            <button
              className={`carousel-position-indicator ${index === currentSlide ? 'active fade-in' : 'fade-out'
                }`}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
