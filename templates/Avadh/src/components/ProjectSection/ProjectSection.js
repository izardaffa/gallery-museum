import React from "react";
import { Link } from "react-router-dom";
import shape_title from "../../images/section-title-shape-2.png"
import Projects from "../../api/projects";
import Slider from "react-slick";



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1107,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };

    return (
        <section className="wpo-project-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="wpo-section-title">
                            <span>SUCCESSFUL PROJECT</span>
                            <h2>Check Our Most Recent project</h2>
                            <div className="shape-title">
                                <img src={shape_title} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="project-right">
                            <Link to="/project" onClick={ClickHandler} className="theme-btn">ALL PROJECT</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrapper">
                <div className="container-fluid">
                    <div className="row project-slider">
                        <Slider {...settings}>
                            {Projects.map((project, pitem) => (
                                <div className="col-lg-3" key={pitem}>
                                    <div className="project-single">
                                        <div className="project-single-img">
                                            <img src={project.pimg1} alt="" />
                                        </div>
                                        <div className="project-single-text">
                                            <span>{project.subtitle}</span>
                                            <Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>
                                                <h2>{project.title}</h2>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectSection;