import { Link } from 'react-router-dom';
import heroBg from '../../img/bg/hero_bg_6_1.jpg';
import shape1 from '../../img/shape/hero-6-shape-1.png';
import shape2 from '../../img/shape/hero-6-shape-2.png';
import shape3 from '../../img/shape/hero-6-shape-3.png';
import shapeGrid from '../../img/shape/hero-grid.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

const HeroAreaS6 = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   };

   return (
      <div
         className="hero-6 background-image"
         id="hero"
         style={{ backgroundImage: `url(${heroBg})` }}
      >
         <div className="hero-6-wrapper">
            <div className="hero-inner">
               <div className="hero-shape-grid">
                  <img src={shapeGrid} alt="grid-shape" />
               </div>
               <div className="container">
                  <div className="hero-style6">
                     <Link
                        onClick={ClickHandler}
                        to="/contact"
                        className="hero-info mb-30"
                     >
                        What’s new? Instantly issue virtual card’s{' '}
                        <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                     </Link>
                     <h1 className="hero-title">
                        Managing business data has never been easier
                     </h1>
                     <p className="hero-text">
                        Software as a Service (SaaS) is a cloud-based business model where
                        software applications are delivered.
                     </p>
                     <div className="btn-group">
                        <Link
                           onClick={ClickHandler}
                           to="/contact"
                           className="th-btn th-icon"
                        >
                           Get Started Now{' '}
                           <i className="fa-light fa-arrow-up-right"></i>
                        </Link>
                     </div>
                  </div>

                  <ShapeMockup
                     className="shape-mockup jump d-none d-xl-block"
                     bottom="0"
                     left="0"
                  >
                     <img src={shape1} alt="shape-1" />
                  </ShapeMockup>

                  <ShapeMockup
                     className="shape-mockup jump"
                     bottom="-25%"
                     left="33%"
                  >
                     <img src={shape2} alt="shape-2" />
                  </ShapeMockup>

                  <ShapeMockup
                     className="shape-mockup jump d-none d-xl-block"
                     bottom="0"
                     right="-12%"
                  >
                     <img src={shape3} alt="shape-3" />
                  </ShapeMockup>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroAreaS6;
