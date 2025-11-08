import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import pimg1 from '../../images/partners/1.png'
import pimg2 from '../../images/partners/2.png'
import pimg3 from '../../images/partners/3.png'
import pimg4 from '../../images/partners/4.png'
import pimg5 from '../../images/partners/5.png'
import pimg6 from '../../images/partners/6.png'


const partners = [
    {
        id: "01",
        pimg: pimg1,
    },
    {
        id: "02",
        pimg: pimg2,
    },
    {
        id: "03",
        pimg: pimg3,
    },
    {
        id: "04",
        pimg: pimg4,
    },
    {
        id: "05",
        pimg: pimg5,
    },
    {
        id: "06",
        pimg: pimg6,
    },
    {
        id: "07",
        pimg: pimg2,
    }
]

const PartnerSection = (props) => {


    const settings = {
        dots: false,
        arrows: false,
        loop: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };



    return (
        <section className="wpo-partners-section  section-padding">
            <h2 className="hidden">partner</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider ">

                            <Slider {...settings}>
                                {partners.map((partner, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <img src={partner.pimg} alt="" />
                                    </div>
                                ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PartnerSection;
