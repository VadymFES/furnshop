import React, { useState } from "react";
import MainBanner from "../components/MainBanner.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";
import ShopingSection from "../components/ShopingSection/ShopingSection.jsx";

function Home() {
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);

    const addToFavorite = (product) => {
        setFavoriteItems([...favoriteItems, product]);
    };
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div>
            <Header cartItems={cartItems} favoriteItems={favoriteItems} />
            <MainBanner />
            <ShopingSection addToCart={addToCart} addToFavorite={addToFavorite} />
            <Footer />



        </div>






    )
};


export default Home;