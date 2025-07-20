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
    title: 'Basic Package',
    price: '$199.00',
    duration: '/ Monthly',
    description: 'Pricing plan for Digital Transformation',
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
    title: 'Standard Package',
    price: '$299.00',
    duration: '/ Monthly',
    description: 'Pricing plan for Digital Transformation',
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
    price: '$399.00',
    duration: '/ Monthly',
    description: 'Pricing plan for Digital Transformation',
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
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="price-area space-top" id="pricing-sec">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <div className={`price-card ${plan.active ? 'active' : ''}`}>
                <div className="price-card_wrapp d-block">
                  <div className="price-card_titlebox">
                    <h3 className="box-title">{plan.title}</h3>
                    <p className="price-card_text">{plan.description}</p>
                  </div>
                  <h4 className="price-card_price">
                    {plan.price}
                    <span className="duration">{plan.duration}</span>
                  </h4>
                </div>
                <div className="price-card_content">
                  <div className="checklist">
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <img className="icon" src={checkIcon} alt="check icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="price-btn">
                  <Link
                    onClick={ClickHandler}
                    to="/contact"
                    className="th-btn style5 th-icon w-100"
                  >
                    Choose Package <i className="fa-light fa-arrow-right-long"></i>
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
