import { type FC } from 'react';
import { Link } from 'react-router-dom';

import footer_bg from '../../img/bg/footer_bg-2.webp';
import envelope from '../../img/icon/envelope.svg';
import location from '../../img/icon/location-dot.svg';
import phone from '../../img/icon/phone.svg';
import plane from '../../img/icon/regular-plane.svg';
import logo from '../../img/logo3.svg';

import GalleryAreaS5 from '../GalleryAreaS5/GalleryAreaS5';

interface FooterAreaS2Props {
  className?: string;
}

const FooterAreaS2: FC<FooterAreaS2Props> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className={className} style={{ backgroundImage: `url(${footer_bg})` }}>
      <GalleryAreaS5 />

      <div className="widget-area f-widget8">
        <div className="container">
          <div className="row justify-content-between">

            {/* About Widget */}
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link onClick={ClickHandler} to="/home">
                      <img src={logo} alt="Atek" />
                    </Link>
                  </div>
                  <p className="about-text">
                    Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget ps-xxl-2 ms-xxl-3">
                <h3 className="widget_title">Useful Link</h3>
                <ul className="menu">
                  <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                  <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                  <li><Link onClick={ClickHandler} to="/service">Our Service</Link></li>
                  <li><Link onClick={ClickHandler} to="/contact">Terms of Service</Link></li>
                  <li><Link onClick={ClickHandler} to="/service">News & Media</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget ps-xxl-3 ms-xxl-4">
                <h3 className="widget_title">Get In Touch</h3>
                <div className="th-widget-contact">
                  <div className="info-box_text">
                    <div className="icon"><img src={phone} alt="Phone" /></div>
                    <div className="details">
                      <p><a href="tel:+01234567890" className="info-box_link">+01 234 567 890</a></p>
                      <p><a href="tel:+09876543210" className="info-box_link">+09 876 543 210</a></p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon"><img src={envelope} alt="Email" /></div>
                    <div className="details">
                      <p><a href="mailto:mailinfo00@atek.com" className="info-box_link">mailinfo00@atek.com</a></p>
                      <p><a href="mailto:support24@atek.com" className="info-box_link">support24@atek.com</a></p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon"><img src={location} alt="Location" /></div>
                    <div className="details">
                      <p><a href="https://maps.app.goo.gl/QyH2fFoJ9fii93mt7" target="_blank" rel="noreferrer">
                        789 Inner Lane, Holy park, California, USA
                      </a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-6 col-xl-4">
              <div className="widget mb-0 footer-widget ps-xxl-3 ms-xxl-4">
                <h4 className="widget_title">Latest Newsletter</h4>
                <div className="newsletter-widget">
                  <div className="footer-search-contact mt-30">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input className="form-control" type="email" placeholder="Enter Email" required />
                      <div className="footer-btn mt-20">
                        <button type="submit" className="th-btn btn-fw th-radius style1">
                          Subscribe Now <img src={plane} alt="Subscribe" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrap">
            <div className="container">
               <div className="row justify-content-lg-between align-items-center">
                  <div className="col-lg-6">
                     <p className="copyright-text">Copyright © 2025 <Link onClick={ClickHandler} to="/home">Atek</Link>. All Rights Reserved.</p>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end">
                     <div className="footer-links">
                        <ul>
                           <li><Link onClick={ClickHandler} to="/about">Terms & Conditions</Link></li>
                           <li><Link onClick={ClickHandler} to="/about">Careers</Link></li>
                           <li><Link onClick={ClickHandler} to="/about">Privacy Policy</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </footer>
  );
};

export default FooterAreaS2;
