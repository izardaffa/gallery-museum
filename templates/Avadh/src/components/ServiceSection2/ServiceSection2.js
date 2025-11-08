import React from "react";
import { Link } from 'react-router-dom'
import Services from "../../api/Services";
import shape from "../../images/scervice-shap-1.png"
import shape_title from "../../images/section-title-shape.png"

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = (props) => {





    return (
        <section className="wpo-service-section">
            <div className="shape-1">
                <img src={shape} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>WHY CHOOSE US?</span>
                            <h2>Get All Facilities In One Station</h2>
                            <div className="shape-title">
                                <img src={shape_title} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scervice-wrap">
                    <div className="row">
                        {Services.slice(0, 4).map((service, sitem) => (
                                <div className="col-lg-3 col-md-6 col-12" key={sitem}>
                                    <div className="scervice-item">
                                        <div className="scervice-item-img">
                                            <img src={service.icon} alt="" />
                                        </div>
                                        <div className="scervice-item-text">
                                            <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                <h2>{service.title}</h2>
                                            </Link>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                               
                            ))
                            }
                    </div>


                </div>
            </div>
        </section>
    );
}

export default ServiceSection;




