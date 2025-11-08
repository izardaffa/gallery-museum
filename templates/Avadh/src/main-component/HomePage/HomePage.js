import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} Logo={Logo} />
            <Hero />
            <About />
            <ServiceSection />
            <CtaSection />
            <TeamSection />
            <FunFact />
            <Testimonial tClass={'wpo-testimonial-section-s2'} />
            <PartnerSection />
            <BlogSection />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;