import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnerSection from '../../components/PartnerSection/PartnerSection';

import Logo from '../../images/logo.svg'


const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Project'} pagesub={'Project'} />
            <ProjectSection />
            <Testimonial tClass={'wpo-testimonial-section'} />
            <PartnerSection />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ProjectPage;
