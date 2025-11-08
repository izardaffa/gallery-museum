import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTopbar = (props) => {
    return (
        <div className={`topbar ${props.topbarClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><span>Email:</span>avadh@gmail.com</li>
                                <li><span>Phone:</span>+ 8 (123) 123 456 789</li>
                                <li><span>Location:</span> Fna city, LH 3656, USA</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link to="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderTopbar;

