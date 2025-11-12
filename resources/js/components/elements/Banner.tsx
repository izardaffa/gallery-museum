const banner5 = '/images/banner/5.jpg';

const Banner = ({ title, pagename, description, bgimage = banner5 }: any) => {
    return (
        <>
            <div
                className="sx-bnr-inr overlay-wraper bg-parallax bg-top-center"
                data-stellar-background-ratio="0.5"
                style={{
                    backgroundImage: 'url(' + bgimage + ')',
                }}
            >
                <div className="overlay-main opacity-07 bg-black" />
                <div className="container">
                    <div className="sx-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="m-tb0">{title}</h2>{' '}
                                <p>{description}</p>
                            </div>
                        </div>
                        {/* BREADCRUMB ROW */}
                        <div>
                            <ul className="sx-breadcrumb breadcrumb-style-2">
                                <li>
                                    {/* <NavLink to={'./'}>Home</NavLink> */}
                                </li>
                                <li>{pagename}</li>
                            </ul>
                        </div>
                        {/* BREADCRUMB ROW END */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
