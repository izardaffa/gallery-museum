import React from "react";
import { Link } from "react-router-dom";
import Projects from "../../api/projects";

import projectImg from "../../images/scervice-shap-1.png"
import title from "../../images/section-title-shape.png"

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection2 = (props) => {
    return (
        <section className="wpo-service-section-s3 section-padding">
            <div className="shape-1">
                <img src={projectImg} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>WHY CHOOSE US?</span>
                            <h2>Get All Facilities In One Station</h2>
                            <div className="shape-title">
                                <img src={title} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scervice-wrap">
                    <div className="row">
                        {Projects.map((project, pitem) => (
                            <div className="col-lg-3 col-md-6 col-12" key={pitem}>
                                <div className="scervice-item">
                                    <div className="scervice-item-img">
                                        <img src={project.pimg2} alt="" />
                                        <div className="content">
                                            <h2><Link to={`/project-single/${project.slug}`} onClick={ClickHandler}>{project.title2}</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection2;