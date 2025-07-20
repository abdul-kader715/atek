import { type FC } from 'react';
import icon1 from '../../img/icon/fea-4-1.svg';
import icon2 from '../../img/icon/fea-4-2.svg';
import icon3 from '../../img/icon/fea-4-3.svg';
import icon4 from '../../img/icon/fea-4-4.svg';

interface FeatureAreaS3Props {
  className?: string;
}

const FeatureAreaS3: FC<FeatureAreaS3Props> = ({ className = '' }) => {
  const features = [
    {
      icon: icon1,
      title: 'Cloud-Based Delivery',
      description: 'Software is hosted on the provider’s servers and accessed online. Eliminates the need.',
    },
    {
      icon: icon2,
      title: 'Subscription Model',
      description: 'Users pay a recurring fee, often monthly or annually, based on usage or features.',
    },
    {
      icon: icon3,
      title: 'Automatic Updates',
      description: 'Ensures users always have access to the latest features and security patches.',
    },
    {
      icon: icon4,
      title: 'Multi-Tenancy',
      description: 'Multiple users (tenants) share a single instance of the application while keeping their data isolated.',
    },
  ];

  return (
    <div className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="title-area feature-4-titlebox text-center">
              <span className="sub-title text-anime-style-2">Our Features</span>
              <h2 className="sec-title text-anime-style-3">Key Features of SaaS Business Products</h2>
              <p
                className="sec-text scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                This model provides businesses with flexibility, scalability, and cost savings,
                making it a <br /> preferred solution across industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area4">
        <div className="container">
          <div
            className="row gy-4 justify-content-center justify-content-lg-between scroll-text-animation"
            data-animation="fade_from_bottom"
          >
            {features.map((feature, idx) => (
              <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp" key={idx}>
                <div className="feature-item style-4 text-center">
                  <div className="feature_icon">
                    <img src={feature.icon} alt={`${feature.title} Icon`} />
                  </div>
                  <div className="feature_content">
                    <h3 className="box-title">{feature.title}</h3>
                    <p className="sec-text">{feature.description}</p>
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

export default FeatureAreaS3;
