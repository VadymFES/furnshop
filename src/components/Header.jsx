import React from "react";
import '../App.css';
import logo from '../logo.png'

const Header = () => {
    return (
                    
                <div className="top-area">
                    <div className="header-area">

                        <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

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
                                            <a href="/#"><span className="lnr lnr-magnifier"></span></a>
                                        </li>
                                        <li className="profile">
                                            <a href="/profile"><span className="lnr lnr-user"></span></a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="/cart" className="dropdown-toggle" data-toggle="dropdown" >
                                                <span className="lnr lnr-cart"></span>
                                                <span className="badge badge-bg-1">2</span>
                                            </a>
                                            <ul className="dropdown-menu cart-list s-cate">
                                                <li className="single-cart-list">
                                                    <div className="cart-close">
                                                        <span className="lnr lnr-cross"></span>
                                                    </div>
                                                </li>
                                                <li className="total">
                                                    <span>Total: $0.00</span>
                                                    <button className="btn-cart pull-right" onclick="window.location.href='/#'">view cart</button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* NAVBAR LOGO START */}
                                <div className="navbar-header">
                                    <a className="logo" href="/">
                                        <img src={logo} alt="Dekop" style={{ height: '60px', width: '120px' }} />
                                    </a>
                                </div>
                                {/* NAVBAR LOGO END */}
                                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                        <li className=" scroll active"><a href="/#home">Головна</a></li>
                                        <li className="scroll"><a href="/#catalog">Каталог</a></li>
                                        <li className="scroll"><a href="/#delivery">Доставка</a></li>
                                        <li className="scroll"><a href="/#about">Про нас</a></li>
                                        <li className="scroll"><a href="/#contact">Контакти</a></li>
                                    </ul>
                                </div>
                               
                            </div>
                        </nav>

                    </div>
                    <div className="clearfix"></div>

                </div>
);
};
export default Header;