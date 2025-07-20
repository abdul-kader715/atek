
import { Link } from 'react-router-dom';
import guide from '../../img/icon/guide.svg';
import map3 from '../../img/icon/map3.svg';
import aboutright from '../../img/normal/about-right-img.jpg';
import Ab1 from '../../img/normal/about_1_1.jpg';
import Ab2 from '../../img/normal/about_1_2.jpg';
import Ab3 from '../../img/normal/about_1_3.jpg';
import shape1 from '../../img/shape/ab-1-shape-1.png';
import shape2 from '../../img/shape/ab-1-shape-2.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';
import type { FC } from 'react';

interface AboutAreaProps{ 
   className?:string;
}

const AboutArea:FC<AboutAreaProps> = ({ className = '' }) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   };
   return (
      <div className={className} id="about-sec">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div className="img-box1">
                     <div className="img1">
                        <img src={Ab1} alt="About" />
                     </div>
                     <div className="img2">
                        <img src={Ab2} alt="About" />
                     </div>
                     <div className="img3">
                        <img src={Ab3} alt="About" />
                     </div>
                  </div>
               </div>

               <div className="col-xl-6">
                  <div className="ps-xl-4 ms-xxl-4">
                     <div className="title-area about1-title-box mb-20 pe-xxl-5 me-xxl-5">
                        <span className="sub-title style1 text-anime-style-2">About Us Our Company</span>
                        <h2 className="sec-title mb-20 heading text-anime-style-3">Solutions That Evolve with Your Business</h2>
                        <p className="sec-text mb-30">
                           IT solutions refer to a broad range of services and technologies designed to address specific business needs, streamline operations, and drive growth. These solutions encompass hardware.
                        </p>
                     </div>

                     <div className="about-item-wrap">
                        <div className="about-item">
                           <div className="about-item_img"><img src={map3} alt="" /></div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Manage Tech Services</h5>
                              <p className="about-item_text">There are many variations of passages of available but the majority.</p>
                           </div>
                        </div>

                        <div className="about-item">
                           <div className="about-item_img"><img src={guide} alt="" /></div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Internal Networking</h5>
                              <p className="about-item_text">There are many variations of passages of available but the majority.</p>
                           </div>
                        </div>
                     </div>

                     <div className="mt-35">
                        <Link onClick={ClickHandler} to="/about" className="th-btn th-icon">
                           Learn More <i className="fa-light fa-arrow-right-long"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            <ShapeMockup className="shape-mockup shape1 d-none d-xl-block" top="12%" right="-16%">
                <img src={shape1} alt="shape" />
            </ShapeMockup>
            <ShapeMockup className="shape-mockup shape3 d-none d-xl-block" bottom="2%" left="-20%">
                <img src={shape2} alt="shape" />
            </ShapeMockup>

            <ShapeMockup className="shape-mockup about-shape movingX d-none d-xxl-block" bottom="20%" right="-11%">
                <img src={aboutright} alt="shape" />
            </ShapeMockup>
         </div>
      </div>
   );
};

export default AboutArea;
