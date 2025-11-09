import Contact from '@/components/elements/Contact';
import { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutSection from '../components/elements/About';
import Banner from '../components/elements/Banner';
import WhatWeDo from '../components/elements/WhatWeDo';

class About extends Component {
    componentDidMount() {
        const loadScript = (src: string): Promise<void> => {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            });
        };

        loadScript('./assets/js/custom.js');
    }
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner
                        title="Museum Gerabah Kebumen"
                        pagename="About us"
                        description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
                    />
                    <AboutSection />
                    <WhatWeDo />
                    <Contact />
                </div>

                <Footer />
            </>
        );
    }
}

export default About;
