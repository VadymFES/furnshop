import React from "react";
import '../App.css';

const Footer = () => {
    return (
        <div>
            <section id="newsletter" className="newsletter">
                <div className="container">
                    <div className="hm-footer-details">
                        <div className="row">
                            <div className=" col-md-3 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <h4>Довідка</h4>
                                    </div>
                                    <div className="hm-foot-menu">
                                        <ul>
                                            <li><a href="/about">Про нас</a></li>
                                            <li><a href="//#">Контакти</a></li>
                                            <li><a href="//#">Новини</a></li>
                                            <li><a href="/">Каталог</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-3 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <h4>Аккаунт</h4>
                                    </div>
                                    <div className="hm-foot-menu">
                                        <ul>
                                            <li><a href="//#">Мій профіль</a></li>
                                            <li><a href="//#">Список бажань</a></li>
                                            <li><a href="//#">Історія покупок</a></li>
                                            <li><a href="/cart">Корзина</a></li>
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
                                            Підпишись щоб отримувати свіжі новини.
                                        </p>
                                    </div>
                                    <div className="hm-foot-email">
                                        <div className="foot-email-box">
                                            <input type="text" className="form-control" placeholder="Введіть Email тут...." />
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
                            &copy;Developed by <a href="https://www.linkedin.com/in/vadym-fesiuk-8930491ba/">Vadym Fesiuk</a>
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
    );
};

export default Footer;