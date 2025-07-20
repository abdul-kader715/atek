import  { type FC } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../img/icon/about_card_1.svg';
import icon2 from '../../img/icon/about_card_2.svg';
import icon3 from '../../img/icon/about_card_3.svg';
import aboutImg1 from '../../img/normal/about_11_1.jpg';
import aboutImg2 from '../../img/normal/about_11_2.jpg';
import logoIcon from '../../img/logo-icon.svg';
import circleBg from '../../img/shape/bullets-circle2.png';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';

interface Card {
  icon: string;
  title: string;
  text: string;
}

const cards: Card[] = [
  {
    icon: icon1,
    title: 'Improved Efficiency',
    text: 'Automation and AI-driven solutions optimize workflows and reduce manual tasks.',
  },
  {
    icon: icon2,
    title: 'Cost Savings',
    text: 'Cloud-based solutions and automation reduce operational costs over time.',
  },
  {
    icon: icon3,
    title: 'Stronger Security',
    text: 'Digital transformation includes cybersecurity measures to protect sensitive data.',
  },
];

const AboutSection: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="about-area10 bg-smoke position-relative overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title style1 text-anime-style-2">About Us</span>
              <h2 className="sec-title mb-20 text-anime-style-3">
                Digital Transformation: The Key to Competitive Advantage.
              </h2>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-xl-5 order-1 order-xl-0">
            <div className="about-card2-wrap">
              {cards.map((card, i) => (
                <div className="about-card2" key={i}>
                  <div className="box-centent">
                    <h5 className="box-title">{card.title}</h5>
                    <p className="box-text">{card.text}</p>
                    <Link onClick={ClickHandler} to="/blog" className="line-btn th-icon">
                      Learn More <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                  <div className="box-img">
                    <img src={card.icon} alt={card.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-7 order-0 order-xl-1">
            <div className="img-box14 img-box19 img-box ps-xl-2 ms-xl-5">
              <div className="about-img-wrapp position-relative">
                <div className="img1">
                  <img src={aboutImg1} alt="About" />
                </div>
                <div className="img2">
                  <img src={aboutImg2} alt="About" />
                </div>
                <div className="about-circle">
                  <div className="company-wrapp">
                    <Link onClick={ClickHandler} to="/" className="icon">
                      <img src={logoIcon} alt="Logo Icon" />
                    </Link>
                    <div className="discount-wrapp">
                      <div
                        className="discount-tag"
                        style={{
                          backgroundImage: `url(${circleBg})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <CircleTextS2 text="Software Development Company ." method="letters" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
