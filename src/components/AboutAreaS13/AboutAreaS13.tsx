import  { type FC } from 'react';
import { Link } from 'react-router-dom';

import ab1 from '../../img/normal/ab_12_1.jpg';
import ab2 from '../../img/normal/ab_12_2.jpg';
import ab3 from '../../img/normal/ab_12_3.jpg';
import icon1 from '../../img/icon/map3.svg';
import icon2 from '../../img/icon/guide.svg';
import icon3 from '../../img/icon/headphone.svg';

const AboutSection: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="about-area position-relative overflow-hidden space-top" id="about-sec">
      <div className="container">
        <div className="row">

          <div className="col-xl-7">
            <div className="about-imgbox12 img-box3">
              <div className="img1 text-center ps-xl-5 ms-xl-5">
                <img src={ab1} alt="About" />
              </div>
              <div className="img2">
                <img src={ab2} alt="About" />
              </div>
              <div className="img3 text-center text-md-end">
                <img src={ab3} alt="About" />
              </div>
            </div>
          </div>

          <div className="col-xl-5">
            <div className="title-area about-12-titlebox mb-20 pe-xxl-1 me-xxl-1">
              <span className="sub-title style1 text-anime-style-2">About Us</span>
              <h2 className="sec-title mb-20 text-anime-style-3">Unlocking Growth with Data Science.</h2>
              <p className="sec-text mb-30 scroll-text-animation" data-animation="fade_from_bottom">
                Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights,
                optimize performance, and support data-driven decision-making. It helps businesses.
              </p>
            </div>

            <div className="about-12-item-wrap scroll-text-animation" data-animation="fade_from_bottom">

              <div className="about-item">
                <div className="about-item_img">
                  <img src={icon1} alt="Manage Tech Services" />
                </div>
                <div className="about-item_centent">
                  <h5 className="box-title">Manage Tech Services</h5>
                  <p className="about-item_text">There are many variations of passages of available but the majority.</p>
                </div>
              </div>

              <div className="about-item">
                <div className="about-item_img">
                  <img src={icon2} alt="Internal Networking" />
                </div>
                <div className="about-item_centent">
                  <h5 className="box-title">Internal Networking</h5>
                  <p className="about-item_text">There are many variations of passages of available but the majority.</p>
                </div>
              </div>

              <div className="about-item">
                <div className="about-item_img">
                  <img src={icon3} alt="Artificial Intelligence (AI)" />
                </div>
                <div className="about-item_centent">
                  <h5 className="box-title">Artificial Intelligence (AI)</h5>
                  <p className="about-item_text">There are many variations of passages of available but the majority.</p>
                </div>
              </div>

              <div className="mt-35">
                <Link onClick={ClickHandler} to="/about" className="th-btn btn-2 style5 th-icon">
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

export default AboutSection;
