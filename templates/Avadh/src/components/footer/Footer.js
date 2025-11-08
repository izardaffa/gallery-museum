import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-2.svg'
import Services from '../../api/Services';

// images
import instragram1 from '../../images/instragram/1.jpg'
import instragram2 from '../../images/instragram/2.jpg'
import instragram3 from '../../images/instragram/3.jpg'
import instragram4 from '../../images/instragram/4.jpg'
import instragram5 from '../../images/instragram/5.jpg'
import instragram6 from '../../images/instragram/6.jpg'

const instragram = [
    {
        id: '1',
        img: instragram1,
    },
    {
        id: '2',
        img: instragram2,
    },
    {
        id: '3',
        img: instragram3,
    },
    {
        id: '4',
        img: instragram4,
    },
    {
        id: '5',
        img: instragram5,
    },
    {
        id: '6',
        img: instragram6,
    }
]

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className={`wpo-upper-footer ${props.ftClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <div className="logo">
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Viverra laoreet ultrices
                                    donec placerat commodo elementum justo, consequat.</p>
                                <ul>
                                    <li>
                                        <Link to='/' onClick={ClickHandler}>
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' onClick={ClickHandler}>
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' onClick={ClickHandler}>
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' onClick={ClickHandler}>
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-maps-and-flags"></i>68D, Belsion Town 2365 <br /> Fna
                                            city, LH 3656, USA</li>
                                        <li><i className="fi flaticon-phone-call"></i>+ 8 (123) 123 456 789 <br />
                                            + 8 (123) 123 456 789</li>
                                        <li><i className="fi flaticon-email"></i>avadh@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Our Gellery</h3>
                                </div>
                                <ul className="d-flex">
                                    {instragram.map((insta, iitem) => (
                                        <li key={iitem}>
                                            <img src={insta.img} alt="" />
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <ul>
                                <li>&copy; 2024 avadh Template. Design By <Link to='/' onClick={ClickHandler}>wpOceans</Link>. All Rights
                                    Reserved.</li>
                                <li><Link to='/' onClick={ClickHandler}>Terms of use |</Link>
                                    <Link to='/' onClick={ClickHandler}>Privacy Environmental Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;






