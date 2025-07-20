import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import gallery1 from '../../img/gallery/gallery-2-1.jpg';
import gallery2 from '../../img/gallery/gallery-2-2.jpg';
import gallery3 from '../../img/gallery/gallery-2-3.jpg';
import gallery4 from '../../img/gallery/gallery-2-4.jpg';

interface ServiceAreaS2Props {
  className?: string;
}

const ServiceAreaS2: FC<ServiceAreaS2Props> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div
      className="service-area bg-top-center position-relative space-bottom"
      id="service-sec"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">
                Services We’re Offering
              </span>
              <h2 className="sec-title text-anime-style-3">
                We Provide our Clients Best Cloud Computing Solution
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="service-list-area">
            {[gallery1, gallery2, gallery3, gallery4].map((img, idx) => (
              <div
                key={idx}
                className={`service-list-wrap gsap-cursor ${
                  activeIndex === idx ? 'active' : ''
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <div
                  className="service-list background-image"
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div className="case-action g4-bgn">
                    <Link
                      to="/gallery"
                      className="case-btn"
                      onClick={ClickHandler}
                    >
                      <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                  <div className="service-content g4-content">
                    <span className="service-subtitle">
                      Security, Technology
                    </span>
                    <h4 className="box-title">
                      <Link to="/gallery" onClick={ClickHandler}>
                        Analysis of Big Data Security
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaS2;
