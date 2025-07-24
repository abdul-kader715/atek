import { useEffect, type FC } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import heroBg1 from '../../img/hero/hero_bg_1_1.webp';
import heroBg2 from '../../img/hero/hero_bg_1_2.webp';
import heroBg3 from '../../img/hero/hero_bg_1_3.webp';
import arrowLeft from '../../img/icon/left-arrow.svg';
import arrowRight from '../../img/icon/right-arrow.svg';
import shapeImg from '../../img/shape/hero-1-shape.png';

interface Slide {
  bg: string;
  title: string;
}

const slides: Slide[] = [
  {
    bg: heroBg1,
    title: 'Precision IT Solutions, Tailored for You',
  },
  {
    bg: heroBg2,
    title: 'Smart IT Consulting for Modern Businesses',
  },
  {
    bg: heroBg3,
    title: 'Your Trusted Partner in Tech & Strategy',
  },
];

const HeroSlider: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>('[data-ani]');
    animatedElements.forEach((el) => {
      const animation = el.getAttribute('data-ani');
      const delay = el.getAttribute('data-ani-delay') || '0s';
      if (animation) {
        el.classList.add(animation);
        el.style.animationDelay = delay;
      }
    });
  }, []);

  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        pagination={{
          el: '.slider-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.slider-next',
          prevEl: '.slider-prev',
        }}
        autoplay={{ delay: 5000 }}
        className="th-slider hero-slider-1"
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
              <div
                className="hero-1-shape d-none d-lg-block"
                data-ani="slideinleft"
                data-ani-delay="0.4s"
              >
                <img src={shapeImg} alt="hero-shape" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-8">
                    <div className="hero-style1">
                      <span
                        className="sub-title style1"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Dynamic IT, Dynamic Results.
                      </span>
                      <h1
                        className="hero-title"
                        data-ani="slideinup"
                        data-ani-delay="0.4s"
                      >
                        {slide.title}
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        Welcome to Atek where we specialize in delivering tailored
                        technology and IT solutions.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.8s"
                      >
                        <Link
                          onClick={ClickHandler}
                          to="/contact"
                          className="th-btn style7 th-icon"
                        >
                          Discover More <i className="fa-light fa-arrow-right-long"></i>
                        </Link>
                        <Link
                          onClick={ClickHandler}
                          to="/service"
                          className="th-btn style2 th-icon"
                        >
                          Our Services <i className="fa-light fa-arrow-right-long"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="th-swiper-custom">
          <button className="slider-arrow slider-prev">
            <img src={arrowRight} alt="Previous" />
          </button>
          <div className="slider-pagination"></div>
          <button className="slider-arrow slider-next">
            <img src={arrowLeft} alt="Next" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
