import { type FC } from 'react';
import icon from '../../img/icon/fea-3-1.svg';
import icon2 from '../../img/icon/fea-3-2.svg';
import icon3 from '../../img/icon/fea-3-3.svg';

interface FeatureAreaS2Props {
  className?: string;
}

const FeatureAreaS2: FC<FeatureAreaS2Props> = ({ className = '' }) => {
  return (
    <div className={`${className}`} id="feature-area">
      <div className="container">
        <div className="featured-wrapp-3">
          <div className="row gy-4 justify-content-center">

            <div className="col-lg-6 col-xl-4">
              <div className="feature-item d-sm-flex align-content-center text-center text-sm-start wow fadeInUp">
                <div className="feature-item_icon">
                  <img src={icon} alt="Block Hackers Icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">Block to all Hackers</h3>
                  <p className="feature-item_text text-anime-style-2">
                    Cybersecurity refers to the practice of protecting computer systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="feature-item d-sm-flex align-content-center text-center text-sm-start wow fadeInDown">
                <div className="feature-item_icon">
                  <img src={icon2} alt="Account Protection Icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">Stop Account Takeovers</h3>
                  <p className="feature-item_text text-anime-style-2">
                    This adds an extra layer of security by requiring a second form of verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="feature-item d-sm-flex align-content-center text-center text-sm-start wow fadeInUp">
                <div className="feature-item_icon">
                  <img src={icon3} alt="Private Internet Icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">Private Internet Connection</h3>
                  <p className="feature-item_text text-anime-style-2">
                    Ensure your internet connection is secure, encrypted, and not accessible to third parties.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAreaS2;
