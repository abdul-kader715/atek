import  { type FC } from 'react';
import { Link } from 'react-router-dom';

import AbF1 from '../../img/normal/about_16_1.jpg';
import AbF2 from '../../img/normal/about_16_2.jpg';
import AbF3 from '../../img/normal/about_16_3.jpg';
import checkmark from '../../img/icon/checkmark.svg';

interface AboutFeaturedProps {
  className?: string;
}

const sections = [
  {
    title: 'Marketing Teams',
    img: AbF1,
    text: 'SaaS products are accessible via web browsers, eliminating the need for users to install or maintain software locally. This model provides business with flexibility, scalability, and cost savings, making it a preferred solution across industries.',
    featuresLeft: ['Social Media Design', 'Custom ad strategy', 'Advanced demographic'],
    featuresRight: ['Social Media Management', 'Unique ads campaigns'],
    orderImgFirst: true,
  },
  {
    title: 'Project Management',
    img: AbF2,
    text: 'SaaS products are accessible via web browsers, eliminating the need for users to install or maintain software locally. This model provides business with flexibility, scalability, and cost savings, making it a preferred solution across industries.',
    featuresLeft: ['Social Media Design', 'Custom ad strategy', 'Advanced demographic'],
    featuresRight: ['Social Media Management', 'Unique ads campaigns'],
    orderImgFirst: false,
  },
  {
    title: 'Strategic Planning',
    img: AbF3,
    text: 'SaaS products are accessible via web browsers, eliminating the need for users to install or maintain software locally. This model provides business with flexibility, scalability, and cost savings, making it a preferred solution across industries.',
    featuresLeft: ['Social Media Design', 'Custom ad strategy', 'Advanced demographic'],
    featuresRight: ['Social Media Management', 'Unique ads campaigns'],
    orderImgFirst: true,
  },
];

const AboutFeatured: FC<AboutFeaturedProps> = ({ className = '' }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Projects Management</span>
              <h2 className="sec-title mb-20 text-anime-style-3">Master Your Project Success</h2>
              <p className="sec-text scroll-text-animation" data-animation="fade_from_bottom">
                SaaS business products empower organizations to focus on their core objectives by providing reliable, scalable, and cost-effective technology solutions that adapt to their evolving needs.
              </p>
            </div>
          </div>
        </div>

        {sections.map(({ title, img, text, featuresLeft, featuresRight, orderImgFirst }) => (
          <div
            key={title}
            className={`row gy-30 mb-60 align-items-center${orderImgFirst ? '' : ' flex-row-reverse'}`}
          >
            <div className="col-lg-6">
              <div className="about-image ab-img16 global-img">
                <img src={img} alt={title} />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className={`about-item style-16 ${orderImgFirst ? 'ps-xxl-4 ms-xxl-4' : 'pe-xxl-4 me-xxl-4'}`}
              >
                <div className="about-content">
                  <h3 className="box-title">
                    <span>{title}</span>
                  </h3>
                  <p className="about-text">{text}</p>

                  <div className="about-featured-box d-md-flex align-items-start">
                    <div className="about-feature pe-xl-4">
                      <ul>
                        {featuresLeft.map((feature) => (
                          <li key={feature}>
                            <span className="icon">
                              <img src={checkmark} alt="" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="about-feature">
                      <ul>
                        {featuresRight.map((feature) => (
                          <li key={feature}>
                            <span className="icon">
                              <img src={checkmark} alt="" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="about-btn mt-30">
                    <Link onClick={ClickHandler} to="/contact" className="th-btn btn-2 th-icon">
                      Get Started Now <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFeatured;
