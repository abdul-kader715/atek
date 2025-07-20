import { type FC } from 'react';
import icon1 from '../../img/icon/feature_1_1.svg';
import icon2 from '../../img/icon/feature_1_2.svg';
import icon3 from '../../img/icon/feature_1_3.svg';

interface FeatureAreaProps {
  className?: string;
}

const FeatureArea: FC<FeatureAreaProps> = ({ className = '' }) => {
  return (
    <section className={className}>
      <div className="feature-list-wrap">
        <div className="feature-area overflow-hidden" id="feature-area">
          <div className="row gx-0 justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <div className="feature-item d-flex align-items-start">
                <div className="feature-item_icon">
                  <img src={icon1} alt="Highly Expert Team Icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">Highly Expert Team</h3>
                  <p className="feature-item_text">We provide the most responsive and functional IT design</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="feature-item d-flex align-items-start">
                <div className="feature-item_icon">
                  <img src={icon2} alt="24/7 Customer Service Icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">24/7 Customer Service</h3>
                  <p className="feature-item_text">We provide the most responsive and functional IT design</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="feature-item d-flex align-items-start">
                <div className="feature-item_icon">
                  <img src={icon3} alt="Competitive Pricing Icon" />
                </div>
                <div className="media-body">
                  <h3 className="box-title text-anime-style-2">Competitive Pricing</h3>
                  <p className="feature-item_text">We provide the most responsive and functional IT design</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;
