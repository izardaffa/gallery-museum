import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial from '../../images/testimonial.png'
import quote from '../../images/ft-icon/5.png'


const testimonials = [
    {
        id: '01',
        Des: "Lorem Ipsum is simply dummy the printing and typesetting industry has been the industry's standard text survived not only five centuries.",
        Title: 'Tanneis Akrasenko',
        Sub: "Business Man",
    },
    {
        id: '02',
        Des: "Lorem Ipsum is simply dummy the printing and typesetting industry has been the industry's standard text survived not only five centuries.",
        Title: 'Funky Dos',
        Sub: "Business Man",
    },
    {
        id: '03',
        Des: "Lorem Ipsum is simply dummy the printing and typesetting industry has been the industry's standard text survived not only five centuries.",
        Title: 'RockinIt',
        Sub: "Business Man",
    },
    {
        id: '04',
        Des: "Lorem Ipsum is simply dummy the printing and typesetting industry has been the industry's standard text survived not only five centuries.",
        Title: 'David Gray',
        Sub: "Business Man",
    }
]

const Testimonial = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
    };


    return (
        <div className={`section-padding ${props.tClass}`} >
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-slider">
                                <Slider {...settings}>
                                    {testimonials.map((testitem, titem) => (
                                        <div className="testimonial-text" key={titem}>
                                            <img src={quote} alt="" />
                                            <p>{testitem.Des}</p>
                                            <h3>{testitem.Title}</h3>
                                            <span>{testitem.Sub}</span>
                                        </div>
                                    ))
                                    }
                                </Slider>

                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-img">
                                <img src={testimonial} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Testimonial;







