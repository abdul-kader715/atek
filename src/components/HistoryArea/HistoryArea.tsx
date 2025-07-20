import { Link } from 'react-router-dom';
import bg_2_1 from '../../img/bg/h-bg_2_1.jpg';
import bg_2_2 from '../../img/bg/h-bg_2_2.jpg';
import currency from '../../img/icon/currency.svg';
import currency2 from '../../img/icon/web-currency.svg';
import type { FC } from 'react';

const HistoryArea: FC = () => {
  return (
    <div className="history2-area overflow-hidden light-bg">
      <div className="container th-container">
        <div className="story-wrapp">
          <div className="row gy-30 justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="story-card story-card2">
                <div className="story-content">
                  <h3 className="story-title">
                    100% <br />
                    Dedication
                  </h3>
                  <p className="sec-text">
                    we offer a comprehensive range of
                    <br />
                    innovative financial services tailored to
                    <br />
                    meet your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div
                className="story-card story-card2 story-bg background-image"
                style={{ backgroundImage: `url(${bg_2_1})` }}
              >
                <div className="story-content">
                  <span className="story-icon mb-30">
                    <img src={currency} alt="" />
                  </span>
                  <h3 className="box-title">
                    Hold money in 30+ <br />
                    currencies
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
              <div
                className="story-card story-card2 story-bg background-image"
                style={{ backgroundImage: `url(${bg_2_2})` }}
              >
                <div className="story-content">
                  <span className="story-icon web-icon mb-30">
                    <img src={currency2} alt="" />
                  </span>
                  <h3 className="box-title">
                    Transfers across the <br />
                    globe are free
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-4 col-lg-6 col-md-6">
              <div className="story-card story-card2 brand-bg d-flex align-items-center justify-content-center">
                <div className="story-content text-center">
                  <h3 className="box-title">
                    <Link to="/service">Visit Our Services page</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryArea;
