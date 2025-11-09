import { Link } from '@inertiajs/react';
import React from 'react';

import { about, gallery, home } from '@/routes';
import logoLight from './../assets/images/logo-light.png';

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="site-footer footer-large footer-dark footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <Link href={home()}>
                                                <img
                                                    src={logoLight}
                                                    alt="Inteshape"
                                                />
                                            </Link>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Eum
                                            consequatur iusto molestias?
                                        </p>
                                        <ul className="social-icons sx-social-links">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com"
                                                    className="fa fa-facebook"
                                                    target="_blank"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com"
                                                    className="fa fa-twitter"
                                                    target="_blank"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com"
                                                    className="fa fa-instagram"
                                                    target="_blank"
                                                ></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">
                                            Useful links
                                        </h5>
                                        <ul>
                                            <li>
                                                <Link href={home()}>Home</Link>
                                            </li>
                                            <li>
                                                <Link href={gallery()}>
                                                    Gallery
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={about()}>
                                                    About
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* CONTACT US */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h5 className="widget-title">
                                            Contact Us
                                        </h5>
                                        <ul className="widget_address">
                                            <li>
                                                Kabupaten Kebumen, Jawa Tengah,
                                                Indonesia
                                            </li>
                                            <li>example@gmail.com</li>
                                            <li>(+298) 012-3456-789</li>
                                            <li>(+298) 146-6543-480</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <div className="sx-footer-bot-left text-center">
                                        <span className="copyrights-text">
                                            © {new Date().getFullYear()} Museum
                                            Gerabah Kebumen. Designed by{' '}
                                            <Link
                                                href="https://7xtheme.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none text-light fw-semibold"
                                            >
                                                Nusa Team
                                            </Link>
                                            .
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
