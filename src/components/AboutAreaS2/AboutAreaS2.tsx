
import { Link } from 'react-router-dom'
import checkmark from '../../img/icon/checkmark.svg'
import ad1 from '../../img/normal/about_15_1.jpg'
import ad2 from '../../img/normal/about_15_2.jpg'
import ad3 from '../../img/normal/about_15_3.jpg'
import shape from '../../img/shape/shape_2_1.png'
import ShapeMockup from '../ShapeMockup/ShapeMockup'
import type { FC } from 'react';

interface AboutAreaS2Props{ 
   className?:string;
}


const AboutAreaS2:FC<AboutAreaS2Props> =({ className = '' }) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={className} id="about-sec">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div className="img-box15 d-flex justify-content-center">
                     <div className="img1 d-none d-md-block">
                        <img src={ad1} alt="About" />
                        <img src={ad2} alt="About" />
                     </div>
                     <div className="img2">
                        <img src={ad3} alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="about-15-title-box ps-xl-3 ms-xl-5">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 text-anime-style-2">About Us</span>
                        <h2 className="sec-title mb-25 text-anime-style-3">Cloud Solutions for Every Business: Simplify, Scale, Succeed</h2>
                     </div>
                     <>

                        <p className="sec-text mb-30 me-xl-3 scroll-text-animation" data-animation="fade_from_bottom">
                           Cloud computing solutions provide businesses with the ability to store, manage, and process data and applications over the internet instead of relying on local servers or personal devices. These solutions offer scalability, flexibility, and cost-efficiency, enabling organizations.
                        </p>
                     </>

                     <div className="about-feature-wrap scroll-text-animation" data-animation="fade_from_bottom">
                        <div className="about-feature-list">
                           <ul>
                              <li>
                                 <span className="about-feature-icon"><img src={checkmark} alt="" /></span>
                                 Data Storage and Backup
                              </li>
                              <li>
                                 <span className="about-feature-icon"><img src={checkmark} alt="" /></span>
                                 Data Backup and Disaster Recovery
                              </li>
                              <li>
                                 <span className="about-feature-icon"><img src={checkmark} alt="" /></span>
                                 Hybrid and Multi-Cloud Solutions
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="mt-35">
                        <Link onClick={ClickHandler} to="/about" className="th-btn th-icon">Discover More <i className="fa-light fa-arrow-right-long"></i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ShapeMockup className="shape-mockup jump z-index-1 d-none d-xl-block" bottom="12%" right="5.5%">
            <img src={shape} alt="shape" />
         </ShapeMockup>
      </div>
   );
};

export default AboutAreaS2;