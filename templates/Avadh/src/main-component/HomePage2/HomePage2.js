import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/hero2/Hero2';
import About2 from '../../components/about2/about2';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection2 from '../../components/TeamSection2/TeamSection2';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo}/>
            <Hero2 />
            <About2 />
            <ServiceSection2 />
            <CtaSection />
            <TeamSection2 />
            <ProjectSection />
            <Testimonial tClass={'wpo-testimonial-section'} />
            <PartnerSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;