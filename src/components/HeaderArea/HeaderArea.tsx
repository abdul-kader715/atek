import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import search from '../../img/icon/search.svg';
import Logo from '../../img/logo.svg';
import LogoMobile from '../../img/logo2.svg';
import logo_bg from '../../img/logo_bg_mask.png';

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

import HeaderTop from '../HeaderTop/HeaderTop';
import MaskedDiv from '../MaskedDiv/MaskedDiv';

type HeaderAreaProps = {
  className?: string;
  SearchBtn?: boolean;
};

const HeaderArea = ({ className = '', SearchBtn = true }: HeaderAreaProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [SearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSearch = () => setSearchOpen(!SearchOpen);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenSubMenus({});
  };
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSubMenu = (menuKey: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [menuKey]: !prev[menuKey] }));
  };

  const megaMenuItems = [
    { img: Home1, path: '/home', title: 'Home Consulting' },
    { img: Home2, path: '/home-cloud', title: 'Home Cloud' },
    { img: Home3, path: '/home-ai-machine', title: 'Home Ai-Machine' },
    { img: Home4, path: '/home-startup', title: 'Home Startup' },
    { img: Home5, path: '/home-cybersecurity', title: 'Home Cybersecurity' },
    { img: Home6, path: '/home-sass', title: 'SaaS Business Product' },
    { img: Home7, path: '/home-tech-support', title: 'Tech Support Services' },
    { img: Home8, path: '/home-software-development', title: 'Home Software-Development' },
    { img: Home9, path: '/home-app-development', title: 'Web & App Development' },
    { img: Home10, path: '/home-it-solutions', title: 'Home It Solutions' },
    { img: Home11, path: '/home-digital-transformation', title: 'Home Digital Transformation' },
    { img: Home12, path: '/home-data-analytics', title: 'Home Data Analytics & Big' },
    { img: Home13, path: '/home-blockchain-fintech', title: 'Home Blockchain & Fintech' },
  ];

  const navItems = [
    { key: 'About', label: 'About Us', children: [
      { path: '/about', label: 'About Us 1' },
      { path: '/about2', label: 'About Us 2' },
    ]},
    { key: 'Pages', label: 'Pages', children: [
      { key: 'Shop', label: 'Shop', children: [
        { path: '/shop', label: 'Shop' },
        { path: '/shop-details/1', label: 'Shop Details' },
        { path: '/cart', label: 'Cart Page' },
        { path: '/checkout', label: 'Checkout' },
        { path: '/wishlist', label: 'Wishlist' },
      ]},
      { path: '/gallery', label: 'Gallery' },
      { path: '/case-study', label: 'Case Study' },
      { path: '/case-study-details/1', label: 'Case Study Details' },
      { path: '/career', label: 'Career' },
      { path: '/career-details/1', label: 'Career Details' },
      { path: '/team-guide', label: 'Team' },
      { path: '/team-guider-details/1', label: 'Team Details' },
      { path: '/faq', label: 'Faq Page' },
      { path: '/price', label: 'Price Package' },
      { path: '/error', label: 'Error Page' },
    ]},
    { key: 'Services', label: 'Our Services', children: [
      { path: '/service', label: 'Services' },
      { path: '/service-details/1', label: 'Service Details' },
    ]},
    { key: 'Projects', label: 'Projects', children: [
      { path: '/project-grid', label: 'Project Grid' },
      { path: '/project-details/1', label: 'Project Details' },
    ]},
    { key: 'Blog', label: 'Blog', children: [
      { path: '/blog', label: 'Blog' },
      { path: '/blog-grid', label: 'Blog Grid' },
      { path: '/blog-details/1', label: 'Blog Details' },
    ]},
    { key: 'Contact', label: 'Contact us', children: [
      { path: '/contact', label: 'Contact Us' },
      { path: '/contact-2', label: 'Contact Us Two' },
    ]},
  ];

  return (
    <div id="scroll">
      <header className={className}>
        <HeaderTop className="header-top" />
        <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link onClick={ClickHandler} to="/">
                      <img src={Logo} alt="Atek" />
                    </Link>
                  </div>
                </div>

                <div className="col-auto me-xxl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <Link onClick={ClickHandler} to="#">Home</Link>
                        <ul className="mega-menu mega-menu-content allow-natural-scroll" data-lenis-prevent>
                          <li>
                            <div className="container">
                              <div className="row gy-4">
                                {megaMenuItems.map((item, idx) => (
                                  <div className="col-lg-3" key={idx}>
                                    <div className="mega-menu-box">
                                      <div className="mega-menu-img">
                                        <img src={item.img} alt={item.title} />
                                        <div className="btn-wrap">
                                          <Link onClick={ClickHandler} to={item.path} className="th-btn">
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

                      {navItems.map((item) => (
                        <li key={item.key} className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="#">{item.label}</Link>
                          <ul className="sub-menu">
                            {item.children?.map((sub, idx) =>
                              'children' in sub ? (
                                <li key={sub.key} className="menu-item-has-children">
                                  <Link onClick={ClickHandler} to="#">{sub.label}</Link>
                                  <ul className="sub-menu">
                                    {sub.children?.map((s, i) => (
                                      <li key={i}>
                                        <Link onClick={ClickHandler} to={s.path}>{s.label}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ) : (
                                <li key={idx}>
                                  <Link onClick={ClickHandler} to={sub.path}>{sub.label}</Link>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <button type="button" className="th-menu-toggle d-block d-xl-none" onClick={toggleMenu}>
                    <i className="far fa-bars"></i>
                  </button>
                </div>

                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    {SearchBtn && (
                      <button type="button" className="icon-btn searchBoxToggler" onClick={toggleSearch}>
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

            <MaskedDiv className="logo-bg bg-mask" maskSrc={logo_bg} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`th-menu-wrapper onepage-nav ${isMenuOpen ? 'th-body-visible' : ''}`}>
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
                  <a href="#" onClick={() => toggleSubMenu('Home')}>Home</a>
                  {openSubMenus['Home'] && (
                    <ul className="sub-menu">
                      {megaMenuItems.map((item, idx) => (
                        <li key={idx}>
                          <Link onClick={ClickHandler} to={item.path}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {navItems.map((item) => (
                  <li key={item.key} className="menu-item-has-children">
                    <a href="#" onClick={() => toggleSubMenu(item.key)}>{item.label}</a>
                    {openSubMenus[item.key] && (
                      <ul className="sub-menu">
                        {item.children?.map((sub, idx) =>
                          'children' in sub ? (
                            <li key={sub.key} className="menu-item-has-children">
                              <a href="#" onClick={() => sub.key && toggleSubMenu(sub.key)}>{sub.label}</a>
                              {typeof sub.key === 'string' && openSubMenus[sub.key] && (
                                <ul className="sub-menu">
                                  {sub.children.map((s, i) => (
                                    <li key={i}>
                                      <Link onClick={ClickHandler} to={s.path}>{s.label}</Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ) : (
                            <li key={idx}>
                              <Link onClick={ClickHandler} to={sub.path}>{sub.label}</Link>
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
        <div className={`popup-search-box ${SearchOpen ? 'show' : ''}`}>
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

export default HeaderArea;
