import React from "react";
import { Link } from 'react-router-dom'


const Hero3 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="hero-content">
                            <div className="slide-title">
                                <h2> Meetings Aren't A Hassle Anymore</h2>
                            </div>
                            <div className="clearfix"></div>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;