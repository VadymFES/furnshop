import React from "react";
import MainBanner from "../components/MainBanner.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ShopingSection from "../components/ShopingSection.js";

class Home extends React.Component {
    render() {
        return (
            <div>

                <Header />
                <MainBanner />


                <ShopingSection />


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



                <Footer />

                

            </div>






        )
    };
}

export default Home;