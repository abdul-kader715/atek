import type { FC } from 'react';
import { Link } from 'react-router-dom';
import guide from '../../img/icon/guide.svg';
import headphone from '../../img/icon/headphone.svg';
import map3 from '../../img/icon/map3.svg';
import Ab31 from '../../img/normal/about_3_1.jpg';
import Ab32 from '../../img/normal/about_3_2.jpg';
import Ab33 from '../../img/normal/about_3_3.jpg';
import shape from '../../img/shape/cp-gp-shape.png';
import small from '../../img/shape/small-cloud.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

interface AboutAreaS3Props {
  className?: string;
}

const AboutAreaS3: FC<AboutAreaS3Props> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={className} id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="img-box3">
              <div className="img1 scroll-text-animation" data-animation="fade_from_left">
                <img src={Ab31} alt="About" />
              </div>
              <div className="img2 scroll-text-animation" data-animation="fade_from_right">
                <img src={Ab32} alt="About" />
              </div>
              <div className="img3 movingX">
                <img src={Ab33} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="ps-xxl-3">
              <div className="title-area about-3-titlebox mb-20 pe-xxl-1 me-xxl-1">
                <span className="sub-title style1 text-anime-style-2">About The AI Machine Learning</span>
                <h2 className="sec-title mb-20 text-anime-style-3">
                  The world's leading AI & machine learning company
                </h2>
              </div>
              <p className="sec-text mb-30 scroll-text-animation" data-animation="fade_from_bottom">
                Artificial Intelligence (AI) and Machine Learning (ML) are transformative technologies that enable machines to mimic human intelligence, learn from data, and make decisions with minimal human intervention. These technologies power a wide range of applications.
              </p>
              <div className="about-item-wrap scroll-text-animation" data-animation="fade_from_bottom">
                <div className="about-item">
                  <div className="about-item_img"><img src={map3} alt="Manage Tech Services Icon" /></div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Manage Tech Services</h5>
                    <p className="about-item_text">There are many variations of passages of available but the majority.</p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-item_img"><img src={guide} alt="Internal Networking Icon" /></div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Internal Networking</h5>
                    <p className="about-item_text">There are many variations of passages of available but the majority.</p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-item_img"><img src={headphone} alt="Artificial Intelligence Icon" /></div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Artificial Intelligence (AI)</h5>
                    <p className="about-item_text">There are many variations of passages of available but the majority.</p>
                  </div>
                </div>
              </div>
              <div className="mt-35 scroll-text-animation" data-animation="fade_from_bottom">
                <Link onClick={ClickHandler} to="/about" className="th-btn black-btn th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShapeMockup
        className="shape-mockup jump d-none d-xxl-block"
        bottom="25%"
        left="6%"
      >
        <img src={small} alt="shape" />
      </ShapeMockup>
      <ShapeMockup
        className="shape-mockup jump d-none d-xxl-block"
        bottom="10%"
        right="4%"
      >
        <img src={shape} alt="shape" />
      </ShapeMockup>
    </div>
  );
};

export default AboutAreaS3;
