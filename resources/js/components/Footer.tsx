import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="site-footer footer-large footer-dark footer-wide">
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <div className="sx-footer-bot-left text-center">
                                        <span className="copyrights-text">
                                            © {new Date().getFullYear()} Your
                                            Company. Designed by{' '}
                                            <a
                                                href="https://7xtheme.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none text-light fw-semibold"
                                            >
                                                Nusa Team
                                            </a>
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
