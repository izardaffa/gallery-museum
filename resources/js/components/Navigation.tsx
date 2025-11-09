import { Link } from '@inertiajs/react';
import { Component } from 'react';

class Navigation extends Component {
    componentDidMount() {
        const loadScript = (src: string): Promise<void> => {
            return new Promise((resolve, reject) => {
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

        loadScript('./assets/js/mobilenav.js');
    }

    render() {
        return (
            <>
                <ul className="nav navbar-nav">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/gallery'}>Gallery</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About us</Link>
                    </li>
                    {/* <li className="active">
                        <Link href={''}>Home</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href={'/'}>Home-1</Link>
                            </li>
                            <li>
                                <Link href={'/home-2'}>Home-2</Link>
                            </li>
                            <li>
                                <Link href={'/home-3'}>Home-3</Link>
                            </li>
                            <li>
                                <Link href={'/home-4'}>Home-4</Link>
                            </li>
                            <li>
                                <Link href={'/home-5'}>Home-5</Link>
                            </li>
                            <li>
                                <Link href={'/home-6'}>Home-6</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href={''}>About us</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href={'/about-1'}>About 1</Link>
                            </li>
                            <li>
                                <Link href={'/about-2'}>About 2</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href={''}>Pages</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href={''}>Services</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link href={'/services-1'}>
                                            Services 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/services-2'}>
                                            Services 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/services-detail'}>
                                            Service Detail
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href={''}>Team</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link href={'/team-1'}>Our Team 1</Link>
                                    </li>
                                    <li>
                                        <Link href={'/team-2'}>Our Team 2</Link>
                                    </li>
                                    <li>
                                        <Link href={'/team-single'}>
                                            Team Detail
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/our-history'}>Our History</Link>
                            </li>
                            <li>
                                <Link href={'/icon-font'}>Fonts Icons</Link>
                            </li>
                            <li>
                                <Link href={'/error-404'}>Error 404</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href={''}>Projects</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href={''}>Project Grid Type</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link href={'/project-grid-3-columns'}>
                                            3 Columns
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={
                                                '/project-grid-3-columns-no-gap'
                                            }
                                        >
                                            3 Columns No Gutter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/project-grid-4-columns'}>
                                            4 Columns
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={
                                                '/project-grid-4-columns-no-gap'
                                            }
                                        >
                                            4 Columns No Gutter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/project-grid-5-columns'}>
                                            5 Columns
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={
                                                '/project-grid-5-columns-no-gap'
                                            }
                                        >
                                            5 Columns No Gutter
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href={''}>Project Masonry Type</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link
                                            href={'/project-masonry-3-columns'}
                                        >
                                            3 Columns
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={
                                                '/project-masonry-3-columns-no-gap'
                                            }
                                        >
                                            3 Columns No Gutter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/project-masonry-4-columns'}
                                        >
                                            4 Columns
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={
                                                '/project-masonry-4-columns-no-gap'
                                            }
                                        >
                                            4 Columns No Gutter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/project-masonry-5-columns'}
                                        >
                                            5 Columns
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={
                                                '/project-masonry-5-columns-no-gap'
                                            }
                                        >
                                            5 Columns No Gutter
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/project-carousel'}>
                                    Project Carousel
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>Project Detail</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link href={'/project-detail1'}>
                                            Project Detail 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/project-detail2'}>
                                            Project Detail 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href={''}>Blog</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href={'/blog-grid'}>Blog Grid</Link>
                            </li>
                            <li>
                                <Link href={'/blog-listing'}>Blog Listing</Link>
                            </li>
                            <li>
                                <Link href={'/blog-masonry'}>Blog Masonry</Link>
                            </li>
                            <li>
                                <Link href={'/blog-single'}>Blog Single</Link>
                            </li>
                            <li>
                                <Link href={'/post-right-sidebar'}>
                                    Post Right Sidebar
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href={''}>Shop</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href={'/shop-grid'}>Shop Grid</Link>
                            </li>
                            <li>
                                <Link href={'/shop-list'}>Shop List</Link>
                            </li>
                            <li>
                                <Link href={'/shop-detail'}>Shop Detail</Link>
                            </li>
                            <li>
                                <Link href={'/shop-account'}>My Account</Link>
                            </li>
                            <li>
                                <Link href={'/shop-cart'}>Cart</Link>
                            </li>
                            <li>
                                <Link href={'/shop-checkout'}>Checkout</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href={'/faq'}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={'/contact-us'}>Contact us</Link>
                    </li> */}
                </ul>
            </>
        );
    }
}

export default Navigation;
