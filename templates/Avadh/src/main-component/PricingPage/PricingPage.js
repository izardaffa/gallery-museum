import React, {Fragment} from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import PricingSection from "../../components/PricingSection/PricingSection";

import Logo from '../../images/logo.svg'



const PricingPage = (props) => {
    return(
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Pricing Plan'} pagesub={'Pricing'} />
            <PricingSection />
            <Footer />
            <Scrollbar />
        </Fragment>
        
    )
    
}

export default PricingPage;