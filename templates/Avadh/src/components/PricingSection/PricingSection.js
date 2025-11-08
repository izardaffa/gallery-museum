import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

import title_shape from '../../images/section-title-shape-2.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const PricingSection = () => {
    const [plan] = useState([
        {
            id: '01',
            name: 'Basic',
            price: 120,
            descriptionL: 'Interior represents the way to feel happy and complete.',
            features: ['General living space advices', 'Interior design advices', 'Complete home redesign', 'Modern interior planning', 'Kitchen design']
        },
        {
            id: '02',
            name: 'Premium',
            price: 210,
            descriptionL: 'Interior represents the way to feel happy and complete.',
            features: ['General living space advices', 'Interior design advices', 'Complete home redesign', 'Modern interior planning', 'Kitchen design']
        },
        {
            id: '03',
            name: 'Advanced',
            price: 373,
            descriptionL: 'Interior represents the way to feel happy and complete.',
            features: ['General living space advices', 'Interior design advices', 'Complete home redesign', 'Modern interior planning', 'Kitchen design']
        }
    ])

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="wpo-section-title">
                        <span>Pricing Plan?</span>
                        <h2>Choose Your Optimal Plan</h2>
                        <div className="shape-title">
                            <img src={title_shape} alt="" />
                        </div>
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {plan.map((palns, pritem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pritem}>
                                <div className="wpo-pricing-item">
                                    <div className="wpo-pricing-top">
                                        <div className="pricing-thumb">
                                            <span>{palns.name}</span>
                                        </div>
                                        <div className="wpo-pricing-text">
                                            <h2>${palns.price}<span>/per m²</span></h2>
                                            <p>{palns.descriptionL}</p>
                                        </div>
                                    </div>
                                    <div className="wpo-pricing-bottom">
                                        <div className="wpo-pricing-bottom-text">
                                            <ul>
                                                {palns.features.map((feature, featureitem) => (
                                                    <li key={featureitem}>{feature}</li>
                                                ))
                                                }
                                            </ul>
                                            <Link to="/pricing" onClick={ClickHandler}>CHOOSE PLAN</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PricingSection;