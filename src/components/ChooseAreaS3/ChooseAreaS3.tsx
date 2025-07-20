import { type FC } from 'react';
import checkmark from '../../img/icon/checkmark.svg';
import choose_4_1 from '../../img/choose/choose_4_1.jpg';
import choose_4_2 from '../../img/choose/choose_4_2.jpg';
import choose_4_3 from '../../img/choose/choose_4_3.jpg';
import { Link } from 'react-router-dom';

interface ChooseAreaS3Props {
  className?: string;
}

const ChooseAreaS3: FC<ChooseAreaS3Props> = (props) => {
  return (
    <section className={`${props.className}`}>
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-xl-5 order-1 order-xl-0">
            <div className="title-area mt-40 mb-20 pe-xl-5">
              <span className="sub-title text-anime-style-2">Why Choose Us</span>
              <h2 className="sec-title text-anime-style-3">The Art of Web & Mobile Development</h2>
            </div>
            <div className="about-item style-16">
              <div className="about-content">
                <p
                  className="about-text scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Web and app development is the cornerstone of digital transformation. By creating innovative and user-centric platforms, businesses can improve their reach, enhance engagement, and stay ahead in a competitive market.
                </p>
                <div className="about-featured-box d-flex align-items-start">
                  <div className="about-feature pe-xl-4">
                    <ul>
                      <li>
                        <span className="icon">
                          <img src={checkmark} alt="" />
                        </span>
                        Increased Visibility
                      </li>
                      <li>
                        <span className="icon">
                          <img src={checkmark} alt="" />
                        </span>
                        Data Collection
                      </li>
                      <li>
                        <span className="icon">
                          <img src={checkmark} alt="" />
                        </span>
                        Blockchain Technology
                      </li>
                    </ul>
                  </div>
                  <div className="about-feature">
                    <ul>
                      <li>
                        <span className="icon">
                          <img src={checkmark} alt="" />
                        </span>
                        Business Growth
                      </li>
                      <li>
                        <span className="icon">
                          <img src={checkmark} alt="" />
                        </span>
                        Improved Accessibility
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about-btn mt-30">
                  <Link to="/contact" className="th-btn th-icon">
                    Get Started Now <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 order-0 order-xl-1">
            <div className="choose-wrapper text-end position-relative mb-80">
              <div className="choose-item4">
                <div className="choose-img">
                  <img src={choose_4_1} alt="" />
                </div>
              </div>
              <div className="choose-item4">
                <div className="choose-img">
                  <img src={choose_4_2} alt="" />
                </div>
              </div>
              <div className="choose-item4">
                <div className="choose-img">
                  <img src={choose_4_3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseAreaS3;
