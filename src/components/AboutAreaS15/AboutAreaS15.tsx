import  { type FC } from 'react';
import { Link } from 'react-router-dom';
import aboutImg1 from '../../img/normal/about_13.png';
import aboutImg2 from '../../img/normal/about_13_1.png';
import shieldIcon from '../../img/icon/shield.svg';

const AboutSection: FC = () => {
  return (
    <div className="about-area position-relative overflow-hidden dark-bg space" id="about-sec">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-6 col-lg-6">
            <div className="about13 img-box18 d-flex position-relative">
              <div className="img1">
                <img src={aboutImg1} alt="About" />
              </div>
              <div className="img2">
                <img src={aboutImg2} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="ps-xxl-3 ms-xxl-3">
              <div className="title-area about13-titlebox mt-30 mb-20">
                <span className="sub-title extra-sub text-anime-style-2">About Us</span>
                <h2 className="sec-title mb-20 heading text-white text-anime-style-3">
                  Smart, Secure & Seamless Blockchain Payments
                </h2>
                <p className="sec-text mb-30 scroll-text-animation" data-animation="fade_from_bottom">
                  Blockchain technology is transforming the financial sector by introducing secure,
                  transparent, and decentralized solutions. Fintech (Financial Technology) leverages
                  blockchain to improve transactions, reduce fraud, and enhance financial
                  accessibility. These innovations are revolutionizing banking.
                </p>
              </div>
              <div className="about13-item-wrap scroll-text-animation" data-animation="fade_from_bottom">
                {[
                  {
                    alt: 'Crypto Connection',
                    title: 'Crypto Connection',
                    text: 'Automating repetitive tasks and streamlining workflows to save time and resources.',
                  },
                  {
                    alt: 'Automated Invoicing',
                    title: 'Automated Invoicing',
                    text: 'Leveraging cutting-edge technology to stay ahead in the market.',
                  },
                ].map(({ alt, title, text }) => (
                  <div className="about-item" key={title}>
                    <div className="about-item_img">
                      <img src={shieldIcon} alt={alt} />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title text-white">{title}</h5>
                      <p className="about-item_text text-white">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-35 scroll-text-animation" data-animation="fade_from_bottom">
                <Link to="/about" className="th-btn style2 th-radius th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
