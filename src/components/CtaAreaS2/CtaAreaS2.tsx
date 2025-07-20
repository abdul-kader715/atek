import { type FC } from 'react';
import { Link } from 'react-router-dom';
import cta from '../../img/normal/cta-img-6.jpg';
import cta6 from '../../img/shape/cta6-shape.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

interface CtaAreaS2Props {
   className?: string;
}

const CtaAreaS2: FC<CtaAreaS2Props> = ({ className }) => {
   const handleClick = () => {
      window.scrollTo(10, 0);
   };

   return (
      <div className={className}>
         <div className="cta-sec6 theme-bg position-relative overflow-hidden">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 col-lg-6">
                     <div className="cta-area6 text-center text-md-start space position-relative">
                        <div className="title-area mb-40">
                           <h2 className="sec-title text-white pe-xl-5 me-xl-4 mt-n3 text-anime-style-2">
                              <span className="discount-text">Grab up to 35% off</span>
                              Have any project to work with us
                           </h2>
                           <p
                              className="text-white scroll-text-animation"
                              data-animation="fade_from_bottom"
                           >
                              Limited time offer, don't miss the opportunity
                           </p>
                        </div>

                        <div
                           className="btn-group scroll-text-animation"
                           data-animation="fade_from_bottom"
                        >
                           <Link
                              onClick={handleClick}
                              to="/contact"
                              className="th-btn style5 th-radius th-icon"
                           >
                              Contact With Us <i className="fa-light fa-arrow-right-long"></i>
                           </Link>
                        </div>

                        <div className="cta6-shape">
                           <img src={cta6} alt="Decorative shape" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <ShapeMockup className="shape-mockup" bottom="0%" right="0">
               <img src={cta} alt="CTA background" />
            </ShapeMockup>
         </div>
      </div>
   );
};

export default CtaAreaS2;
