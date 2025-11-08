import React from "react";
import { Link } from "react-router-dom";
import shape_title2 from '../../images/section-title-shape-2.png'
import Teams from "../../api/team";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {

    return (



        <section className="wpo-team-section-s2 section-padding">
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
                    <div className="row">
                        {Teams.slice(0, 4).map((team, titem) => (
                            <div className="col-lg-3 col-md-6 col-12" key={titem}>
                                <div className="team-single">
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
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>


    )
}
export default TeamSection;