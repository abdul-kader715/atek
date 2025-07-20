import type { FC } from 'react';
import { Link } from 'react-router-dom';
import about_6 from '../../img/normal/about_6_1.jpg';
import about_62 from '../../img/normal/about_6_2.jpg';
import about_63 from '../../img/normal/about_6_3.jpg';
import shield from '../../img/icon/th-shield.svg';

interface AboutAreaS7Props {
  className?: string;
}

const AboutAreaS7: FC<AboutAreaS7Props> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={className} id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 scroll-text-animation" data-animation="fade_from_left">
            <div className="img-box6">
              <div className="img1">
                <img src={about_6} alt="About" />
              </div>
              <div className="img2">
                <img src={about_62} alt="About" />
              </div>
              <div className="img3">
                <img src={about_63} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xl-3 ms-xl-3 ps-xxl-5 ms-xxl-5">
              <div className="title-area about-7-titlebox mb-20">
                <span className="sub-title style1 text-anime-style-2">About Us</span>
                <h2 className="sec-title mb-20 text-anime-style-3">The First Call You Make for Tech Solutions.</h2>
                <p
                  className="sec-text mb-30 scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Tech support services provide assistance to individuals and organizations in resolving technical issues related to hardware, software, networks, and other IT systems. These services are crucial for ensuring smooth operations, minimizing downtime.
                </p>
              </div>
              <div className="about-item-wrap scroll-text-animation" data-animation="fade_from_bottom">
                <div className="about-item">
                  <div className="about-item_img ab-img7">
                    <img src={shield} alt="AI-Powered Support Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">AI-Powered Support</h5>
                    <p className="about-item_text">
                      Virtual assistants and chatbots for faster resolution of common issues.
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-item_img ab-img7">
                    <img src={shield} alt="Predictive Maintenance Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Predictive Maintenance</h5>
                    <p className="about-item_text">
                      Leveraging data analytics to prevent issues before they occur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35 scroll-text-animation" data-animation="fade_from_bottom">
                <Link onClick={ClickHandler} to="/about" className="th-btn black-btn th-radius th-icon">
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

export default AboutAreaS7;
