import { Link } from '@inertiajs/react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Component } from 'react';
import crossLine2 from './../assets/images/background/cross-line2.png';
import service1 from './../assets/images/services/service-projects/1.jpg';
import service2 from './../assets/images/services/service-projects/2.jpg';
import service3 from './../assets/images/services/service-projects/3.jpg';
import service4 from './../assets/images/services/service-projects/4.jpg';

const services = [
    {
        count: '01',
        title: 'Ruang Pengalaman',
        flaticon: 'flaticon-sketch',
        image: service1,
    },
    {
        count: '02',
        title: 'Pesona Gerabah Kami',
        flaticon: 'flaticon-stairs',
        image: service2,
    },
    {
        count: '03',
        title: 'Ruang dan Cerita',
        flaticon: 'flaticon-window',
        image: service3,
    },
    {
        count: '04',
        title: 'Eksplorasi Budaya',
        flaticon: 'flaticon-skyline',
        image: service4,
    },
    // {
    //     count: '05',
    //     title: 'Furniture',
    //     flaticon: 'flaticon-bed',
    //     image: service5,
    // },
    // {
    //     count: '06',
    //     title: 'Decoration',
    //     flaticon: 'flaticon-door',
    //     image: service7,
    // },
];

var bgimg1 = crossLine2;

class Services extends Component {
    render() {
        const options = {
            loop: true,
            autoPlay: false,
            center: false,
            margin: 0,
            nav: true,
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            },
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 bg-change-section bg-white">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div
                                    className="sx-separator bg-moving bg-white bg-repeat-x"
                                    style={{
                                        backgroundImage: 'url(' + bgimg1 + ')',
                                    }}
                                >
                                    <h3 className="sep-line-one">
                                        Explore the Museum
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                    </div>
                    {/* <ReactOwlCarousel
                        className="owl-carousel service-slider owl-btn-vertical-center"
                        {...options}
                    > */}
                    <div className="w-100">
                        <div className="row">
                            {services.map((item, index) => (
                                <div className="col-lg-3 col px-0" key={index}>
                                    <div
                                        className="bgcall-block d-flex justify-content-center align-content-end overlay-wraper flex-wrap bg-cover"
                                        style={{
                                            backgroundImage:
                                                'url(' + item.image + ')',
                                        }}
                                    >
                                        <div className="overlay-main opacity-05 bg-black" />
                                        <div className="bg-content-mid-outer">
                                            <div className="bg-content-mid">
                                                <div className="sx-icon-box-wraper center text-white">
                                                    <div className="icon-lg m-b15">
                                                        <span className="icon-cell">
                                                            <i
                                                                className={
                                                                    item.flaticon
                                                                }
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="sx-tilte">
                                                            {' '}
                                                            <Link
                                                                href={
                                                                    '/services-detail'
                                                                }
                                                                className="sx-text-white"
                                                            >
                                                                {' '}
                                                                {item.title}
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <span className="bgcall-block-number">
                                                    {item.count}
                                                </span>
                                                <div className="bg-overlay" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* </ReactOwlCarousel> */}
                </div>
            </>
        );
    }
}

export default Services;
