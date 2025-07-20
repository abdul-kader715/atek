import type { FC } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../img/bg/shape_bg_1.png';
import ab1 from '../../img/normal/about_5_1.jpg';

interface AboutAreaS6Props {
  className?: string;
}

const AboutAreaS6: FC<AboutAreaS6Props> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={className}
      id="about-sec"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-4 order-1 order-xl-0">
            <div className="about-area6 text-center text-md-start">
              <div className="title-area mb-20">
                <span className="sub-title style1 text-anime-style-2">
                  It Support For Business
                </span>
                <h2 className="sec-title mb-20 text-anime-style-3">
                  Revolutionizing Businesses with SaaS: The Future of Software Solutions
                </h2>
              </div>
              <p
                className="sec-text mb-30 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                Software as a Service (SaaS) is a cloud-based business model where software applications
                are delivered over the internet on a subscription basis. SaaS products are accessible
                via web browsers, eliminating the need for users to install or maintain software locally.
              </p>
              <div
                className="about-item-wrap scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="about-item style6">
                  <span className="icon">
                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                  </span>
                  <div className="about-item_centent">
                    <h5 className="box-title">Trusted and Accurate</h5>
                    <p className="about-item_text">
                      Use SASS to define typography styles including font families, sizes, colors, and spacing
                      to create.
                    </p>
                  </div>
                </div>
                <div className="about-item style6">
                  <span className="icon">
                    <i className="fa-solid fa-building"></i>
                  </span>
                  <div className="about-item_centent">
                    <h5 className="box-title">Hired By Top Company</h5>
                    <p className="about-item_text">
                      Define a cohesive color scheme using SASS variables to maintain consistency across the
                      landing page.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="mt-35 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <Link onClick={ClickHandler} to="/about" className="th-btn th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-0 order-xl-2">
            <div className="img-box5 text-xl-end">
              <div className="img1">
                <img src={ab1} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaS6;
