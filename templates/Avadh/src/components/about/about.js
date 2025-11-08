import React from 'react'
import { Link } from 'react-router-dom'
import abImg from '../../images/about.jpg'
import VideoModal from '../ModalVideo/VideoModal'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="wpo-about-area-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={abImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About Us</span>
                                <h2>We Offer You Profesional Interior Design</h2>
                            </div>
                            <h5>Over 25 years Liarch helping investors building their drea & business goals go to the
                                perfection</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac enim aliquam feugiat
                                ullamcorper. Id risus mattis neque, ullamcorper. Sed sit commodo vestibulum cras in
                                cras. Nec proin scelerisque quis nisl vitae, egestas non. Fringilla auctor.</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="theme-btn">Discover More</Link >
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;


