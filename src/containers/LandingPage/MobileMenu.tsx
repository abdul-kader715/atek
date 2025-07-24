import React from 'react';
import logo from './img/logo.svg';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavClick }) => {
  return (
    <div className={`th-menu-wrapper ${isOpen ? 'th-body-visible' : ''}`} data-lenis-prevent>
      <div className="th-menu-area">
        <button
          className={`th-menu-toggle ${isOpen ? 'th-active' : ''}`}
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className="mobile-logo">
          <a href="/">
            <img src={logo} alt="Atek Logo" />
          </a>
        </div>
        <div className={`th-mobile-menu onepage-nav ${isOpen ? 'th-menu-visible' : ''}`}>
          <ul>
            <li>
              <a href="#homePage" onClick={(e) => onNavClick(e, 'homePage')}>
                DEMOS
              </a>
            </li>
            <li>
              <a href="#innerPage" onClick={(e) => onNavClick(e, 'innerPage')}>
                INNER PAGE
              </a>
            </li>
            <li>
              <a href="#features" onClick={(e) => onNavClick(e, 'features')}>
                FEATURES
              </a>
            </li>
            <li>
              <a href="#responsive" onClick={(e) => onNavClick(e, 'responsive')}>
                SUPPORT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
