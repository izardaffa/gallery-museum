import React from 'react';
import { Link } from 'react-router-dom';
import About1 from '../../images/about.jpg';
import About3 from '../../images/about-left-shape.png';

const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <img src={About1} alt="" />
                            <div className="about-left-text">
                                <img src={About3} alt="" />
                                <h5>SINCE</h5>
                                <span>1998</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-right">
                            <div className="text">
                                <span>MISSION AND VISSION</span>
                                <h2>Break out of your routine with
                                    a global perspective.</h2>
                                <p>It seems that only fragments the original of remain texts
                                    used today specul that over the course time certain letters
                                    were various positions.
                                </p>
                                <ul>
                                    <li>Where To Invest In Real Estate.</li>
                                    <li>7 Pieces Of Advice To Newbies.</li>
                                    <li>OCutting Your Losses In Real Estate.</li>
                                    <li>50% Off All Organic Product</li>
                                </ul>
                                <Link onClick={ClickHandler} to='/about' className="theme-btn">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;