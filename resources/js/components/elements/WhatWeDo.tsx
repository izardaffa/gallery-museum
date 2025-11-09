import React from 'react';

import bg2 from './../../assets/images/background/bg-2.jpg';
import bg5 from './../../assets/images/background/bg-5.png';
import crossLine2 from './../../assets/images/background/cross-line2.png';

import pic1 from './../../assets/images/our-team/pic1.jpg';
import pic2 from './../../assets/images/our-team/pic2.jpg';
import pic3 from './../../assets/images/our-team/pic3.jpg';

var bgimg1 = bg5;
var bgimg2 = bg2;
var bgimg3 = crossLine2;

class WhatWeDo extends React.Component {
    render() {
        return (
            <>
                <div
                    className="section-full mobile-page-padding p-t80 p-b30 overflow-hide bg-white bg-repeat"
                    style={{ backgroundImage: 'url(' + bgimg1 + ')' }}
                >
                    <div className="right-half-bg-image-outer container">
                        <div
                            className="right-half-bg-image bg-parallax bg-fixed bg-top-right"
                            data-stellar-background-ratio={0}
                            style={{ backgroundImage: 'url(' + bgimg2 + ')' }}
                        />
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div
                                    className="sx-separator bg-moving bg-white bg-repeat-x"
                                    style={{
                                        backgroundImage: 'url(' + bgimg3 + ')',
                                    }}
                                >
                                    <h3 className="sep-line-one">Tim Kami</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row number-block-one-outer justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={pic1} alt="" />
                                        <div className="figcaption p-a20 bg-white text-center">
                                            <h4 className="m-a0">
                                                Slamet Riyanto
                                            </h4>
                                        </div>
                                        <div className="figcaption-number sx-text-primary animate-in-to-top-content text-center">
                                            <span>01</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={pic2} alt="" />
                                        <div className="figcaption p-a20 bg-white text-center">
                                            <h4 className="m-a0">
                                                Dewi Lestari
                                            </h4>
                                        </div>
                                        <div className="figcaption-number sx-text-primary animate-in-to-top-content text-center">
                                            <span>02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={pic3} alt="" />
                                        <div className="figcaption p-a20 bg-white text-center">
                                            <h4 className="m-a0">
                                                Agus Rahmawati
                                            </h4>
                                        </div>
                                        <div className="figcaption-number sx-text-primary animate-in-to-top-content text-center">
                                            <span>03</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WhatWeDo;
