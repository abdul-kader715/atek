import { type FC } from 'react';
import { Link } from 'react-router-dom';

import envelope from '../../img/icon/envelope.svg';
import location from '../../img/icon/location-dot.svg';
import phone from '../../img/icon/phone.svg';
import plane from '../../img/icon/plane.svg';
import logo from '../../img/logo3.svg';
import logo2 from '../../img/logo4.svg';
import gallery1 from '../../img/widget/gallery_1_1.jpg';
import gallery2 from '../../img/widget/gallery_1_2.jpg';
import gallery3 from '../../img/widget/gallery_1_3.jpg';
import gallery4 from '../../img/widget/gallery_1_4.jpg';
import gallery5 from '../../img/widget/gallery_1_5.jpg';
import gallery6 from '../../img/widget/gallery_1_6.jpg';

interface FooterAreaProps {
   className?: string;
   footerlogoOn?: boolean;
   footerlogotwo?: boolean;
}

const FooterArea: FC<FooterAreaProps> = ({
   className = '',
   footerlogoOn = true,
   footerlogotwo = false,
}) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   };

   return (
      <footer className={className}>
         <div className="widget-area">
            <div className="container">
               <div className="newsletter-area">
                  <div className="newsletter-top">
                     <div className="row gy-4 align-items-center">
                        <div className="col-lg-5">
                           <h2 className="newsletter-title text-white text-capitalize mb-0">
                              get updated the latest newsletter
                           </h2>
                        </div>
                        <div className="col-lg-7">
                           <form
                              className="newsletter-form"
                              onSubmit={(e) => e.preventDefault()}
                           >
                              <input
                                 className="form-control"
                                 type="email"
                                 placeholder="Enter Email"
                                 required
                              />
                              <button type="submit" className="th-btn style3">
                                 Subscribe Now <img src={plane} alt="send icon" />
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row justify-content-between">
                  <div className="col-md-6 col-xl-3">
                     <div className="widget footer-widget">
                        <div className="th-widget-about">
                           <div className="about-logo">
                              {footerlogoOn && (
                                 <Link onClick={ClickHandler} to="/home">
                                    <img src={logo} alt="Atek" />
                                 </Link>
                              )}
                              {footerlogotwo && (
                                 <Link onClick={ClickHandler} to="/home">
                                    <img src={logo2} alt="Atek" />
                                 </Link>
                              )}
                           </div>
                           <p className="about-text">
                              Rapidiously myocardinate cross-platform intellectual capital
                              model. Appropriately create interactive infrastructures
                           </p>
                           <div className="th-social">
                              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                                 <i className="fab fa-facebook-f"></i>
                              </a>
                              <a target="_blank" rel="noreferrer" href="https://www.twitter.com/">
                                 <i className="fab fa-twitter"></i>
                              </a>
                              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                                 <i className="fab fa-linkedin-in"></i>
                              </a>
                              <a target="_blank" rel="noreferrer" href="https://www.whatsapp.com/">
                                 <i className="fab fa-whatsapp"></i>
                              </a>
                              <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                                 <i className="fab fa-instagram"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-xl-auto">
                     <div className="widget widget_nav_menu footer-widget">
                        <h3 className="widget_title">Useful Link</h3>
                        <ul className="menu">
                           <li>
                              <Link onClick={ClickHandler} to="/home">
                                 Home
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/about">
                                 About us
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/service">
                                 Our Service
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/contact">
                                 Terms of Service
                              </Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/service">
                                 News & Media
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <div className="col-md-6 col-xl-auto">
                     <div className="widget footer-widget">
                        <h3 className="widget_title">Get In Touch</h3>
                        <div className="th-widget-contact">
                           <div className="info-box_text">
                              <div className="icon">
                                 <img src={phone} alt="Phone" />
                              </div>
                              <div className="details">
                                 <p>
                                    <a href="tel:+01234567890" className="info-box_link">
                                       +01 234 567 890
                                    </a>
                                 </p>
                                 <p>
                                    <a href="tel:+09876543210" className="info-box_link">
                                       +09 876 543 210
                                    </a>
                                 </p>
                              </div>
                           </div>
                           <div className="info-box_text">
                              <div className="icon">
                                 <img src={envelope} alt="Email" />
                              </div>
                              <div className="details">
                                 <p>
                                    <a href="mailto:mailinfo00@atek.com" className="info-box_link">
                                       mailinfo00@atek.com
                                    </a>
                                 </p>
                                 <p>
                                    <a href="mailto:support24@atek.com" className="info-box_link">
                                       support24@atek.com
                                    </a>
                                 </p>
                              </div>
                           </div>
                           <div className="info-box_text">
                              <div className="icon">
                                 <img src={location} alt="Location" />
                              </div>
                              <div className="details">
                                 <p>
                                    <a
                                       href="https://maps.app.goo.gl/QyH2fFoJ9fii93mt7"
                                       target="_blank"
                                       rel="noreferrer"
                                    >
                                       789 Inner Lane, Holy park, California, USA
                                    </a>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-xl-auto">
                     <div className="widget footer-widget">
                        <h3 className="widget_title">Instagram Post</h3>
                        <div className="sidebar-gallery">
                           {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map(
                              (img, i) => (
                                 <div className="gallery-thumb" key={i}>
                                    <img src={img} alt="Gallery Image" />
                                    <a
                                       target="_blank"
                                       rel="noreferrer"
                                       href="https://www.instagram.com/"
                                       className="gallery-btn"
                                    >
                                       <i className="fab fa-instagram"></i>
                                    </a>
                                 </div>
                              )
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="copyright-wrap">
            <div className="container">
               <div className="row justify-content-lg-between align-items-center">
                  <div className="col-lg-6">
                     <p className="copyright-text">
                        Copyright © 2025{' '}
                        <Link onClick={ClickHandler} to="/home">
                           Atek
                        </Link>. All Rights Reserved.
                     </p>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end">
                     <ul className="footer-links">
                        <li>
                           <Link onClick={ClickHandler} to="/about">
                              Terms & Conditions
                           </Link>
                        </li>
                        <li>
                           <Link onClick={ClickHandler} to="/about">
                              Careers
                           </Link>
                        </li>
                        <li>
                           <Link onClick={ClickHandler} to="/about">
                              Privacy Policy
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FooterArea;
