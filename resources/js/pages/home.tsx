import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Slider from '@/components/Slider';

export default function Home() {
    return (
        <>
            <Header />

            <div className="page-content">
                <Slider />
                <Projects />
                <Services />
            </div>

            <Footer />
        </>
    );
}
