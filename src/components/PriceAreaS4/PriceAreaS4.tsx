import { type FC } from 'react';
import { Link } from 'react-router-dom';

import checkIcon from '../../img/icon/price-check2.svg';
import priceImg1 from '../../img/price/price_5_1.jpg';
import priceImg2 from '../../img/price/price_5_2.jpg';

interface PricingPlan {
  title: string;
  price: string;
  duration: string;
  features: string[];
  active: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic Plan',
    price: '$24.00',
    duration: '/ Monthly',
    features: [
      'Community Support',
      'Dedicated Tech Experts',
      'Custom Domains',
      'Unlimited Storage',
      '24/7 system monitoring',
    ],
    active: false,
  },
  {
    title: 'Premium Plan',
    price: '$94.00',
    duration: '/ Monthly',
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
    title: 'Enterprise Plan',
    price: '$124.00',
    duration: '/ Monthly',
    features: [
      'Community Support',
      'Unlimited Storage',
      '24/7 system monitoring',
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
    <section className="price-sec5 position-relative overflow-hidden z-index-3 space dark-bg">
      <div className="container">
        <div className="title-area mb-70 text-center">
          <span className="price-big-text text-anime-style-2">Pricing</span>
          <span className="sub-title extra-sub text-anime-style-2">Pricing Table</span>
          <h2 className="sec-title text-white text-anime-style-3">Flexible pricing, fair and simple</h2>
        </div>
        <div className="price5-wrapp">
          <div className="row gy-30 align-items-center justify-content-center">
            {pricingPlans.map((plan, index) => (
              <div className="col-xl-4 col-lg-6" key={index}>
                <div className={`price-card card5 light-bg ${plan.active ? 'active' : ''}`}>
                  <div className="price-card_wrapp d-block">
                    <div className="price-card_titlebox">
                      <h3 className="box-title text-white">{plan.title}</h3>
                    </div>
                    <h4 className="price-card_price text-start">
                      {plan.price}
                      <span className="duration text-white">{plan.duration}</span>
                    </h4>
                  </div>
                  <div className="price-card_content mb-25">
                    <div className="checklist">
                      <ul>
                        {plan.features.map((feature, i) => (
                          <li key={i}>
                            <img className="icon" src={checkIcon} alt="icon" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="price-btn">
                    <Link
                      onClick={ClickHandler}
                      to="/contact"
                      className="th-btn style2 th-icon w-100"
                    >
                      Choose Your Package <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="price-imgbox d-none d-xxl-block">
        <div className="img1">
          <img src={priceImg1} alt="img" />
        </div>
        <div className="img2">
          <img src={priceImg2} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
