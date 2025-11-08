import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero4 from '../../components/hero4/hero4';
import About from '../../components/about/about';
import TeamSection from '../../components/TeamSection/TeamSection';
import FunFact from '../../components/FunFact/FunFact';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import Testimonial from '../../components/Testimonial/Testimonial';

const HomePage4 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <Hero4 />
            <About />
            <ProjectSection3 /> 
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
export default HomePage4;