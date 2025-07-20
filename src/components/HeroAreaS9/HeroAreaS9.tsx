import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import hero1 from '../../img/hero/hero_9_1.jpg';
import hero2 from '../../img/hero/hero_9_2.jpg';
import hero3 from '../../img/hero/hero_9_3.jpg';
import arrowLeft from '../../img/icon/hero-arrow-left.svg';
import arrowRight from '../../img/icon/hero-arrow-right.svg';
import marquee from '../../img/icon/marquee-icon.svg';

type Slide = {
  img: string;
  title: string;
};

const slides: Slide[] = [
  { img: hero1, title: 'Your Digital Transformation Starts Here' },
  { img: hero2, title: 'Your Vision, Our Web And App Mastery' },
  { img: hero3, title: 'Your Vision, Our Web And App Mastery' },
];

type HeroSliderProps = {
  ClickHandler: () => void;
};

const HeroSlider: React.FC<HeroSliderProps> = ({ ClickHandler }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

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
    <div className="hero-9" id="hero">
      <div className="slider-wrap">
        <Swiper
          loop
          speed={1200}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="fade"
          slidesPerView={1}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          onBeforeInit={(swiper) => {
            if (prevRef.current && nextRef.current && paginationRef.current) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            type: 'fraction',
            formatFractionCurrent: (num) => `0${num}`,
            formatFractionTotal: (num) => `0${num}`,
          }}
          className="swiper th-slider"
          id="heroSlider9"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="hero-inner">
                <div
                  className="th-hero-bg background-image"
                  style={{ backgroundImage: `url(${slide.img})` }}
                ></div>
                <div className="container">
                  <div className="hero-style9">
                    <span
                      className="sub-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      Design. Develop. Deliver.
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.3s"
                    >
                      {slide.title}
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <Link
                        onClick={ClickHandler}
                        to="/contact"
                        className="th-btn style3 th-icon"
                      >
                        Get Started <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-controller">
          <button className="hero-arrow slider-prev" ref={prevRef}>
            <img src={arrowLeft} alt="Previous Slide" />
          </button>
          <div className="slider-pagination" ref={paginationRef}></div>
          <button className="hero-arrow slider-next" ref={nextRef}>
            <img src={arrowRight} alt="Next Slide" />
          </button>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="hero9-wrapp">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-9">
              <div className="hero-9-marquee smoke-bg">
                <div className="marquee-section overflow-hidden">
                  <div className="marquee-wrapper">
                    <div className="marquee">
                      {[...Array(2)].map((_, i) => (
                        <div
                          key={i}
                          className="marquee-group"
                          aria-hidden={i === 1}
                        >
                          {['Welcome to Innovate Tech Solutions', 'Web Development', 'App Development', 'Architect']
                            .flatMap((text) => Array(3).fill(text))
                            .map((text, j) => (
                              <div key={j} className="text">
                                <img src={marquee} alt="" /> {text}
                              </div>
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Info */}
      <div className="hero-left header-links">
        <ul>
          <li className="d-none d-xl-inline-block">
            <i className="fa-sharp fa-regular fa-location-dot"></i>
            <a href="#">
              <span>45 New Eskaton Road, Austria</span>
            </a>
          </li>
          <li className="d-none d-xl-inline-block">
            <i className="fa-regular fa-clock"></i>
            <span>Sun to Friday: 8.00 am - 7.00 pm</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSlider;
