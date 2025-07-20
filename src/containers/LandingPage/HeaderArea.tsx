import React, { useState, useEffect } from 'react';
import logo from './img/logo.svg';

const MobileMenu = ({ isOpen, onClose, onNavClick }) => {
  return (
    <div className={`th-menu-wrapper ${isOpen ? 'th-body-visible' : ''}`} data-lenis-prevent>
      <div className="th-menu-area">
        <button
          className={`th-menu-toggle ${isOpen ? 'th-active' : ''}`}
          onClick={onClose}
        >
          ✕
        </button>
        <div className="mobile-logo">
          <a href="/"><img src={logo} alt="Atek" /></a>
        </div>
        <div className={`th-mobile-menu onepage-nav ${isOpen ? 'th-menu-visible' : ''}`}>
          <ul>
            <li><a href="#homePage" onClick={(e) => onNavClick(e, 'homePage')}>DEMOS</a></li>
            <li><a href="#innerPage" onClick={(e) => onNavClick(e, 'innerPage')}>INNER PAGE</a></li>
            <li><a href="#features" onClick={(e) => onNavClick(e, 'features')}>FEATURES</a></li>
            <li><a href="#responsive" onClick={(e) => onNavClick(e, 'responsive')}>SUPPORT</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onNavClick={handleNavClick} />
      <header className={`th-header header-transparent ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <a href="/"><img src={logo} alt="Atek" /></a>
              </div>
            </div>
            <div className="col-auto d-lg-none">
              <button className="th-menu-toggle" onClick={() => setMenuOpen(true)}>☵</button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <nav className="main-menu onepage-nav">
                <ul>
                  <li><a href="#homePage" onClick={(e) => handleNavClick(e, 'homePage')}>DEMOS</a></li>
                  <li><a href="#innerPage" onClick={(e) => handleNavClick(e, 'innerPage')}>INNER PAGE</a></li>
                  <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')}>FEATURES</a></li>
                  <li><a href="#responsive" onClick={(e) => handleNavClick(e, 'responsive')}>SUPPORT</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-auto d-none d-lg-block">
              <div className="header-btn d-none d-xl-block">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/themehour"
                  className="th-btn white-hover th-icon"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
