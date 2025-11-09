import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Banner from '@/components/elements/Banner';
import React from 'react';

const GallerySingle: React.FC = () => {
    const hero = '/images/blog/default/thum1.jpg';

    return (
        <div className="page-content">
            <Header />

            {/* Banner component */}
            <Banner
                title="Galeri Artefak"
                pagename="Galeri"
                description="Detail artefak dan informasi singkat"
            />

            {/* Back button to gallery listing */}
            <div className="container mt-4">
                <a href="/gallery" className="site-button">
                    ← Kembali ke Galeri
                </a>
            </div>

            {/* Image + description only */}
            <div className="section-full p-t80 p-b50 inner-page-padding">
                <div className="container">
                    <div className="max-w900 mx-auto">
                        <div className="mb-6 text-center">
                            <img
                                src={hero}
                                alt="Artefak"
                                className="img-fluid rounded"
                            />
                        </div>

                        <div className="prose mx-auto text-gray-800">
                            <h3>Patung Ganesha dari Batu Andesit</h3>
                            <p>
                                Patung Ganesha ini berasal dari periode klasik
                                dan terbuat dari batu andesit berkualitas
                                tinggi. Patung ini menggambarkan sosok Dewa
                                Ganesha sebagai simbol kebijaksanaan,
                                pengetahuan, dan pelindung dari segala
                                rintangan. Ukiran pada bagian tubuh dan ornamen
                                di sekelilingnya menunjukkan keterampilan tinggi
                                para pemahat pada masa itu, dengan detail halus
                                yang mencerminkan kemajuan seni pahat klasik
                                Indonesia. Koleksi ini telah melalui proses
                                pemugaran yang hati-hati oleh tim ahli arkeologi
                                untuk memastikan keaslian dan ketahanan
                                materialnya. Kini, patung tersebut disimpan
                                dengan sistem perawatan khusus guna menjaga
                                nilai historis, spiritual, dan estetika yang
                                dimilikinya agar tetap lestari bagi generasi
                                mendatang.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GallerySingle;
