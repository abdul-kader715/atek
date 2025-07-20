import { type FC } from 'react';
import { Link } from 'react-router-dom';
import Cbg from '../../img/bg/cta_bg_3.jpg';
import app from '../../img/normal/app_mockup.png';
import left from '../../img/normal/cta-left-img.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

interface CtaAreaProps {
   className?: string;
}

const CtaArea: FC<CtaAreaProps> = ({ className }) => {
   const handleClick = () => {
      window.scrollTo(10, 0);
   };

   return (
      <div className={className}>
         <div
            className="cta-sec5 bg-title background-image"
            style={{ backgroundImage: `url(${Cbg})` }}
         >
            <div className="container">
               <div className="row align-items-center justify-content-center">

                  <div className="col-lg-6">
                     <div className="space">
                        <div className="title-area cta-4_title-box mb-40">
                           <span className="sub-title style1 text-white mb-10 text-anime-style-2">
                              You Are Work With Us
                           </span>
                           <h2 className="sec-title text-white text-anime-style-3">
                              Still Confused About Our Features?
                           </h2>
                           <h2 className="duration-title text-white text-anime-style-3">
                              Get a Free Trial 7 Days
                           </h2>
                           <p className="text-white text-anime-style-3">
                              Automating threat detection and response to keep pace with evolving threats.
                           </p>
                        </div>

                        <div
                           className="btn-group cta-4-action scroll-text-animation"
                           data-animation="fade_from_bottom"
                        >
                           <Link
                              onClick={handleClick}
                              to="/contact"
                              className="th-btn th-icon"
                           >
                              Contact With Us <i className="fa-light fa-arrow-right-long"></i>
                           </Link>
                           <Link
                              onClick={handleClick}
                              to="/contact"
                              className="th-btn style6 th-icon"
                           >
                              Download App <i className="fa-light fa-arrow-right-long"></i>
                           </Link>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6">
                     <div className="app-mockup movingX">
                        <img src={app} alt="App mockup interface" />
                     </div>
                  </div>

               </div>
            </div>

            <ShapeMockup
               className="shape-mockup d-none d-xxl-block"
               bottom="0%"
               right="0%"
            >
               <img src={left} alt="Decorative shape" />
            </ShapeMockup>
         </div>
      </div>
   );
};

export default CtaArea;
