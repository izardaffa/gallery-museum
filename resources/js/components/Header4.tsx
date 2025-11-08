// import { Component } from 'react';

// class Header4 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             logo: require('./../../images/logo-light.png'),
//             isSearchActive: false,
//         };
//     }

//     handleSearchToggle = () => {
//         this.setState((prevState) => ({
//             isSearchActive: !prevState.isSearchActive,
//         }));
//     };

//     componentDidMount() {
//         const handleScroll = () => {
//             const offset = window.scrollY;
//             const stickyHeader = document.querySelector('.sticky-header');

//             if (offset >= 100) {
//                 stickyHeader.classList.add('is-fixed', 'color-fill');
//             } else {
//                 stickyHeader.classList.remove('is-fixed', 'color-fill');
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         window.updateTopMostParent = (logopath) => {
//             this.setState({ logo: logopath });
//         };
//     }

//     render() {
//         const { isSearchActive, logo } = this.state;

//         return (
//             <>
//                 <header className="site-header nav-wide nav-transparent mobile-sider-drawer-menu">
//                     <div className="sticky-header main-bar-wraper navbar-expand-lg">
//                         <div className="main-bar">
//                             <div className="clearfix container">
//                                 {/* LOGO */}
//                                 <div className="logo-header">
//                                     <div className="logo-header-inner logo-header-one">
//                                         <a href="/">
//                                             <img src={logo} alt="Inteshape" />
//                                         </a>
//                                     </div>
//                                 </div>

//                                 {/* NAV Toggle Button */}
//                                 <button
//                                     id="mobile-side-drawer"
//                                     data-target=".header-nav"
//                                     data-toggle="collapse"
//                                     type="button"
//                                     className="navbar-toggler collapsed"
//                                 >
//                                     <span className="sr-only">
//                                         Toggle navigation
//                                     </span>
//                                     <span className="icon-bar icon-bar-first" />
//                                     <span className="icon-bar icon-bar-two" />
//                                     <span className="icon-bar icon-bar-three" />
//                                 </button>

//                                 {/* EXTRA NAV */}
//                                 <div className="extra-nav">
//                                     <div className="extra-cell">
//                                         <a
//                                             href="#"
//                                             onClick={this.handleSearchToggle}
//                                         >
//                                             <i className="fa fa-search" />
//                                         </a>
//                                     </div>
//                                 </div>

//                                 {/* MAIN NAVIGATION */}

//                                 {/* SITE SEARCH */}
//                                 <div
//                                     id="search"
//                                     className={isSearchActive ? 'open' : ''}
//                                 >
//                                     <span
//                                         className="close"
//                                         onClick={this.handleSearchToggle}
//                                     />
//                                     <form
//                                         role="search"
//                                         id="searchform"
//                                         action="/search"
//                                         method="get"
//                                         className="radius-xl"
//                                     >
//                                         <div className="input-group">
//                                             <input
//                                                 name="q"
//                                                 type="search"
//                                                 placeholder="Type to search"
//                                             />
//                                             <span className="input-group-btn">
//                                                 <button
//                                                     type="submit"
//                                                     className="search-btn"
//                                                 >
//                                                     <i className="fa fa-search arrow-animation" />
//                                                 </button>
//                                             </span>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//             </>
//         );
//     }
// }

// export default Header4;
