import { useEffect, useRef, useState, type FC } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import pricingData from '../../api/pricing';
import bgimg from '../../img/bg/price_bg_4.jpg';
import bg from '../../img/price/price_4_bg.jpg';
import { Link } from 'react-router-dom';

interface PricingItem {
  title: string;
  price: string;
  duration: string;
  img: string;
}

interface PriceAreaProps {
  className?: string;
}

const PriceArea: FC<PriceAreaProps> = (props) => {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundUrl = bgimg;

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (sectionEl) {
      sectionEl.style.backgroundImage = `url(${backgroundUrl})`;
      sectionEl.classList.add('background-image');

      const images = sectionEl.querySelectorAll('img');
      let loadedImages = 0;

      if (images.length > 0) {
        images.forEach((img) => {
          if (img.complete) {
            loadedImages++;
          } else {
            img.addEventListener('load', () => {
              loadedImages++;
              if (loadedImages === images.length) {
                applySectionPosition(sectionEl);
              }
            });
          }
        });

        if (loadedImages === images.length) {
          applySectionPosition(sectionEl);
        }
      } else {
        applySectionPosition(sectionEl);
      }
    }
  }, [backgroundUrl]);

  const applySectionPosition = (el: HTMLElement) => {
    const posType = el.getAttribute('data-sec-pos');
    const posTargetSelector = el.getAttribute('data-pos-for');
    if (!posTargetSelector) return;

    const target = document.querySelector<HTMLElement>(posTargetSelector);

    if (target && posType === 'bottom-half') {
      const offset = el.offsetHeight / 2;
      target.style.marginTop = `-${offset}px`;
    }
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const swiperOptions = {
    modules: [Autoplay],
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
      1400: { slidesPerView: 3 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={props.className}
      id="price-sec"
      data-pos-for=".counter-sec2"
      data-sec-pos="bottom-half"
    >
      <div className="container">
        <div className="title-area mb-70 text-center">
          <span className="sub-title text-anime-style-2">Pricing Table</span>
          <h2 className="sec-title text-anime-style-3">Pricing Made Simple</h2>
          <div className="pricing-tabs scroll-text-animation" data-animation="fade_from_bottom">
            <div className="switch-area">
              <label
                className={`toggler ms-0 ${!isYearly ? 'toggler--is-active' : ''}`}
                id="filt-monthly"
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </label>
              <div className="toggle" onClick={handleToggle}>
                <input type="checkbox" id="switcher" className="check" checked={isYearly} readOnly />
                <b className="b switch"></b>
              </div>
              <label
                className={`toggler ${isYearly ? 'toggler--is-active' : ''}`}
                id="filt-yearly"
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </label>
            </div>
          </div>
        </div>

        <div id="monthly" className={`wrapper-full ${isYearly ? 'hide' : ''}`}>
          <div className="slider-area price-slider">
            <Swiper className="th-slider slider-drag-wrap" {...swiperOptions}>
              {pricingData.map((item: PricingItem, idx: number) => (
                <SwiperSlide key={idx}>
                  <div className="price-card4 gsap-cursor d-flex align-items-center">
                    <div className="price-card_img global-img me-xl-4 d-none d-lg-block">
                      <img src={item.img} alt="Plan" />
                    </div>
                    <div className="price-box" style={{ backgroundImage: `url(${bg})` }}>
                      <div className="price-content">
                        <div className="price-title-box">
                          <h3 className="box-title">{item.title}</h3>
                          <p className="sec-text">Pricing plan for Cloud Solution</p>
                        </div>
                        <h4 className="price-card-value mb-30">
                          {item.price} <span className="duration">{item.duration}</span>
                        </h4>
                        <div className="checklist mb-40">
                          <ul>
                            <li>Up to 5 Users</li>
                            <li>Access to Core Features</li>
                            <li>50GB Cloud Storage</li>
                          </ul>
                        </div>
                        <div className="price-action">
                          <Link onClick={ClickHandler} to="/contact" className="th-btn style2 th-icon">
                            Get Started <i className="fa-light fa-arrow-right-long"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div id="yearly" className={`wrapper-full ${!isYearly ? 'hide' : ''}`}>
          <div className="slider-area price-slider">
            <Swiper className="th-slider slider-drag-wrap" {...swiperOptions}>
              {pricingData.map((item: PricingItem, idx: number) => (
                <SwiperSlide key={idx}>
                  <div className="price-card4 gsap-cursor d-flex align-items-center">
                    <div className="price-card_img global-img me-xl-4 d-none d-lg-block">
                      <img src={item.img} alt="Plan" />
                    </div>
                    <div className="price-box" style={{ backgroundImage: `url(${bg})` }}>
                      <div className="price-content">
                        <div className="price-title-box">
                          <h3 className="box-title">{item.title}</h3>
                          <p className="sec-text">Pricing plan for Cloud Solution</p>
                        </div>
                        <h4 className="price-card-value mb-30">
                          {item.price} <span className="duration">{item.duration}</span>
                        </h4>
                        <div className="checklist mb-40">
                          <ul>
                            <li>Up to 5 Users</li>
                            <li>Access to Core Features</li>
                            <li>50GB Cloud Storage</li>
                          </ul>
                        </div>
                        <div className="price-action">
                          <Link onClick={ClickHandler} to="/contact" className="th-btn style2 th-icon">
                            Get Started <i className="fa-light fa-arrow-right-long"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceArea;
