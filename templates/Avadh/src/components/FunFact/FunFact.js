
import React from 'react';
import CountUp from 'react-countup';

const FunFact = (props) => {

    return (
        <section className="wpo-fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={25} enableScrollSpy /></span></h3>
                                    <p>Years Of Experience</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={32} enableScrollSpy /></span></h3>
                                    <p>Expert Specialist</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={321} enableScrollSpy /></span>+</h3>
                                    <p>Successful Project</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={785} enableScrollSpy /></span>+</h3>
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg width="267.000000pt" height="151.000000pt" viewBox="0 0 267.000000 151.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,151.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M0 992 l0 -519 64 -27 c35 -15 147 -73 248 -128 100 -55 229 -123
                                        284 -150 400 -192 687 -167 1033 89 328 244 629 712 775 1202 l15 51 -1210 0
                                        -1209 0 0 -518z" />
                    </g>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="231.000000pt" height="249.000000pt" viewBox="0 0 231.000000 249.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,249.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path
                            d="M2258 2368 c-63 -77 -124 -180 -226 -383 -123 -244 -215 -385 -318 -488 -161 -161 -284 -222 -677 -337 -267 -78 -329 -101 -457 -166 -318 -162 -465 -424 -487 -866 l-6 -128 1111 0 1112 0 0 1205 c0 687 -4 1205 -9 1205 -5 0 -24 -19 -43 -42z" />
                    </g>
                </svg>
            </div>
        </section>
    )

}

export default FunFact;