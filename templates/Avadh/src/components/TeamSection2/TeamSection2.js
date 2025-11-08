import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shape_title2 from '../../images/section-title-shape-2.png'
import Teams from "../../api/team";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
    },
    ]
};

const TeamSection2 = (props) => {

    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>OUR TALENT MEMBER</span>
                            <h2>Meet Our Experienced Team</h2>
                            <div className="shape-title">
                                <img src={shape_title2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-wrapper">
                    <div className="wpo-team-slider">
                        <Slider {...settings}>

                            {Teams.map((team, titem) => (
                                <div className="team-single" key={titem}>
                                    <div className="team-single-img">
                                        <img src={team.timg} alt="" />
                                    </div>
                                    <div className="team-single-text">
                                        <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                            <h2>{team.title}</h2>
                                        </Link>
                                        <span>{team.subtitle}</span>
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
export default TeamSection2;