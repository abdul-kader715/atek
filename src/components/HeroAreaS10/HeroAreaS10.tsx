import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import hero1 from "../../img/hero/hero_10_1.jpg";
import hero2 from "../../img/hero/hero_10_2.jpg";
import hero3 from "../../img/hero/hero_10_3.jpg";
import iconChipset from "../../img/icon/chipset.svg";
import down from "../../img/icon/down-arrow.svg";
import arrowLeft from "../../img/icon/hero-arrow-left.svg";
import arrowRight from "../../img/icon/hero-arrow-right.svg";
import iconHours from "../../img/icon/hours.svg";
import iconUsers from "../../img/icon/users.svg";

import { useEffect, useState, type FC } from "react";
import ScrollLink from "../ScrollLink/ScrollLink";
import { Link } from "react-router-dom";
import type { Swiper as SwiperType } from "swiper";

type HeroSlide = {
  subtitle: string;
  title: string;
  desc: string;
  img: string;
};

const heroSlides: HeroSlide[] = [
  {
    subtitle: "The Worldwide.",
    title: "It Solution",
    desc: "IT Solutions encompass a wide range of services, technologies, and strategies...",
    img: hero1,
  },
  {
    subtitle: "Digital Marketing.",
    title: "Seo Expart",
    desc: "IT Solutions encompass a wide range of services, technologies, and strategies...",
    img: hero2,
  },
  {
    subtitle: "Best Software.",
    title: "It Engineer",
    desc: "IT Solutions encompass a wide range of services, technologies, and strategies...",
    img: hero3,
  },
];

const HeroSection: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

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
    const animatedElements = document.querySelectorAll<HTMLElement>('[data-ani]');
    animatedElements.forEach((el) => {
      const animation = el.getAttribute("data-ani");
      const delay = el.getAttribute("data-ani-delay") || "0s";
      if (animation) {
        el.classList.add(animation);
        el.style.animationDelay = delay;
      }
    });
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="hero-10 position-relative overflow-hidden" id="hero">
      <Swiper
        modules={[Thumbs, EffectFade, Pagination, Navigation, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        effect="fade"
        pagination={{ el: ".swiper-pagination", type: "fraction", clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        loop={settings.loop}
        speed={settings.speed ?? 1000}
        autoplay={settings.autoplay}
        className="swiper th-slider hero-slider-10"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-inner">
              <div
                className="th-hero-bg overlay background-image"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <span className="hero-circle"></span>
                <span className="hero-circle"></span>
              </div>
              <div className="container">
                <div className="hero-style10">
                  <span
                    className="hero-subtitle"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    {slide.subtitle}
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="hero-desc text-white"
                    data-ani="slideinup"
                    data-ani-delay="0.7s"
                  >
                    {slide.desc}
                  </p>
                  <div className="btn-group" data-ani="slideinup" data-ani-delay="0.9s">
                    <Link
                      onClick={ClickHandler}
                      to="/contact"
                      className="th-btn style2 th-radius th-icon"
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

      <div className="hero10-wrapper">
        <div className="container">
          <div className="hero-featured-box d-xxl-flex justify-content-center align-items-end flex-row-reverse">
            <div className="hero10-mini-slide">
              <div className="hero10-swiper-custom">
                <button className="swiper-button-next">
                  <img src={arrowRight} alt="" />
                </button>
                <div className="swiper-pagination"></div>
                <button className="swiper-button-prev">
                  <img src={arrowLeft} alt="" />
                </button>
              </div>
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[FreeMode, Thumbs]}
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                className="swiper hero10Thumbs"
              >
                {heroSlides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="hero10-card">
                      <div className="hero-img">
                        <img src={slide.img} alt="heroThumb" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="hero-featured">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="hero-featured-item d-flex align-items-center">
                    <span className="hero-featured-icon">
                      <img src={iconChipset} alt="" />
                    </span>
                    <div className="hero-featured-content">
                      <h3 className="hero-featured-title">Trusted Services</h3>
                      <p className="sec-text">We Are Trusted Our Customers</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="hero-featured-item d-flex align-items-center">
                    <span className="hero-featured-icon">
                      <img src={iconHours} alt="" />
                    </span>
                    <div className="hero-featured-content">
                      <h3 className="hero-featured-title">24/7 Support</h3>
                      <p className="sec-text">We Are Trusted Our Customers</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="hero-featured-item d-flex align-items-center">
                    <span className="hero-featured-icon">
                      <img src={iconUsers} alt="" />
                    </span>
                    <div className="hero-featured-content">
                      <h3 className="hero-featured-title">Expert & Professional</h3>
                      <p className="sec-text">We Are Trusted Our Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <ScrollLink href="#service-sec" >
          <span>
            <img src={down} alt="" />
          </span>
          Scroll Down
        </ScrollLink>
      </div>
    </div>
  );
};

export default HeroSection;
