import { type FC } from 'react';
import { Link } from 'react-router-dom';
import checkIcon from '../../img/icon/price-check.svg';

interface PricingPlan {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  active: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic Price Package',
    price: '56',
    duration: '/ Monthly',
    description: 'Pricing plan for Data Analytics',
    features: [
      'Community Support',
      'Dedicated Tech Experts',
      'Unlimited Storage',
      'Custom Domains',
      '24/7 system monitoring',
    ],
    active: false,
  },
  {
    title: 'Standers Package',
    price: '76',
    duration: '/ Monthly',
    description: 'Pricing plan for Data Analytics',
    features: [
      'Community Support',
      'Dedicated Tech Experts',
      'Unlimited Storage',
      'Custom Domains',
      '24/7 system monitoring',
    ],
    active: true,
  },
  {
    title: 'Premium Package',
    price: '96',
    duration: '/ Monthly',
    description: 'Pricing plan for Data Analytics',
    features: [
      'Community Support',
      'Dedicated Tech Experts',
      'Unlimited Storage',
      'Custom Domains',
      '24/7 system monitoring',
    ],
    active: false,
  },
];

const PricingSection: FC = () => {
  const handleClick = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="space" id="pricing-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Price Plan</span>
              <h2 className="sec-title text-anime-style-3">Affordable Price Packages</h2>
            </div>
          </div>
        </div>

        <div className="row gy-4 gx-30 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div className="col-xxl-4 col-lg-6" key={index}>
              <div className={`price-card3 th-ani ${plan.active ? 'active' : ''}`}>
                <div className="price-card3_wrapp">
                  <h4 className="price-card3_price">
                    <span className="currency">$</span>
                    {plan.price}
                    <span className="duration"> {plan.duration}</span>
                  </h4>
                  <div className="box-content">
                    <h3 className="box-title">{plan.title}</h3>
                    <p className="box-text">{plan.description}</p>
                  </div>
                </div>
                <div className="checklist style2">
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <img className="icon" src={checkIcon} alt="icon" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="price-btn">
                  <Link
                    onClick={handleClick}
                    to="/contact"
                    className="th-btn th-icon w-100"
                  >
                    Choose Your Package
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
