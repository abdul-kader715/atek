import type { FC } from 'react';
import { Link } from 'react-router-dom';
import shield from '../../img/icon/shield.svg';
import ab51 from '../../img/normal/about_4_1.jpg';
import ab52 from '../../img/normal/about_4_2.jpg';
import shape from '../../img/shape/about-5-shape.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';
import VideoModal from '../ModalVideo/ModalVideo';

interface AboutAreaS5Props {
  className?: string;
}

const AboutAreaS5: FC<AboutAreaS5Props> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${className}`} id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box4 ab5-imgbox space-bottom text-end">
              <div className="img1 scroll-text-animation" data-animation="fade_from_right">
                <img src={ab51} alt="About" />
              </div>
              <div className="img2">
                <img src={ab52} alt="About" />
                <VideoModal vidclass={'play-btn popup-video'} />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ab5-wrapp mt-40">
              <div className="title-area">
                <span className="sub-title style1 text-anime-style-2">About Us</span>
                <h2 className="sec-title text-anime-style-2">The Perfect Solution For All The Protection.</h2>
                <p
                  className="sec-text mb-30 scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Cybersecurity refers to the practice of protecting computer systems, networks, devices,
                  and data from unauthorized access, cyberattacks, theft, or damage. It encompasses a range
                  of technologies, processes. and practices designed to safeguard digital assets and ensure.
                </p>
              </div>
              <div className="about-item-wrap scroll-text-animation" data-animation="fade_from_bottom">
                <div className="about-item ab5-item">
                  <div className="about-item_img">
                    <img src={shield} alt="High Quality Service Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">High Quality Service</h5>
                    <p className="about-item_text">Practices designed to safeguard digital assets and ensure</p>
                  </div>
                </div>
                <div className="about-item ab5-item">
                  <div className="about-item_img">
                    <img src={shield} alt="Database Security Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Database Security</h5>
                    <p className="about-item_text">Practices designed to safeguard digital assets and ensure</p>
                  </div>
                </div>
              </div>
              <div
                className="mt-35 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <Link onClick={ClickHandler} to="/about" className="th-btn th-radius th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShapeMockup className="shape-mockup d-none d-xxl-block" bottom="0%" right="0%">
        <img src={shape} alt="shape" />
      </ShapeMockup>
    </div>
  );
};

export default AboutAreaS5;
