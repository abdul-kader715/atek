import type { FC } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from '../ModalVideo/ModalVideo';
import guide from '../../img/icon/guide.svg';
import headphone from '../../img/icon/headphone.svg';
import map3 from '../../img/icon/map3.svg';
import ab4 from '../../img/normal/about_2_1.jpg';
import ab42 from '../../img/normal/about_2_2.jpg';

interface AboutAreaS4Props {
  className?: string;
}

const AboutAreaS4: FC<AboutAreaS4Props> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${className}`} id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-xxl-7">
            <div className="img-box2">
              <div className="img1 scroll-text-animation" data-animation="fade_from_left">
                <img src={ab4} alt="About" />
              </div>
              <div className="img2">
                <img src={ab42} alt="About" />
                <ModalVideo vidclass={'play-btn popup-video'} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-5">
            <div>
              <div className="title-area about4-titlebox mb-20">
                <span className="sub-title style1 text-anime-style-2">About Us</span>
                <h2 className="sec-title mb-20 text-anime-style-2">
                  Innovate Faster, Scale Smarter with Us
                </h2>
              </div>
              <p className="sec-text mb-30 scroll-text-animation" data-animation="fade_from_bottom">
                A Startup Tech Agency specializes in providing innovative, scalable, and customized
                technology solutions to help startups build, grow, and succeed in a competitive market.
              </p>
              <div className="about-item-wrap scroll-text-animation" data-animation="fade_from_bottom">
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={map3} alt="Manage Tech Services Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Manage Tech Services</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the majority.
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={guide} alt="Internal Networking Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Internal Networking</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the majority.
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={headphone} alt="24/7 Customer Support Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">24/7 Customer Support</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the majority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-45 scroll-text-animation" data-animation="fade_from_bottom">
                <Link onClick={ClickHandler} to="/about" className="th-btn black-btn btn-2 th-radius th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaS4;
