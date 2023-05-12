import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';

const Header = (props) => {
    const { cartItems, favoriteItems } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="top-area">
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
                    {/* SEARCH INPUT START */}
                    <div className="top-search">
                        <div className="container">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                                <input type="text" className="form-control" placeholder="Search"></input>
                                <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                            </div>
                        </div>
                    </div>
                    {/* SEARCH INPUT END */}
                    <div className="container">
                        <div className="attr-nav">
                            <ul>
                                <li className="search">
                                    <a href="/"><span className="lnr lnr-magnifier"></span></a>
                                </li>
                                <li className="profile">
                                    <a href="/profile"><span className="lnr lnr-user"></span></a>
                                </li>
                                <li className="liked">
                                    <Link to="/favorite">
                                        <i className="lnr lnr-heart"></i>
                                        {favoriteItems && favoriteItems.length > 0 && <span className="badge">{favoriteItems.length}</span>}
                                    </Link>
                                </li>
                                <li className="cart">
                                    <Link to="/cart">
                                        <i className="lnr lnr-cart"></i>
                                        {cartItems && cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                       


                       
                        <nav className="navbar-lg">
                            <div className="navbar-header">
                                 {/* NAVBAR LOGO START */}
                                <Link className="logo" to="/">
                                    <img src={logo} alt="Dekop" style={{ height: '60px', width: '120px' }} />
                                </Link>
                                 {/* NAVBAR LOGO END */}
                                <button type="button" className="navbar-toggle collapsed" onClick={toggleMenu}>
                                    <div className="menuNav">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </div>
                                </button>
                            </div>
                            <div className={`collapse navbar-collapse menu-ui-design${isMenuOpen ? ' in' : ''}`} id="navbar-menu">
                                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className="nav-item"><a href="/#">Головна</a></li>
                                    <li className="nav-item"><a href="/#catalog">Каталог</a></li>
                                    <li className="nav-item"><a href="/#delivery">Доставка</a></li>
                                    <li className="nav-item"><a href="/about">Про нас</a></li>
                                    <li className="nav-item"><a href="/#contact">Контакти</a></li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </nav>




            </div>
            <div className="clearfix"></div>
        </div>
    );
};

export default Header;
