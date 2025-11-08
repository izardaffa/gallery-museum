import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero3 from '../../components/hero3/hero3';
import About2 from '../../components/about2/about2';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import PricingSection from '../../components/PricingSection/PricingSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import FunFact from '../../components/FunFact/FunFact';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

import Logo from '../../images/logo-2.svg'

const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} Logo={Logo} />
            <Hero3 />
            <About2 />
            <ProjectSection2 />
            <PricingSection />
            <FunFact />
            <TeamSection />
            <PartnerSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;