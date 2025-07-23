import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper as SwiperClass } from 'swiper';

import heroBg1 from '../../img/hero/hero_bg_12_1.jpg';
import heroBg2 from '../../img/hero/hero_bg_12_2.jpg';
import arrowLeft from '../../img/icon/left-arrow2.svg';
import arrowRight from '../../img/icon/right-arrow2.svg';

const slides = [
  {
    bg: heroBg1,
    title: 'Data Analytics',
    subtitle: 'Big Data &',
    desc:
      'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights',
  },
  {
    bg: heroBg2,
    title: 'Data Analytics',
    subtitle: 'Big Data &',
    desc:
      'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights',
  },
  {
    bg: heroBg1,
    title: 'Data Analytics',
    subtitle: 'Big Data &',
    desc:
      'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights',
  },
];

const HeroSection = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>('[data-ani]')
      .forEach((el) => {
        const animation = el.getAttribute('data-ani');
        const delay = el.getAttribute('data-ani-delay') || '0s';
        if (animation) {
          el.classList.add(animation);
          el.style.animationDelay = delay;
        }
      });
  }, []);

  return (
    <div className="hero-12 black-bg" id="hero">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoHeight
        loop={settings.loop}
        speed={settings.speed}
        autoplay={settings.autoplay}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="th-slider overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: `url(${slide.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="container">
                <div className="hero-style12">
                  <span className="sub-title" data-ani="slideinup" data-ani-delay="0.2s">
                    {slide.subtitle}
                  </span>
                  <h1 className="hero-title text-white" data-ani="slideinup" data-ani-delay="0.4s">
                    {slide.title}
                  </h1>
                  <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">
                    {slide.desc}
                  </p>
                  <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                    <Link onClick={ClickHandler} to="/contact" className="th-btn style1 th-radius th-icon">
                      Get Started Now <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="slider-arrow slider-prev"
      >
        <img src={arrowRight} alt="Previous Slide" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="slider-arrow slider-next"
      >
        <img src={arrowLeft} alt="Next Slide" />
      </button>
    </div>
  );
};

export default HeroSection;
