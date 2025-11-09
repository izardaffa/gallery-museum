import { Link } from '@inertiajs/react';
import { Component } from 'react';

import crossLine from './../assets/images/background/cross-line.png';
import crossLine2 from './../assets/images/background/cross-line2.png';
import pic1 from './../assets/images/projects/portrait/pic1.jpg';
import pic2 from './../assets/images/projects/portrait/pic2.jpg';
import pic3 from './../assets/images/projects/portrait/pic3.jpg';
import pic4 from './../assets/images/projects/portrait/pic4.jpg';
import pic5 from './../assets/images/projects/portrait/pic5.jpg';
import pic6 from './../assets/images/projects/portrait/pic6.jpg';
// import pic7 from './../assets/images/projects/portrait/pic7.jpg';
// import pic8 from './../assets/images/projects/portrait/pic8.jpg';
// import pic9 from './../assets/images/projects/portrait/pic9.jpg';

const filters = [
    { label: 'Architecture', filter: '.cat-1' },
    { label: 'Decore', filter: '.cat-2' },
    { label: 'Outdoor', filter: '.cat-3' },
    { label: 'Interiors', filter: '.cat-4' },
    { label: 'Residential', filter: '.cat-5' },
];

const projects = [
    {
        image: pic1,
        title: 'Interior Work Avroko',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-1',
    },
    {
        image: pic2,
        title: 'Vilters',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-2',
    },
    {
        image: pic3,
        title: 'Industrial Design',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-3',
    },
    {
        image: pic4,
        title: 'House Bluprint',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4',
    },
    {
        image: pic5,
        title: 'Modern Bathroom',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-5',
    },
    {
        image: pic6,
        title: 'Bellevue Project',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4',
    },
    // {
    //     image: pic7,
    //     title: 'Qatar Pavilion',
    //     address: 'Muscat, Sultanate of Oman',
    //     filter: 'cat-3',
    // },
    // {
    //     image: pic8,
    //     title: 'Museum',
    //     address: 'Muscat, Sultanate of Oman',
    //     filter: 'cat-2',
    // },
    // {
    //     image: pic9,
    //     title: 'Modern house',
    //     address: 'Muscat, Sultanate of Oman',
    //     filter: 'cat-1',
    // },
];

var bgimg1 = crossLine2;
var bgimg2 = crossLine;

class Projects extends Component {
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
                <div className="section-full mobile-page-padding p-t80 p-b80 bg-white">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div
                                    className="sx-separator bg-moving bg-white bg-repeat-x"
                                    style={{
                                        backgroundImage: 'url(' + bgimg1 + ')',
                                    }}
                                >
                                    <h3 className="sep-line-one">
                                        Galeri Kami
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* Filter Nav START */}
                        {/* <div className="filter-wrap p-b30 text-center">
                            <ul className="filter-navigation masonry-filter clearfix">
                                <li className="active">
                                    <Link
                                        href={'#'}
                                        className="btn from-top"
                                        data-filter="*"
                                        data-hover="All"
                                    >
                                        All
                                    </Link>
                                </li>
                                {filters.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={'#'}
                                            className="btn from-top"
                                            data-filter={item.filter}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        {/* Filter Nav END */}
                        {/* GALLERY CONTENT START */}
                        <ul className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled m-b0">
                            {projects.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-12 m-b30`}
                                >
                                    <div className="sx-box image-hover-block">
                                        <div className="sx-thum-bx">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="sx-info p-t20 text-white">
                                            <h4 className="sx-tilte">
                                                <Link href={'/project-detail1'}>
                                                    {item.title}
                                                </Link>
                                            </h4>
                                            <p className="m-b0">
                                                {item.address}
                                            </p>
                                        </div>
                                        <a
                                            className="mfp-link"
                                            href={item.image}
                                        >
                                            <i className="fa fa-arrows-alt" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        {/* GALLERY CONTENT END */}
                        <div
                            className="load-more-btn-outer text-center"
                            style={{ backgroundImage: 'url(' + bgimg2 + ')' }}
                        >
                            <Link
                                href={'/gallery'}
                                className="site-button-secondry btn-half"
                            >
                                <span>Lihat Lebih Banyak</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Projects;
