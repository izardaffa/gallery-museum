import React from 'react'
import { Link } from 'react-router-dom'


const CtaSection = (props) => {



    return (
        <section className="wpo-cta-section">
            <div className="container">
                <div className="cta-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7 col-12">
                            <div className="cta-left">
                                <h2>Make your dream property.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-12">
                            <div className="cta-right">
                                <Link to="/about" className="theme-btn">GET IN TOUCH</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CtaSection;
