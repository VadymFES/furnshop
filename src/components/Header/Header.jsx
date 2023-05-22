import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import styles from './Header.module.css';

const Header = ({ cartItems }) => {
    const [favoriteItems] = useState([]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
console.log(cartItems)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={styles["top-area"]}>
            <div className={styles["header-area"]}>
                <div className={styles["container"]}>
                    <div className={styles["logo-container"]}>
                        <Link className={styles["logo"]} to="/">
                            <img src={logo} alt="Dekop" style={{ height: '60px', width: '120px' }} />
                        </Link>
                    </div>
                    <div className={styles["menu-container"]}>
                        <button type="button" className={`${styles["navbar-toggle"]} ${isMenuOpen ? styles["active"] : ''}`} onClick={toggleMenu}>
                            <span className={styles["icon-bar"]}></span>
                            <span className={styles["icon-bar"]}></span>
                            <span className={styles["icon-bar"]}></span>
                        </button>
                        <div className={`${styles["navbar-menu"]} ${isMenuOpen ? styles["active"] : ''}`}>
                            <ul className={styles["navigation-items"]}>
                                <li className={styles["nav-item"]}><a href="/#">Головна</a></li>
                                <li className={styles["nav-item"]}><a href="/#catalog">Каталог</a></li>
                                <li className={styles["nav-item"]}><a href="/#delivery">Доставка</a></li>
                                <li className={styles["nav-item"]}><a href="/about">Про нас</a></li>
                                <li className={styles["nav-item"]}><a href="/#contact">Контакти</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["icons-container"]}>
                        <ul className={styles["icons"]}>
                            <li className={styles["icon-item"]}>
                                <a href="/profile"><span className={`lnr lnr-user ${styles["lnr-user"]}`}></span></a>
                            </li>
                            <li className={styles["icon-item"]}>
                                <Link to="/favorite">
                                    <i className={`lnr lnr-heart ${styles["lnr-heart"]}`}></i>
                                    {favoriteItems && favoriteItems.length > 0 && <span className={styles["badge"]}>{favoriteItems.length}</span>}
                                </Link>
                            </li>
                            <li className={styles["icon-item"]}>
                            <Link to="/cart">
  <i className={`lnr lnr-cart ${styles["lnr-cart"]}`}></i>
  {cartItems && cartItems.length > 0 && <span className={styles["badge"]}>{cartItems.length}</span>}
</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles["clearfix"]}></div>
        </div>
    );
};

export default Header;
