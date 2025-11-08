import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import FunFact from '../../components/FunFact/FunFact';
import PricingSection from '../../components/PricingSection/PricingSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

import Logo from '../../images/logo.svg'


const ProjectPage2 = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Project'} pagesub={'Project'} />
            <ProjectSection3 />
            <FunFact/>
            <PricingSection/>
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ProjectPage2;
