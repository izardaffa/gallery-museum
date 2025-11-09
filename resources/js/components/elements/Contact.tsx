import { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <>
                {/* SECTION CONTENTG START */}
                <div className="section-full p-tb80 inner-page-padding">
                    {/* LOCATION BLOCK*/}
                    <div className="container">
                        {/* GOOGLE MAP & CONTACT FORM */}
                        <div className="section-content">
                            {/* CONTACT FORM*/}
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <form
                                        className="contact-form cons-contact-form bg-gray p-a30"
                                        method="post"
                                        action="#"
                                    >
                                        <div className="contact-one">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="sx-separator-outer separator-left">
                                                    <div
                                                        className="sx-separator bg-moving bg-white bg-repeat-x"
                                                        style={{
                                                            backgroundImage:
                                                                'url(images/background/cross-line2.png)',
                                                        }}
                                                    >
                                                        <h3 className="sep-line-one">
                                                            Contact
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="sx-icon-box-wraper left p-b30">
                                                <div className="icon-xs">
                                                    <i className="fa fa-phone" />
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0">
                                                        Phone number
                                                    </h5>
                                                    <p>(123) 456-78910</p>
                                                </div>
                                            </div>
                                            <div className="sx-icon-box-wraper left p-b30">
                                                <div className="icon-xs">
                                                    <i className="fa fa-envelope" />
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0">
                                                        Email address
                                                    </h5>
                                                    <p>example@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="sx-icon-box-wraper left">
                                                <div className="icon-xs">
                                                    <i className="fa fa-map-marker" />
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="m-t0">
                                                        Address info
                                                    </h5>
                                                    <p>
                                                        Kabupaten Kebumen, Jawa
                                                        Tengah, Indonesia
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* ... */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* SECTION CONTENT END */}
            </>
        );
    }
}

export default Contact;
