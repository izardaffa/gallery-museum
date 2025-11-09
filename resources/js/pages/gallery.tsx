import Banner from '@/components/elements/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { gallerySingle } from '@/routes';
import { Link } from '@inertiajs/react';
import { Component } from 'react';
import Select from 'react-select';

// Dummy data artefak museum
const artefacts = [
    {
        image: '/images/blog/portrait/pic1.jpg',
        title: 'Patung Ganesha dari Batu Andesit',
        author: 'Museum Nasional',
        date: '5',
        month: 'SEP',
        kabupaten: 'Jakarta Pusat',
        id: 1,
    },
    {
        image: '/images/blog/portrait/pic2.jpg',
        title: 'Topeng Panji dari Kayu Jati',
        author: 'Museum Mpu Tantular',
        date: '25',
        month: 'SEP',
        kabupaten: 'Sidoarjo',
        id: 1,
    },
    {
        image: '/images/blog/portrait/pic3.jpg',
        title: 'Arca Dwarapala Penjaga Candi',
        author: 'Museum Trowulan',
        date: '26',
        month: 'SEP',
        kabupaten: 'Mojokerto',
        id: 1,
    },
    {
        image: '/images/blog/portrait/pic4.jpg',
        title: 'Perahu Kuno dari Kayu Ulin',
        author: 'Museum Kalimantan Timur',
        date: '16',
        month: 'SEP',
        kabupaten: 'Samarinda',
        id: 1,
    },
    {
        image: '/images/blog/portrait/pic5.jpg',
        title: 'Gerabah Neolitikum',
        author: 'Museum Bengkulu',
        date: '18',
        month: 'SEP',
        kabupaten: 'Bengkulu',
        id: 1,
    },
];

// List kabupaten untuk dropdown
const kabupatenList = [
    'Semua Kabupaten',
    'Jakarta Pusat',
    'Sidoarjo',
    'Mojokerto',
    'Samarinda',
    'Bengkulu',
];

const kabupatenOptions = kabupatenList.map((k) => ({
    value: k,
    label: k,
}));

interface GalleryState {
    search: string;
    kabupaten: string;
}

interface GalleryProps {}

class BlogMasonary extends Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props);
        this.state = {
            search: '',
            kabupaten: '',
        };
    }

    componentDidMount() {
        // load script jika diperlukan
        const loadScript = (src: string): Promise<void> => {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', () => resolve());
                script.addEventListener('error', (e) => reject(e));
                document.body.appendChild(script);
                document.body.removeChild(script);
            });
        };
        loadScript('./assets/js/custom.js');
    }

    render() {
        const { search, kabupaten } = this.state;

        // Filter data berdasarkan search dan kabupaten
        const filteredArtefacts = artefacts.filter((item) => {
            const matchSearch = item.title
                .toLowerCase()
                .includes(search.toLowerCase());
            const matchKabupaten =
                kabupaten === '' ||
                kabupaten === 'Semua Kabupaten' ||
                item.kabupaten === kabupaten;
            return matchSearch && matchKabupaten;
        });

        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner
                        title="Galeri Artefak Museum"
                        pagename="Galeri Museum"
                        description="Jelajahi koleksi artefak bersejarah dari berbagai kabupaten di Indonesia."
                    />

                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            {/* 🔍 Filter Bar */}
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg border-0 shadow-sm"
                                        placeholder="Cari artefak berdasarkan nama..."
                                        value={search}
                                        onChange={(e) =>
                                            this.setState({
                                                search: e.target.value,
                                            })
                                        }
                                        style={{
                                            borderRadius: '12px',
                                            padding: '14px 18px',
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <Select
                                        options={kabupatenOptions}
                                        value={kabupatenOptions.find(
                                            (opt) => opt.value === kabupaten,
                                        )}
                                        onChange={(selected) =>
                                            this.setState({
                                                kabupaten:
                                                    selected?.value || '',
                                            })
                                        }
                                        placeholder="Pilih kabupaten..."
                                        isClearable
                                        isSearchable
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                borderRadius: '12px',
                                                border: '1px solid #e0e0e0',
                                                boxShadow:
                                                    '0 1px 3px rgba(0,0,0,0.1)',
                                                padding: '3px',
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                zIndex: 9999,
                                            }),
                                        }}
                                    />
                                </div>
                            </div>

                            {/* 🏺 Artefak List */}
                            <div className="masonry-outer mfp-gallery news-masonry row align-items-start justify-content-center">
                                {filteredArtefacts.map((item, index) => (
                                    <div
                                        className="masonry-item col-lg-4 col-md-6 col-sm-12"
                                        key={index}
                                    >
                                        <div className="blog-post blog-grid date-style-2 absolute top-0 overflow-hidden rounded bg-white shadow-sm">
                                            <div className="sx-post-media sx-img-effect img-reflection">
                                                <a href={`/gallery/${item.id}`}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        style={{
                                                            height:
                                                                index % 2 === 0
                                                                    ? '340px'
                                                                    : '406px',
                                                            objectFit: 'cover',
                                                            width: '100%',
                                                        }}
                                                    />
                                                </a>
                                            </div>

                                            <div className="sx-post-info p-4">
                                                <div className="sx-post-meta mb-2">
                                                    <ul className="list-inline small mb-0 text-muted">
                                                        <li className="list-inline-item me-3">
                                                            <i className="fa fa-calendar me-1"></i>
                                                            {item.date}{' '}
                                                            {item.month}
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <i className="fa fa-map-marker me-1"></i>
                                                            {item.kabupaten}
                                                        </li>
                                                    </ul>
                                                </div>

                                                <h5 className="post-title fw-bold mb-2">
                                                    {item.title}
                                                </h5>
                                                <p className="small mb-2 text-muted">
                                                    Oleh {item.author}
                                                </p>
                                                <Link
                                                    href={gallerySingle(
                                                        item.id,
                                                    )}
                                                    className="site-button btn-half"
                                                    style={{
                                                        fontSize: '13px',
                                                        letterSpacing: '0.2em',
                                                        padding:
                                                            '0.75rem 0.5rem',
                                                    }}
                                                >
                                                    <span> Read More</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {filteredArtefacts.length === 0 && (
                                    <div className="py-5 text-center text-muted">
                                        <i className="fa fa-search fa-2x mb-3"></i>
                                        <p>
                                            Tidak ditemukan artefak yang cocok
                                            dengan pencarian.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="#"
                                            aria-label="Previous"
                                        >
                                            <span aria-hidden="true">
                                                &laquo;
                                            </span>
                                            <span className="sr-only">
                                                Previous
                                            </span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="#"
                                            aria-label="Next"
                                        >
                                            <span aria-hidden="true">
                                                &raquo;
                                            </span>
                                            <span className="sr-only">
                                                Next
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default BlogMasonary;
