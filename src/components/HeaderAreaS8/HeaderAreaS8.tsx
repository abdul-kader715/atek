import { useEffect, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import recent from '../../img/blog/recent-post-1-1.webp';
import recent2 from '../../img/blog/recent-post-1-2.webp';
import envelope from '../../img/icon/envelope.svg';
import location from '../../img/icon/location-dot.svg';
import Sidebar from '../../img/icon/menu.svg';
import phone from '../../img/icon/phone.svg';
import LogoMobile from '../../img/logo2.svg';
import Logowhith from '../../img/logo3.svg';
import Home9 from '../../img/pages/app-development.jpg';
import Home13 from '../../img/pages/blockchain-fintech.jpg';
import Home12 from '../../img/pages/data-analytics.jpg';
import Home11 from '../../img/pages/digital-transformation.jpg';
import Home3 from '../../img/pages/home-ai.jpg';
import Home2 from '../../img/pages/home-cloud.jpg';
import Home1 from '../../img/pages/home-consulting.jpg';
import Home5 from '../../img/pages/home-cybersecurity.jpg';
import Home6 from '../../img/pages/home-sass.jpg';
import Home7 from '../../img/pages/home-tech-support.jpg';
import Home10 from '../../img/pages/it-solutions.jpg';
import Home8 from '../../img/pages/software-deve.jpg';
import Home4 from '../../img/pages/startup.jpg';
import HeaderTopS2 from '../HeaderTopS2/HeaderTopS2';

interface HeaderAreaS8Props {
  className?: string;
  HeaderTop?: boolean;
}

const HeaderAreaS8: FC<HeaderAreaS8Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const topPos = window.scrollY;
      setIsSticky(topPos > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { HeaderTop = true } = props;
  const [SideBarOpen, setSideBarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
  
  const toggleSideBar = () => {
    setSideBarOpen(!SideBarOpen);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setOpenSubMenus({});
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const toggleSubMenu = (menuKey: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  return (
    <div id='scroll'>
      <header className={`${props.className}`}>
        {HeaderTop && (
          <HeaderTopS2 className={'header-top'} />
        )}
        <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
          <div className="menu-area">
            <div className="container th-container3">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link onClick={ClickHandler} to="/">
                      <img src={Logowhith} alt="Atek" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <Link className="active" onClick={ClickHandler} to="#">Home</Link>
                        <ul className="mega-menu mega-menu-content allow-natural-scroll" data-lenis-prevent>
                          <li>
                            <div className="container">
                              <div className="row gy-4">
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home1} alt="Home One" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home" className="th-btn">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home"><span>01.</span>Home Consulting</Link></h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home2} alt="Home Two" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-cloud" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-cloud"><span>02.</span>Home Cloud</Link></h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home3} alt="Home Three" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-ai-machine" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-ai-machine"><span>03.</span>Home Ai-Machine</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home4} alt="Home Four" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-startup" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-startup"><span>04.</span>Home Startup</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home5} alt="Home Five" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-cybersecurity" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-cybersecurity"><span>05.</span>Home Cybersecurity</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home6} alt="Home Six" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-sass" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-sass"><span>06.</span>SaaS Business Product</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home7} alt="Home Seven" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-tech-support" className="th-btn ">View
                                          Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-tech-support"><span>07.</span>Tech Support Services</Link></h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home8} alt="Home Eight" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-software-development" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-software-development"><span>08.</span>Home Software-Development</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home9} alt="Home Nine" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-app-development" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-app-development"><span>09.</span>Web & App Development</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home10} alt="Home Ten" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-it-solutions" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-it-solutions"><span>10.</span>Home It Solutions</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home11} alt="Home Eleven" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-digital-transformation" className="th-btn">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-digital-transformation"><span>11.</span>Home Digital Transformation</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home12} alt="Home Twelf" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-data-analytics" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-data-analytics"><span>12.</span>Home
                                      Data Analytics & Big</Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img src={Home13} alt="Home ten" />
                                      <div className="btn-wrap">
                                        <Link onClick={ClickHandler} to="/home-blockchain-fintech" className="th-btn ">View Demo</Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title"><Link onClick={ClickHandler} to="/home-blockchain-fintech"><span>13.</span>Home Blockchain & Fintech</Link>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="#">About Us</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} to="/about">About Us 1</Link></li>
                          <li><Link onClick={ClickHandler} to="/about2">About Us 2</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="#">Pages</Link>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <Link onClick={ClickHandler} to="#">Shop</Link>
                            <ul className="sub-menu">
                              <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                              <li><Link onClick={ClickHandler} to="/shop-details/1">Shop Details</Link></li>
                              <li><Link onClick={ClickHandler} to="/cart">Cart Page</Link></li>
                              <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                              <li><Link onClick={ClickHandler} to="/wishlist">Wishlist</Link></li>
                            </ul>
                          </li>
                          <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                          <li><Link onClick={ClickHandler} to="/case-study">Case Study</Link></li>
                          <li><Link onClick={ClickHandler} to="/case-study-details/1">Case Study Details</Link></li>
                          <li><Link onClick={ClickHandler} to="/career">Career</Link></li>
                          <li><Link onClick={ClickHandler} to="/career-details/1">Career Details</Link></li>
                          <li><Link onClick={ClickHandler} to="/team-guide">Team</Link></li>
                          <li><Link onClick={ClickHandler} to="/team-guider-details/1">Team Details</Link></li>
                          <li><Link onClick={ClickHandler} to="/faq">Faq Page</Link></li>
                          <li><Link onClick={ClickHandler} to="/price">Price Package</Link></li>
                          <li><Link onClick={ClickHandler} to="/error">Error Page</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="#">Our Services</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                          <li><Link onClick={ClickHandler} to="/service-details/1">Service Details</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="#">Projects</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} to="/project-grid">Project Grid</Link></li>
                          <li><Link onClick={ClickHandler} to="/project-details/1">Project Details</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="#">Blog</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                          <li><Link onClick={ClickHandler} to="/blog-grid">Blog Grid</Link></li>
                          <li><Link onClick={ClickHandler} to="/blog-details/1">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/contact">Contact us</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                          <li><Link onClick={ClickHandler} to="/contact-2">Contact Us Two</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <button type="button" className="th-menu-toggle d-block d-xl-none" onClick={toggleMenu}><i className="far fa-bars"></i></button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link onClick={ClickHandler} to="/contact" className="th-btn style2 th-radius th-icon">Get In Touch <i className="fa-light fa-arrow-right-long"></i></Link>
                    <span onClick={toggleSideBar} className="simple-btn sideMenuToggler d-none d-xl-block">
                      <img src={Sidebar} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className={`th-menu-wrapper onepage-nav ${isMenuOpen ? 'th-body-visible' : ''}`}>
          <div className="th-menu-area text-center" onClick={(e) => e.stopPropagation()}>
            <button className="th-menu-toggle" onClick={closeMenu}><i className="fal fa-times"></i></button>
            <div className="mobile-logo">
              <Link onClick={ClickHandler} to="/home"><img src={LogoMobile} alt="Atek" /></Link>
            </div>
            <div className="th-mobile-menu" data-lenis-prevent>
              <ul>
                <li className="menu-item-has-children mega-menu-wrap">
                  <a className="active" href="#" onClick={() => toggleSubMenu('home')}>Home</a>
                  {openSubMenus['home'] && (
                    <ul className="sub-menu">
                      <li><Link onClick={ClickHandler} to="/home">Home Consulting</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-cloud">Home Cloud</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-ai-machine">Home Ai-Machine</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-startup">Home Startup</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-cybersecurity">Home Cybersecurity</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-sass">SaaS Business Product</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-tech-support">Tech Support Services</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-software-development">Home Software-Development</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-app-development">Web & App Development</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-it-solutions">Home It Solutions</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-digital-transformation">Home Digital Transformation</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-data-analytics">Home Data Analytics & Big</Link></li>
                      <li><Link onClick={ClickHandler} to="/home-blockchain-fintech">Home Blockchain & Fintech</Link></li>
                    </ul>
                  )}
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => toggleSubMenu('About')}>About Us</a>
                  {openSubMenus['About'] && (
                    <ul className="sub-menu">
                      <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                      <li><Link onClick={ClickHandler} to="/about2">About Us 2</Link></li>
                    </ul>
                  )}
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => toggleSubMenu('Pages')}>Pages</a>
                  {openSubMenus['Pages'] && (
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="#" onClick={() => toggleSubMenu('Shop')}>Shop</a>
                        {openSubMenus['Shop'] && (
                          <ul className="sub-menu">
                            <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                            <li><Link onClick={ClickHandler} to="/shop-details/1">Shop Details</Link></li>
                            <li><Link onClick={ClickHandler} to="/cart">Cart Page</Link></li>
                            <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                            <li><Link onClick={ClickHandler} to="/wishlist">Wishlist</Link></li>
                          </ul>
                        )}
                      </li>
                      <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                      <li><Link onClick={ClickHandler} to="/case-study">Case Study</Link></li>
                      <li><Link onClick={ClickHandler} to="/case-study-details/1">Case Study Details</Link></li>
                      <li><Link onClick={ClickHandler} to="/career">Career</Link></li>
                      <li><Link onClick={ClickHandler} to="/career-details/1">Career Details</Link></li>
                      <li><Link onClick={ClickHandler} to="/team-guide">Team</Link></li>
                      <li><Link onClick={ClickHandler} to="/team-guider-details/1">Team Details</Link></li>
                      <li><Link onClick={ClickHandler} to="/faq">Faq Page</Link></li>
                      <li><Link onClick={ClickHandler} to="/price">Price Package</Link></li>
                      <li><Link onClick={ClickHandler} to="/error">Error Page</Link></li>
                    </ul>
                  )}
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => toggleSubMenu('Services')}>Our Services</a>
                  {openSubMenus['Services'] && (
                    <ul className="sub-menu">
                      <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                      <li><Link onClick={ClickHandler} to="/service-details/1">Service Details</Link></li>
                    </ul>
                  )}
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => toggleSubMenu('Projects')}>Projects</a>
                  {openSubMenus['Projects'] && (
                    <ul className="sub-menu">
                      <li><Link onClick={ClickHandler} to="/project-grid">Project Grid</Link></li>
                      <li><Link onClick={ClickHandler} to="/project-details/1">Project Details</Link></li>
                    </ul>
                  )}
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => toggleSubMenu('Blog')}>Blog</a>
                  {openSubMenus['Blog'] && (
                    <ul className="sub-menu">
                      <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                      <li><Link onClick={ClickHandler} to="/blog-grid">Blog Grid</Link></li>
                      <li><Link onClick={ClickHandler} to="/blog-details/1">Blog Details</Link></li>
                    </ul>
                  )}
                </li>
                <li className="menu-item-has-children">
                  <a href="#" onClick={() => toggleSubMenu('Contact')}>Contact us</a>
                  {openSubMenus['Contact'] && (
                    <ul className="sub-menu">
                      <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                      <li><Link onClick={ClickHandler} to="/contact-2">Contact Us Two</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {SideBarOpen && (
        <div className={`sidemenu-wrapper sidemenu-info ${SideBarOpen ? 'show' : ''}`}>
          <div className="sidemenu-content">
            <button className="closeButton sideMenuCls" onClick={toggleSideBar}>
              <i className="far fa-times"></i>
            </button>
            <div className="widget  ">
              <div className="th-widget-about">
                <div className="about-logo">
                  <Link onClick={ClickHandler} to="/"><img src={LogoMobile} alt="Atek" /></Link>
                </div>
                <p className="about-text">Quick access to essential system features, including the dashboard for an overview of operations, network settings for managing connectivity, system logs for tracking activities.</p>
                <div className="th-social">
                  <a target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                  <a target="_blank" href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                  <a target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                  <a target="_blank" href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                  <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="widget  ">
              <h3 className="widget_title">Recent Posts</h3>
              <div className="recent-post-wrap">
                <div className="recent-post d-flex align-items-center">
                  <div className="media-img">
                    <Link onClick={ClickHandler} to="/blog-details/1">
                      <img src={recent} alt="Blog Image" /></Link>
                  </div>
                  <div className="media-body">
                    <div className="recent-post-meta">
                      <Link onClick={ClickHandler} to="/blog"><i className="far fa-calendar"></i>24 Jun , 2025</Link>
                    </div>
                    <h4 className="post-title"><Link className="text-inherit" onClick={ClickHandler} to="/blog-details/1">Where Vision Meets Concrete
                      Reality</Link></h4>
                  </div>
                </div>
                <div className="recent-post d-flex align-items-center">
                  <div className="media-img">
                    <Link onClick={ClickHandler} to="/blog-details/1"><img src={recent2} alt="Blog Image" /></Link>
                  </div>
                  <div className="media-body">
                    <div className="recent-post-meta">
                      <Link onClick={ClickHandler} to="/blog"><i className="far fa-calendar"></i>22 Jun , 2025</Link>
                    </div>
                    <h4 className="post-title"><Link className="text-inherit" onClick={ClickHandler} to="/blog-details/1">Raising the Bar in
                      Construction.</Link></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget  ">
              <h3 className="widget_title">Get In Touch</h3>
              <div className="th-widget-contact">
                <div className="info-box_text">
                  <div className="icon">
                    <img src={phone} alt="img" />
                  </div>
                  <div className="details">
                    <p><a href="tel:+01234567890" className="info-box_link">+01 234 567 890</a></p>
                    <p><a href="tel:+09876543210" className="info-box_link">+09 876 543 210</a></p>
                  </div>
                </div>
                <div className="info-box_text">
                  <div className="icon">
                    <img src={envelope} alt="img" />
                  </div>
                  <div className="details">
                    <p><a href="mailto:mailinfo00@atek.com" className="info-box_link">mailinfo00@atek.com</a></p>
                    <p><a href="mailto:support24@atek.com" className="info-box_link">support24@atek.com</a></p>
                  </div>
                </div>
                <div className="info-box_text">
                  <div className="icon"><img src={location} alt="img" /></div>
                  <div className="details">
                    <p>789 Inner Lane, Holy park, California, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderAreaS8;