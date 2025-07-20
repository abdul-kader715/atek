import type { FC } from 'react';
import { Link } from 'react-router-dom';
import about_7_1 from '../../img/normal/about_7_1.jpg';
import about_7_2 from '../../img/normal/about_7_2.jpg';
import about_7_3 from '../../img/normal/about_7_3.jpg';
import shield from '../../img/icon/shield.svg';

interface AboutAreaS8Props {
  className?: string;
}

const AboutAreaS8: FC<AboutAreaS8Props> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={className} id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="title-area mb-20">
              <span className="sub-title style1 text-anime-style-2">Who We Are</span>
              <h2 className="sec-title mb-20 text-anime-style-3">We Build Software That Builds Businesses.</h2>
              <p
                className="sec-text mb-60 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                A software development company specializes in designing, developing, and deploying software
                applications tailored to meet specific client needs. These companies combine technical expertise
                with innovative strategies to deliver cutting-edge solutions for businesses across various industries.
                From mobile apps to enterprise software, their services ensure that clients can achieve operational
                efficiency, scalability.
              </p>
            </div>
            <div className="img-box8">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="img1 global-img scroll-text-animation" data-animation="fade_from_left">
                    <img src={about_7_1} alt="About" />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <div className="img2 global-img">
                    <img src={about_7_2} alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="img-box8 ms-xl-5">
              <div className="img3 global-img scroll-text-animation" data-animation="fade_from_bottom">
                <img src={about_7_3} alt="About" />
              </div>
              <div className="about-item-wrap scroll-text-animation" data-animation="fade_from_bottom">
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={shield} alt="Technical Expertise Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Technical Expertise</h5>
                    <p className="about-item_text">
                      Access to a team of skilled developers, designers, and project managers.
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={shield} alt="Custom Solutions Icon" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Custom Solutions</h5>
                    <p className="about-item_text">
                      Development tailored to specific business needs, ensuring better alignment with goals.
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

export default AboutAreaS8;
