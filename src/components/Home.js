import React from "react";
import ProductCarousel from "./ProductCarousel.js"

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* carousel start */}
                <ProductCarousel />
                {/* carousel end */}
                {/* NAVBAR START */}
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
                                            <a href="/#"><span className="lnr lnr-user"></span></a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="/#" className="dropdown-toggle" data-toggle="dropdown" >
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
                                    <a className="logo" href="index.html">
                                        <img src="logo-main.png" alt="Dekop" style={{ height: '60px', width: '120px' }} />
                                    </a>
                                </div>
                                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                        <li className=" scroll active"><a href="/#home">Головна</a></li>
                                        <li className="scroll"><a href="/#new-arrivals">Новинки</a></li>
                                        <li className="scroll"><a href="/#catalog">Каталог</a></li>
                                        <li className="scroll"><a href="/#feature">Доставка</a></li>
                                        <li className="scroll"><a href="/#blog">Про нас</a></li>
                                        <li className="scroll"><a href="/#newsletter">Контакти</a></li>
                                    </ul>
                                </div>
                                {/* NAVBAR LOGO END */}
                            </div>
                        </nav>

                    </div>
                    <div className="clearfix"></div>

                </div>
                {/* NAVBAR END */}

                <section id="new-arrivals" className="new-arrivals">
                    <div className="container">
                        <div className="section-header">
                            <h2>new arrivals</h2>
                        </div>
                        <div className="new-arrivals-content">
                            <div className="row">
                                <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals1.png" alt="new-arrivalss" />
                                            <div className="single-new-arrival-bg-overlay"></div>
                                            <div className="sale bg-1">
                                                <p>sale</p>
                                            </div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <span className="lnr lnr-cart"></span>
                                                    <a href="//#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart"></span>
                                                    <span className="lnr lnr-frame-expand"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="//#">wooden chair</a></h4>
                                        <p className="arrival-product-price">$65.00</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals2.png" alt="new-arrivalss" />
                                            <div className="single-new-arrival-bg-overlay"></div>
                                            <div className="sale bg-2">
                                                <p>sale</p>
                                            </div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <span className="lnr lnr-cart"></span>
                                                    <a href="//#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart"></span>
                                                    <span className="lnr lnr-frame-expand"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="//#">single armchair</a></h4>
                                        <p className="arrival-product-price">$80.00</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals3.png" alt="new-arrivalss" />
                                            <div className="single-new-arrival-bg-overlay"></div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <span className="lnr lnr-cart"></span>
                                                    <a href="//#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart"></span>
                                                    <span className="lnr lnr-frame-expand"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="//#">wooden armchair</a></h4>
                                        <p className="arrival-product-price">$40.00</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals4.png" alt="new-arrivalss" />
                                            <div className="single-new-arrival-bg-overlay"></div>
                                            <div className="sale bg-1">
                                                <p>sale</p>
                                            </div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <span className="lnr lnr-cart"></span>
                                                    <a href="//#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart"></span>
                                                    <span className="lnr lnr-frame-expand"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="//#">stylish chair</a></h4>
                                        <p className="arrival-product-price">$100.00</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals5.png" alt="new-arrivalss" />
                                            <div className="single-new-arrival-bg-overlay"></div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <span className="lnr lnr-cart"></span>
                                                    <a href="//#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart"></span>
                                                    <span className="lnr lnr-frame-expand"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="//#">modern chair</a></h4>
                                        <p className="arrival-product-price">$120.00</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals6.png" alt="new-arrivalss" />
                                            <div className="single-new-arrival-bg-overlay"></div>
                                            <div className="sale bg-1">
                                                <p>sale</p>
                                            </div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <span className="lnr lnr-cart"></span>
                                                    <a href="//#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart"></span>
                                                    <span className="lnr lnr-frame-expand"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="//#">mapple wood dinning table</a></h4>
                                        <p className="arrival-product-price">$140.00</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals7.png" alt="new-arrivalss" />
                                            <div className="single-new-arrival-bg-overlay"></div>
                                            <div className="sale bg-2">
                                                <p>sale</p>
                                            </div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <span className="lnr lnr-cart"></span>
                                                    <a href="//#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart"></span>
                                                    <span className="lnr lnr-frame-expand"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="//#">arm chair</a></h4>
                                        <p className="arrival-product-price">$90.00</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals8.png" alt="new-arrivalss" />
                                            <div className="single-new-arrival-bg-overlay"></div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <span className="lnr lnr-cart"></span>
                                                    <a href="//#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart"></span>
                                                    <span className="lnr lnr-frame-expand"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="//#">wooden bed</a></h4>
                                        <p className="arrival-product-price">$140.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="sofa-collection">
                    <div className="owl-carousel owl-theme" id="collection-carousel">
                        <div className="sofa-collection collectionbg1">
                            <div className="container">
                                <div className="sofa-collection-txt">
                                    <h2>unlimited sofa collection</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="sofa-collection-price">
                                        <h4>strting from <span>$ 199</span></h4>
                                    </div>
                                    <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick={window.location.href = '/#blof'}>
                                        view more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="sofa-collection collectionbg2">
                            <div className="container">
                                <div className="sofa-collection-txt">
                                    <h2>unlimited dainning table collection</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="sofa-collection-price">
                                        <h4>strting from <span>$ 299</span></h4>
                                    </div>
                                    <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick={window.location.href = '/#blof'}>
                                        view more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="feature" className="feature">
                    <div className="container">
                        <div className="section-header">
                            <h2>featured products</h2>
                        </div>
                        <div className="feature-content">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="single-feature">
                                        <img src="assets/images/features/f1.jpg" alt="feature" />
                                        <div className="single-feature-txt text-center">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                                                <span className="feature-review">(45 review)</span>
                                            </p>
                                            <h3><a href="//#">designed sofa</a></h3>
                                            <h5>$160.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="single-feature">
                                        <img src="assets/images/features/f2.jpg" alt="feature" />
                                        <div className="single-feature-txt text-center">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                                                <span className="feature-review">(45 review)</span>
                                            </p>
                                            <h3><a href="//#">dinning table </a></h3>
                                            <h5>$200.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="single-feature">
                                        <img src="assets/images/features/f3.jpg" alt="feature" />
                                        <div className="single-feature-txt text-center">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                                                <span className="feature-review">(45 review)</span>
                                            </p>
                                            <h3><a href="//#">chair and table</a></h3>
                                            <h5>$100.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="single-feature">
                                        <img src="assets/images/features/f4.jpg" alt="feature" />
                                        <div className="single-feature-txt text-center">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                                                <span className="feature-review">(45 review)</span>
                                            </p>
                                            <h3><a href="//#">modern arm chair</a></h3>
                                            <h5>$299.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>



                <section id="blog" className="blog">
                    <div className="container">
                        <div className="section-header">
                            <h2>latest blog</h2>
                        </div>
                        <div className="blog-content">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="single-blog">
                                        <div className="single-blog-img">
                                            <img src="assets/images/blog/b1.jpg" alt="blog" />
                                            <div className="single-blog-img-overlay"></div>
                                        </div>
                                        <div className="single-blog-txt">
                                            <h2><a href="//#">Why Brands are Looking at Local Language</a></h2>
                                            <h3>By <a href="//#">Robert Norby</a> / 18th March 2018</h3>
                                            <p>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-4">
                                    <div className="single-blog">
                                        <div className="single-blog-img">
                                            <img src="assets/images/blog/b2.jpg" alt="blog" />
                                            <div className="single-blog-img-overlay"></div>
                                        </div>
                                        <div className="single-blog-txt">
                                            <h2><a href="//#">Why Brands are Looking at Local Language</a></h2>
                                            <h3>By <a href="//#">Robert Norby</a> / 18th March 2018</h3>
                                            <p>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="single-blog">
                                        <div className="single-blog-img">
                                            <img src="assets/images/blog/b3.jpg" alt="blog " />
                                            <div className="single-blog-img-overlay"></div>
                                        </div>
                                        <div className="single-blog-txt">
                                            <h2><a href="//#">Why Brands are Looking at Local Language</a></h2>
                                            <h3>By <a href="//#">Robert Norby</a> / 18th March 2018</h3>
                                            <p>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>





                <section id="newsletter" className="newsletter">
                    <div className="container">
                        <div className="hm-footer-details">
                            <div className="row">
                                <div className=" col-md-3 col-sm-6 col-xs-12">
                                    <div className="hm-footer-widget">
                                        <div className="hm-foot-title">
                                            <h4>information</h4>
                                        </div>
                                        <div className="hm-foot-menu">
                                            <ul>
                                                <li><a href="//#">about us</a></li>
                                                <li><a href="//#">contact us</a></li>
                                                <li><a href="//#">news</a></li>
                                                <li><a href="//#">store</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-3 col-sm-6 col-xs-12">
                                    <div className="hm-footer-widget">
                                        <div className="hm-foot-title">
                                            <h4>collections</h4>
                                        </div>
                                        <div className="hm-foot-menu">
                                            <ul>
                                                <li><a href="//#">wooden chair</a></li>
                                                <li><a href="//#">royal cloth sofa</a></li>
                                                <li><a href="//#">accent chair</a></li>
                                                <li><a href="//#">bed</a></li>
                                                <li><a href="//#">hanging lamp</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-3 col-sm-6 col-xs-12">
                                    <div className="hm-footer-widget">
                                        <div className="hm-foot-title">
                                            <h4>my accounts</h4>
                                        </div>
                                        <div className="hm-foot-menu">
                                            <ul>
                                                <li><a href="//#">my account</a></li>
                                                <li><a href="//#">wishlist</a></li>
                                                <li><a href="//#">Community</a></li>
                                                <li><a href="//#">order history</a></li>
                                                <li><a href="//#">my cart</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-3 col-sm-6  col-xs-12">
                                    <div className="hm-footer-widget">
                                        <div className="hm-foot-title">
                                            <h4>newsletter</h4>
                                        </div>
                                        <div className="hm-foot-para">
                                            <p>
                                                Subscribe  to get latest news,update and information.
                                            </p>
                                        </div>
                                        <div className="hm-foot-email">
                                            <div className="foot-email-box">
                                                <input type="text" className="form-control" placeholder="Enter Email Here...." />
                                            </div>
                                            <div className="foot-email-subscribe">
                                                <span><i className="fa fa-location-arrow"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>


                <footer id="footer" className="footer">
                    <div className="container">
                        <div className="hm-footer-copyright text-center">
                            <div className="footer-social">
                                <a href="//#"><i className="fa fa-facebook"></i></a>
                                <a href="//#"><i className="fa fa-instagram"></i></a>
                            </div>
                            <p>
                                &copy;copyright. designed and developed by <a href="https://www.linkedin.com/in/vadym-fesiuk-8930491ba/">Vadym Fesiuk</a>
                            </p>
                        </div>
                    </div>

                    <div id="scroll-Top">
                        <div className="return-to-top">
                            <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                        </div>

                    </div>

                </footer>

            </div>






        )
    };
}

export default Home;