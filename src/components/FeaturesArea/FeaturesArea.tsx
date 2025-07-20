import React, { type FC } from 'react';

import featureIcon1 from '../../img/icon/fea-5-1.svg';
import featureIcon2 from '../../img/icon/fea-5-2.svg';
import featureIcon3 from '../../img/icon/fea-5-3.svg';
import featureIcon4 from '../../img/icon/fea-5-4.svg';
import featureIcon5 from '../../img/icon/fea-5-5.svg';
import featureIcon6 from '../../img/icon/fea-5-6.svg';

interface Feature {
  icon: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: featureIcon1,
    title: 'Enhanced Security',
    text: 'Immutable and encrypted transactions prevent.',
  },
  {
    icon: featureIcon2,
    title: 'Transparency & Trust',
    text: 'Public ledgers ensure accountability.',
  },
  {
    icon: featureIcon3,
    title: 'Faster Transactions',
    text: 'Instant cross-border payments.',
  },
  {
    icon: featureIcon4,
    title: 'Cost Reduction',
    text: 'Eliminates intermediaries and reduces.',
  },
  {
    icon: featureIcon5,
    title: 'Financial Inclusion',
    text: 'Provides access to banking services',
  },
  {
    icon: featureIcon6,
    title: 'Smart software',
    text: 'Reducing fraud in the insurance industry.',
  },
];

const FeaturesSection: FC = () => {
  return (
    <div className="overflow-hidden space-bottom light-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="title-area feature-5-titlebox text-center mb-55">
              <span className="sub-title extra-sub text-anime-style-2">Our Features</span>
              <h2 className="sec-title text-white text-anime-style-2">
                Benefits of Blockchain in Fintech
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area5">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {features.map((feature, index) => (
              <div
                className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 feature_wrapp"
                key={index}
              >
                <div className="feature-item style-5 text-center">
                  <div className="feature_icon">
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <div className="feature_content">
                    <h3 className="box-title text-white">{feature.title}</h3>
                    <p className="sec-text">{feature.text}</p>
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

export default FeaturesSection;
