import React from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../../images/slider/1.jpg'
import hero2 from '../../images/slider/3.jpg'
import hero3 from '../../images/slider/2.jpg'


const Hero = () => {
    const sliderBgSetting = () => {
        const slides = document.querySelectorAll('.hero-slider .slide');

        slides.forEach(slide => {
            const img = slide.querySelector('.slider-bg').getAttribute('src');
            slide.style.backgroundImage = `url(${img})`;
            slide.style.backgroundSize = 'cover';
            slide.style.backgroundPosition = 'center center';
        });
    };

   
    return (
        <section className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
                <Slider {...sliderBgSetting}> 
                    <div className="slide">
                        <div className="slide-bg">
                            <img src={hero1} alt=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-7 col-md-8 col-sm-12 slide-caption">
                                    <div className="hero-slider-content">
                                        <div className="slide-title">
                                            <h2>Get awesome
                                                property from
                                                avadh.</h2>
                                        </div>
                                        <div className="slide-subtitle">
                                            <p>It seems that only fragments the original text remain the texts
                                                also explain can now find slightly versions.</p>
                                        </div>
                                        <div className="btns">
                                            <Link to="/project-single" className="theme-btn">FIND PROJECT<i
                                                className="fi "></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-right-text">
                                    <div className="grid">
                                        <div className="info">
                                            <h3>
                                                58
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <h4>Years
                                                Experience</h4>
                                            <span>It seems that only fragments
                                                original text remain.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="slide-bg">
                            <img src={hero2} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-7 col-md-8 col-sm-12 slide-caption">
                                    <div className="hero-slider-content">
                                        <div className="slide-title">
                                            <h2>Balkon Architecture Studio</h2>
                                        </div>
                                        <div className="slide-subtitle">
                                            <p>It seems that only fragments the original text remain the texts
                                                also explain can now find slightly versions.</p>
                                        </div>
                                        <div className="btns">
                                            <Link to="/project-single" className="theme-btn">FIND PROJECT</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-right-text">
                                    <div className="grid">
                                        <div className="info">
                                            <h3>
                                                58
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <h4>Years
                                                Experience</h4>
                                            <span>It seems that only fragments
                                                original text remain.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="slide-bg">
                            <img src={hero3} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-7 col-md-8 col-sm-12 slide-caption">
                                    <div className="hero-slider-content">
                                        <div className="slide-title">
                                            <h2>Creating Your Future With Affection</h2>
                                        </div>
                                        <div className="slide-subtitle">
                                            <p>It seems that only fragments the original text remain the texts
                                                also explain can now find slightly versions.</p>
                                        </div>
                                        <div className="btns">
                                            <Link to="/project-single" className="theme-btn">FIND PROJECT</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-right-text">
                                    <div className="grid">
                                        <div className="info">
                                            <h3>
                                                58
                                            </h3>
                                        </div>
                                        <div className="text">
                                            <h4>Years
                                                Experience</h4>
                                            <span>It seems that only fragments
                                                original text remain.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Hero;




