import { useEffect, useRef, type FC } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ScrollLink from "../ScrollLink/ScrollLink";
import { Link } from 'react-router-dom';
import pattern from '../../img/bg/line-pattern.png';
import bg1 from '../../img/hero/hero_bg_2_1.jpg';
import bg2 from '../../img/hero/hero_bg_2_2.jpg';
import arrowLeft from '../../img/icon/hero-arrow-left.svg';
import arrowRight from '../../img/icon/hero-arrow-right.svg';
import down from '../../img/icon/down-arrow.svg';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

interface HeroSlide {
  bg: string;
  title: string;
  desc: string;
}

interface ThumbSlide {
  image: string;
  title: string;
  desc: string;
}

const heroSlides: HeroSlide[] = [
  {
    bg: bg1,
    title: 'Elevate Your Business to the Cloud',
    desc: 'Welcome to Atek where we specialize in delivering tailored technology and Cloud Computing solutions.',
  },
  {
    bg: bg2,
    title: 'Elevate Your Business to the Cloud',
    desc: 'Welcome to Atek where we specialize in delivering tailored technology and Cloud Computing solutions.',
  },
];

const thumbSlides: ThumbSlide[] = [
  {
    image: bg1,
    title: 'Hybrid Cloud',
    desc: 'Combines private and public cloud environment',
  },
  {
    image: bg2,
    title: 'Private Cloud',
    desc: 'Combines private and public cloud environment',
  },
  {
    image: bg1,
    title: 'Hybrid Cloud',
    desc: 'Combines private and public cloud environment',
  },
  {
    image: bg2,
    title: 'Local Cloud',
    desc: 'Combines private and public cloud environment',
  },
];

const HeroSlider:FC = () => {
  const thumbsSwiperRef = useRef<any>(null); // can narrow type if you want, but 'any' works for Swiper instance here

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
    <div className="hero-2" id="hero">
      <div className="hero2-overlay background-image" style={{ backgroundImage: `url(${pattern})` }}></div>
      <div className="swiper hero-slider-2" id="heroSlide2">
        <Swiper
          modules={[Thumbs, Pagination, Navigation, EffectFade, Autoplay]}
          thumbs={{ swiper: thumbsSwiperRef.current }}
          onSwiper={(swiper) => {
            if (swiper.thumbs) swiper.thumbs.swiper = thumbsSwiperRef.current;
          }}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
          }}
          spaceBetween={10}
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="hero-inner">
                <div className="th-hero-bg" style={{ backgroundImage: `url(${slide.bg})` }}></div>
                <div className="container">
                  <div className="hero-style2 text-center text-md-start">
                    <h1 className="hero-title mb-20" data-ani="slideinup" data-ani-delay="0.2s">{slide.title}</h1>
                    <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">{slide.desc}</p>
                    <div className="btn-group text-center text-md-start" data-ani="slideinup" data-ani-delay="0.8s">
                      <Link onClick={ClickHandler} to="/contact" className="th-btn style7 th-icon">
                        Discover More <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                      <Link onClick={ClickHandler} to="/service" className="th-btn style2 th-icon">
                        Our Services <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="th-swiper-custom">
            <div className="swiper-pagination"></div>
            <div className="hero-icon">
              <button className="hero-arrow slider-prev">
                <img src={arrowLeft} alt="Previous" />
              </button>
              <button className="hero-arrow slider-next">
                <img src={arrowRight} alt="Next" />
              </button>
            </div>
          </div>
        </Swiper>

        <Swiper
          modules={[Navigation, Thumbs]}
          onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
          className="heroThumbs style2"
          spaceBetween={10}
          slidesPerView={1}
          loop
          watchSlidesProgress
          slideToClickedSlide
        >
          {thumbSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="hero-inner">
                <div className="hero-card">
                  <div className="hero-img">
                    <img src={slide.image} alt="" />
                  </div>
                  <div className="hero-card_content">
                    <h3 className="box-title">{slide.title}</h3>
                    <p className="sec-text text-white">{slide.desc}</p>
                    <Link onClick={ClickHandler} to="/service" className="th-btn style2">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="scroll-down">
          <ScrollLink href="#service-sec" >
            <span>
              <img src={down} alt="" />
            </span>
            Scroll Down
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
