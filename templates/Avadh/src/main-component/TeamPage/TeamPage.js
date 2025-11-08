import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

import Logo from '../../images/logo.svg'


const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Team'} pagesub={'Team'} />
            <TeamSection/>
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ProjectPage;
