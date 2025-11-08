
import React from "react";
import { Link } from "react-router-dom";
import Projects from "../../api/projects";
import title_shape from "../../images/section-title-shape-2.png"



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection3 = (props) => {
    return (
        <div className="wpo-project-area-s2 section-padding">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>SUCCESSFUL PROJECT</span>
                            <h2>Check Our Most Recent project</h2>
                            <div className="shape-title">
                                <img src={title_shape} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {Projects.map((projecr3, pitem) => (
                                            <div className="grid" key={pitem}>
                                                <div className="wpo-project-item">
                                                    <div className="wpo-project-img">
                                                        <img src={projecr3.pimg3} alt="" />
                                                        <div className="left-border"></div>
                                                        <div className="right-border"></div>
                                                    </div>
                                                    <div className="wpo-project-text">
                                                        <h2><Link onClick={ClickHandler} to={`/project-single/${projecr3.slug}`}>{projecr3.title3}</Link></h2>
                                                        <span>{projecr3.subtitle2}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection3;