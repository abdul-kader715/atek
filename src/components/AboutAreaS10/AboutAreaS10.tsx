import  { type FC } from 'react';
import { Link } from 'react-router-dom';

import shape from '../../img/normal/about-slide-img.png';
import shield from '../../img/icon/shield.svg';
import ShapeMockup from '../ShapeMockup/ShapeMockup';
import about_9 from '../../img/normal/about_9_1.jpg';
import about_10 from '../../img/normal/about_9_2.jpg';
import shape_10 from '../../img/shape/about_9_1_shape.png';
import shape_12 from '../../img/shape/about_9_2_shape.png';

interface AboutAreaS10Props {
  className?: string;
}

const AboutAreaS10: FC<AboutAreaS10Props> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className={`${className}`} id="about-sec">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-6">
            <div className="about10 img-box10 position-relative">
              <div
                className="img1 bg-mask"
                style={{
                  WebkitMaskImage: `url(${shape_10})`,
                  maskImage: `url(${shape_10})`,
                  WebkitMaskSize: 'cover',
                  maskSize: 'cover',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              >
                <img src={about_9} alt="About" />
              </div>
              <div
                className="img2 bg-mask"
                style={{
                  WebkitMaskImage: `url(${shape_12})`,
                  maskImage: `url(${shape_12})`,
                  WebkitMaskSize: 'cover',
                  maskSize: 'cover',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              >
                <img src={about_10} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xxl-5 ms-xxl-4">
              <div className="title-area about10-titlebox mb-20">
                <span className="sub-title style1 text-anime-style-2">About Us</span>
                <h2 className="sec-title mb-20 heading text-anime-style-3">
                  Unlocking Potential with Tailored IT Solutions
                </h2>
                <p className="sec-text mb-30 scroll-text-animation" data-animation="fade_from_bottom">
                  IT Solutions encompass a wide range of services, technologies, and strategies designed to
                  address the technological needs of businesses and organizations. These solutions are tailored
                  to improve efficiency, enhance productivity, ensure security, and drive innovation.
                </p>
              </div>
              <div className="about10-item-wrap scroll-text-animation" data-animation="fade_from_bottom">
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={shield} alt="Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Increased Efficiency</h5>
                    <p className="about-item_text">
                      Automating repetitive tasks and streamlining workflows to save time and resources.
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={shield} alt="Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Competitive Advantage</h5>
                    <p className="about-item_text">
                      Leveraging cutting-edge technology to stay ahead in the market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35 scroll-text-animation" data-animation="fade_from_bottom">
                <Link onClick={ClickHandler} to="/about" className="th-btn th-radius th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ShapeMockup className="shape-mockup about-shape movingX d-none d-xxl-block" bottom="0%" right="-11%">
          <img src={shape} alt="shape" />
        </ShapeMockup>
      </div>
    </div>
  );
};

export default AboutAreaS10;
