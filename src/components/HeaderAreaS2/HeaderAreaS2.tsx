import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import pattern from '../../img/bg/line-pattern.png';
import search from '../../img/icon/search.svg';
import LogoMobile from '../../img/logo2.svg';

import Home1 from '../../img/pages/home-consulting.jpg';
import Home2 from '../../img/pages/home-cloud.jpg';
import Home3 from '../../img/pages/home-ai.jpg';
import Home4 from '../../img/pages/startup.jpg';
import Home5 from '../../img/pages/home-cybersecurity.jpg';
import Home6 from '../../img/pages/home-sass.jpg';
import Home7 from '../../img/pages/home-tech-support.jpg';
import Home8 from '../../img/pages/software-deve.jpg';
import Home9 from '../../img/pages/app-development.jpg';
import Home10 from '../../img/pages/it-solutions.jpg';
import Home11 from '../../img/pages/digital-transformation.jpg';
import Home12 from '../../img/pages/data-analytics.jpg';
import Home13 from '../../img/pages/blockchain-fintech.jpg';

import HeaderTopS2 from '../HeaderTopS2/HeaderTopS2';

type HeaderAreaS2Props = {
  className?: string;
  SearchBtn?: boolean;
};

const HeaderAreaS2 = ({ className = '', SearchBtn = true }: HeaderAreaS2Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [SearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearch = () => setSearchOpen(!SearchOpen);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenSubMenus({});
  };

  const closeMenu = () => setIsMenuOpen(false);

  const toggleSubMenu = (menuKey: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const megaMenuItems = [
    { path: '/home', title: 'Home Consulting', img: Home1 },
    { path: '/home-cloud', title: 'Home Cloud', img: Home2 },
    { path: '/home-ai-machine', title: 'Home Ai-Machine', img: Home3 },
    { path: '/home-startup', title: 'Home Startup', img: Home4 },
    { path: '/home-cybersecurity', title: 'Home Cybersecurity', img: Home5 },
    { path: '/home-sass', title: 'SaaS Business Product', img: Home6 },
    { path: '/home-tech-support', title: 'Tech Support Services', img: Home7 },
    { path: '/home-software-development', title: 'Home Software-Development', img: Home8 },
    { path: '/home-app-development', title: 'Web & App Development', img: Home9 },
    { path: '/home-it-solutions', title: 'Home It Solutions', img: Home10 },
    { path: '/home-digital-transformation', title: 'Home Digital Transformation', img: Home11 },
    { path: '/home-data-analytics', title: 'Home Data Analytics & Big', img: Home12 },
    { path: '/home-blockchain-fintech', title: 'Home Blockchain & Fintech', img: Home13 },
  ];

  const mobileSubMenus = {
    About: [
      { path: '/about', title: 'About Us 1' },
      { path: '/about2', title: 'About Us 2' },
    ],
    Pages: [
      {
        title: 'Shop',
        children: [
          { path: '/shop', title: 'Shop' },
          { path: '/shop-details/1', title: 'Shop Details' },
          { path: '/cart', title: 'Cart Page' },
          { path: '/checkout', title: 'Checkout' },
          { path: '/wishlist', title: 'Wishlist' },
        ],
      },
      { path: '/gallery', title: 'Gallery' },
      { path: '/case-study', title: 'Case Study' },
      { path: '/case-study-details/1', title: 'Case Study Details' },
      { path: '/career', title: 'Career' },
      { path: '/career-details/1', title: 'Career Details' },
      { path: '/team-guide', title: 'Team' },
      { path: '/team-guider-details/1', title: 'Team Details' },
      { path: '/faq', title: 'Faq Page' },
      { path: '/price', title: 'Price Package' },
      { path: '/error', title: 'Error Page' },
    ],
    Services: [
      { path: '/service', title: 'Services' },
      { path: '/service-details/1', title: 'Service Details' },
    ],
    Projects: [
      { path: '/project-grid', title: 'Project Grid' },
      { path: '/project-details/1', title: 'Project Details' },
    ],
    Blog: [
      { path: '/blog', title: 'Blog' },
      { path: '/blog-grid', title: 'Blog Grid' },
      { path: '/blog-details/1', title: 'Blog Details' },
    ],
    Contact: [
      { path: '/contact', title: 'Contact Us' },
      { path: '/contact-2', title: 'Contact Us Two' },
    ],
  };

  return (
    <div id="scroll">
      <header className={className}>
        <HeaderTopS2 className="header-top" />
        <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
          <div
            className="menu-area background-image"
            style={{ backgroundImage: `url(${pattern})` }}
          >
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-2 col-auto">
                  <div className="header-logo">
                    <Link onClick={ClickHandler} to="/">
                      <img src={LogoMobile} alt="Atek" />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-8 col-auto text-start">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <Link onClick={ClickHandler} to="#">
                          Home
                        </Link>
                        <ul
                          className="mega-menu mega-menu-content allow-natural-scroll"
                          data-lenis-prevent
                        >
                          <li>
                            <div className="container">
                              <div className="row gy-4">
                                {megaMenuItems.map((item, idx) => (
                                  <div className="col-lg-3" key={idx}>
                                    <div className="mega-menu-box">
                                      <div className="mega-menu-img">
                                        <img src={item.img} alt={item.title} />
                                        <div className="btn-wrap">
                                          <Link
                                            onClick={ClickHandler}
                                            to={item.path}
                                            className="th-btn"
                                          >
                                            View Demo
                                          </Link>
                                        </div>
                                      </div>
                                      <h3 className="mega-menu-title">
                                        <Link onClick={ClickHandler} to={item.path}>
                                          <span>{`${String(idx + 1).padStart(2, '0')}.`}</span> {item.title}
                                        </Link>
                                      </h3>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      {Object.keys(mobileSubMenus).map((key) => (
                        <li className="menu-item-has-children" key={key}>
                          <Link onClick={ClickHandler} to="#">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Link>
                          <ul className="sub-menu">
                            {mobileSubMenus[key as keyof typeof mobileSubMenus].map((item, idx) =>
                              'children' in item ? (
                                <li key={idx} className="menu-item-has-children">
                                  <Link onClick={ClickHandler} to="#">
                                    {item.title}
                                  </Link>
                                  <ul className="sub-menu">
                                    {item.children?.map((sub, subIdx) => (
                                      <li key={subIdx}>
                                        <Link onClick={ClickHandler} to={sub.path}>
                                          {sub.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ) : (
                                <li key={idx}>
                                  <Link onClick={ClickHandler} to={item.path}>
                                    {item.title}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <button
                    type="button"
                    className="th-menu-toggle d-block d-xl-none"
                    onClick={toggleMenu}
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>

                <div className="col-xl-2 col-auto d-none d-xl-block">
                  <div className="header-button">
                    {SearchBtn && (
                      <button
                        type="button"
                        className="icon-btn searchBoxToggler"
                        onClick={toggleSearch}
                      >
                        <img src={search} alt="icon" />
                      </button>
                    )}
                    <Link onClick={ClickHandler} to="/contact" className="th-btn th-icon">
                      Get In Touch <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="th-menu-wrapper onepage-nav th-body-visible">
          <div className="th-menu-area text-center" onClick={(e) => e.stopPropagation()}>
            <button className="th-menu-toggle" onClick={closeMenu}>
              <i className="fal fa-times"></i>
            </button>
            <div className="mobile-logo">
              <Link onClick={ClickHandler} to="/home">
                <img src={LogoMobile} alt="Atek" />
              </Link>
            </div>

            <div className="th-mobile-menu" data-lenis-prevent>
              <ul>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => toggleSubMenu('home')}>
                    Home
                  </a>
                  {openSubMenus['home'] && (
                    <ul className="sub-menu">
                      {megaMenuItems.map((item, idx) => (
                        <li key={idx}>
                          <Link onClick={ClickHandler} to={item.path}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {Object.keys(mobileSubMenus).map((key) => (
                  <li className="menu-item-has-children" key={key}>
                    <a href="#" onClick={() => toggleSubMenu(key)}>
                      {key}
                    </a>
                    {openSubMenus[key] && (
                      <ul className="sub-menu">
                        {mobileSubMenus[key as keyof typeof mobileSubMenus].map((item, idx) =>
                          'children' in item ? (
                            <li key={idx} className="menu-item-has-children">
                              <a href="#" onClick={() => toggleSubMenu(`${key}-${item.title}`)}>
                                {item.title}
                              </a>
                              {openSubMenus[`${key}-${item.title}`] && (
                                <ul className="sub-menu">
                                  {item.children?.map((sub, subIdx) => (
                                    <li key={subIdx}>
                                      <Link onClick={ClickHandler} to={sub.path}>
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ) : (
                            <li key={idx}>
                              <Link onClick={ClickHandler} to={item.path}>
                                {item.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Search Box */}
      {SearchOpen && (
        <div className="popup-search-box show">
          <button className="searchClose" onClick={toggleSearch}>
            <i className="fal fa-times"></i>
          </button>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="What are you looking for?" />
            <button type="submit">
              <i className="fal fa-search"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HeaderAreaS2;
