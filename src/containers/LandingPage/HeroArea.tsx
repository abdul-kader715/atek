import  { type FC, type MouseEvent } from 'react';

import heroBg from './img/hero-bg.jpg';
import arrowShape from './img/arrow-shape.png';
import html5Icon from './img/icons/html5.svg';
import css3Icon from './img/icons/css3.svg';
import sassIcon from './img/icons/sass2.svg';
import bootstrapIcon from './img/icons/bootstrap.svg';
import codeIcon from './img/icons/react.svg';
import hero1 from './img/hero/hero-img-1.png';
import hero2 from './img/hero/hero-img-2.png';
import hero3 from './img/hero/hero-img-3.png';
import hero4 from './img/hero/hero-img-4.png';

const HeroSection: FC = () => {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="th-hero hero-bg position-relative"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="heroSection"
    >
      <div className="container">
        <div className="hero-inner text-center text-xl-start">
          <div className="row">
            <div className="col-xl-10 col-xxl-7">
              <h1 className="hero-title text-white">
                Atek - IT Solution & Technology React Template
              </h1>

              <div className="hero-social">
                <ul>
                  <li><img src={html5Icon} alt="HTML5" /></li>
                  <li><img src={css3Icon} alt="CSS3" /></li>
                  <li><img src={sassIcon} alt="Sass" /></li>
                  <li><img src={bootstrapIcon} width="43" alt="Bootstrap" /></li>
                  <li><img src={codeIcon} width="43" alt="React" /></li>
                </ul>
              </div>

              <div className="hero-btn onepage-nav">
                <a
                  href="#homePage"
                  className="th-btn white-hover btn-radius-10"
                  onClick={(e) => handleScroll(e, 'homePage')}
                >
                  View All Demos
                </a>
              </div>

              <span className="hero-shape">
                <img src={arrowShape} alt="Arrow Shape" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-thumb-wrap">
        <div className="hero-thumb1"><img src={hero1} alt="Hero 1" /></div>
        <div className="hero-thumb2"><img src={hero2} alt="Hero 2" /></div>
        <div className="hero-thumb3"><img src={hero3} alt="Hero 3" /></div>
        <div className="hero-thumb4"><img src={hero4} alt="Hero 4" /></div>
      </div>
    </section>
  );
};

export default HeroSection;
