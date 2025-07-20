import { type FC } from 'react';
import { Link } from 'react-router-dom';
import checkIcon from '../../img/icon/checkmark.svg';
import leftArrow from '../../img/icon/left-arrow3.svg';

interface Feature {
  label: string;
  available: boolean;
}

interface Package {
  title: string;
  price: number;
  billing: string;
  active?: boolean;
  features: Feature[];
}

const packages: Package[] = [
  {
    title: 'Basic Package',
    price: 35,
    billing: '/Month',
    features: [
      { label: 'Community Support', available: true },
      { label: 'Dedicated Tech Experts', available: true },
      { label: 'Unlimited Storage', available: true },
      { label: 'Custom Domains', available: false },
      { label: '24/7 system monitoring', available: false },
    ],
  },
  {
    title: 'Standard Package',
    price: 55,
    billing: '/Month',
    active: true,
    features: [
      { label: 'Community Support', available: true },
      { label: 'Dedicated Tech Experts', available: true },
      { label: 'Unlimited Storage', available: true },
      { label: 'Custom Domains', available: false },
      { label: '24/7 system monitoring', available: false },
    ],
  },
  {
    title: 'Premium Package',
    price: 99,
    billing: '/Year',
    features: [
      { label: 'Community Support', available: true },
      { label: 'Dedicated Tech Experts', available: true },
      { label: 'Unlimited Storage', available: true },
      { label: 'Custom Domains', available: false },
      { label: '24/7 system monitoring', available: false },
    ],
  },
];

const PricingSection: FC = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Our Packages</span>
              <h2 className="sec-title text-anime-style-3">Choose Your perfect Package</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 gx-30 justify-content-center">
          {packages.map((pkg, idx) => (
            <div className="col-xxl-4 col-lg-6" key={idx}>
              <div className={`price-card2 th-ani ${pkg.active ? 'active' : ''}`}>
                <div className="price-card2_wrapp">
                  <div className="box-content">
                    <h4 className="price-card2_price">
                      <span className="currency">$</span>{pkg.price}
                    </h4>
                    <h6 className="price-card2_text">{pkg.billing}</h6>
                  </div>
                  <div className="price-list">
                    <ul>
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx}>
                          <span className={`icon ${!feature.available ? 'unavailable' : ''}`}>
                            <img src={checkIcon} alt="check" />
                          </span>
                          {feature.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="box-wrapp">
                  <h3 className="box-title">{pkg.title}</h3>
                  <Link to="/contact" className="line-btn2">
                    <img src={leftArrow} alt="arrow" /> Get Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
