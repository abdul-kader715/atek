import { Link } from 'react-router-dom';
import ModalVideo from '../ModalVideo/ModalVideo';
import center from '../../img/hero/card-center.webp';
import card from '../../img/hero/card-left.webp';
import right from '../../img/hero/card-right.webp';
import hero13 from '../../img/hero/hero13-bg.webp';
import hero13_shape from '../../img/shape/hero13-shape.png';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';
import type { FC } from 'react';

const HeroAreaS13: FC = () => {
  return (
    <div className="hero-13 light-bg" id="hero">
      <div
        className="hero13-style bg-mask"
        style={{
          WebkitMaskImage: `url(${hero13_shape})`,
          maskImage: `url(${hero13_shape})`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        <div
          className="hero13-bg background-image"
          style={{ backgroundImage: `url(${hero13})` }}
        >
          <div className="container">
            <div className="hero13-content">
              <h1 className="hero-title text-white mb-25">
                Transforming Payments with Blockchain Innovation
              </h1>
              <p className="hero-desc text-white mb-40">
                Unlock the potential of instant, low-cost and cross-chain
                blockchain <br /> payments with our fincatch network
              </p>
              <div className="btn-group">
                <Link to="/contact" className="th-btn style2 th-radius th-icon">
                  Get Started Now <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero13-cardbox d-flex justify-content-center">
            <div className="hero13-card-left">
              <img src={card} alt="" />
            </div>
            <div className="hero13-card-center">
              <img src={center} alt="" />
            </div>
            <div className="hero13-card-right">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="hero13-circle-text">
            <div className="company-wrapp">
              <ModalVideo vidclass={'icon popup-video'} />
              <div className="discount-wrapp">
                <div className="discount-tag">
                  <CircleTextS2 text="Explore More Explore More." method="letters" />
                </div>
              </div>
            </div>
          </div>
          <span className="hero13-shape-top th-line-shape">
            <span>
              <svg width="605" height="50" viewBox="0 0 605 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="line-1" opacity="0.5" d="M580.561 -507.083C629.228 -248.416 582.161 210.117 4.56097 -25.083" stroke="currentColor" strokeWidth="20" />
               </svg>
            </span>
          </span>
          <span className="hero13-shape-left th-line-shape d-none d-md-block">
            <span>
              <svg width="446" height="453" viewBox="0 0 446 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="line-1" opacity="0.5" d="M421.561 558C470.228 299.333 423.161 -159.2 -154.439 76" stroke="currentColor" strokeWidth="20" />
               </svg>
            </span>
          </span>
          <span className="hero13-shape-right th-line-shape d-none d-md-block">
            <span>
               <svg width="485" height="533" viewBox="0 0 485 533" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="line-1" opacity="0.5" d="M24.9996 558C-23.6671 299.333 23.3996 -159.2 601 76" stroke="currentColor" strokeWidth="20" />
               </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroAreaS13;
