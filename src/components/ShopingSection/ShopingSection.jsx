import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import Pagination from "../Pagination";
import StarRating from "../StarRating";
import "./ShopingSection.css";

function ShopingSection(props) {
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Number of products to display per page

  const handleAddToCart = (product) => {
    props.addToCart(product);
  };

  const handleFavorite = (productId) => {
    const index = favorites.findIndex((id) => id === productId);
    if (index >= 0) {
      favorites.splice(index, 1);
    } else {
      favorites.push(productId);
    }
    setFavorites([...favorites]);
  };

  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  const handleSort = (option) => {
    setSortBy(option);
    setCurrentPage(1); // Reset current page to 1

    let sortedItems = [...products]; // Copy the original products array

    if (option === "priceLowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (option === "priceHighToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (option === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    setSortedProducts(sortedItems);
  };

  const calculateProductRange = () => {
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    return { firstIndex, lastIndex };
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const catalogSection = document.getElementById("catalog");
    catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <section id="catalog" className="catalog">
      <div className="container">
        <div className="section-header">
          <h2>Каталог</h2>
        </div>
        <div className="sorting-section">
          <label htmlFor="sort-select">Сортувати:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="priceLowToHigh">від дешевих до дорогих</option>
            <option value="priceHighToLow">від дорогих до дешевих</option>
            <option value="name">по імені</option>
          </select>
        </div>
        <div className="catalog-content">
          <div className="product-grid-container">
            {sortedProducts
              .slice(
                calculateProductRange().firstIndex,
                calculateProductRange().lastIndex
              )
              .map((product) => (
                <div className="row-item" key={product.id}>
                  <div className="single-item">
                    <div className="single-item-bg">
                      <Link to={`/products/${product.id}`}>
                        <img
                          className="catalog-img"
                          src={product.image}
                          alt={product.name}
                        />
                      </Link>
                      <div className="single-item-bg-overlay"></div>
                      {product.isOnSale && <div className="sale"></div>}
                    </div>

                    <div className="productRating">
                      <StarRating rating={product.rating} />
                      <span className="num-reviews">
                        ({product.numReviews} відгуків)
                      </span>
                    </div>

                    <h4 className="product-name-home">
                      <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </h4>
                    <div className="item-product-price-and-add-to-cart">
                      <p className="item-product-price" style={{ textTransform: "none" }}>
                        {product.price} грн
                      </p>

                      <button
                        className={`favorite ${
                          isFavorite(product.id) ? "active" : ""
                        }`}
                        onClick={() => handleFavorite(product.id)}
                      ></button>
                      <button
                        className="add-to-cart lnr lnr-cart"
                        onClick={() => handleAddToCart(product)}
                      ></button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default ShopingSection;
