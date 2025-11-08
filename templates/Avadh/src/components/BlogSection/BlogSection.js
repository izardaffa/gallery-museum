import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";
import shape_title from "../../images/section-title-shape-2.png"

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };




    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>OUR LATEST NEWS</span>
                            <h2>Most Popular Post & Articles</h2>
                            <div className="shape-title">
                                <img src={shape_title} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-wrapper">
                    <div className="wpo-blog-slider">
                        <Slider {...settings}>
                            {blogs.map((blog, bitem) => (
                                <div className="blog-single" key={bitem}>
                                    <div className="images">
                                        <img src={blog.screens} alt="" />
                                        <div className="date">
                                            <h3>{blog.day}</h3>
                                            <span>{blog.month}</span>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <span>{blog.subtitle}</span>
                                        <h2>{blog.title}</h2>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.link}</Link>
                                    </div>
                                </div>
                            ))

                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;




