
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero_bg from '../../img/bg/hero_bg_5_1.webp';
import hero_51 from '../../img/hero/hero_5_1_1.webp';
import hero_52 from '../../img/hero/hero_5_2_1.webp';
import left from '../../img/icon/left-arrow.svg';
import right from '../../img/icon/right-arrow.svg';
import shape1 from '../../img/shape/hero-5-shape-1.png';
import shape2 from '../../img/shape/hero-5-shape-2.png';

const HeroSlider = () => {
   const slides = [1, 2, 3];

   const ClickHandler = () => {
      window.scrollTo(10, 0);
   };

   useEffect(() => {
      const animatedElements = document.querySelectorAll<HTMLElement>('[data-ani]');
      animatedElements.forEach((el) => {
         const animation = el.getAttribute('data-ani');
         const delay = el.getAttribute('data-ani-delay') || '0s';
         if (animation) el.classList.add(animation);
         el.style.animationDelay = delay;
      });
   }, []);

   return (
      <div
         className="th-hero-wrapper hero-5 overlay-5 background-image"
         id="hero"
         style={{ backgroundImage: `url(${hero_bg})` }}
      >
         <Swiper
            className="swiper th-slider hero-slider-5"
            id="heroSlide1"
            modules={[EffectFade, Pagination, Navigation, Autoplay]}
            effect="fade"
            pagination={{
               el: '.slider-pagination',
               clickable: true,
            }}
            navigation={{
               prevEl: '[data-slider-prev="#heroSlide1"]',
               nextEl: '[data-slider-next="#heroSlide1"]',
            }}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            loop
         >
            {slides.map((_, idx) => (
               <SwiperSlide key={idx} className="swiper-slide">
                  <div className="hero-inner">
                     <div className="container">
                        <div className="hero-style5 hero-style1 z-index-2">
                           <span
                              className="sub-title style1 text-white"
                              data-ani="slideinleft"
                              data-ani-delay="0.2s"
                           >
                              Defend, Detect, Protect
                           </span>
                           <h1
                              className="hero-title text-white"
                              data-ani="slideinleft"
                              data-ani-delay="0.5s"
                           >
                              Ensure the Security of your{' '}
                              <span
                                 className="title2"
                                 data-ani="slideinup"
                                 data-ani-delay="0.5s"
                              >
                                 <span> connection</span>{' '}
                                 <span className="title-line d-none d-md-block">
                                    <svg
                                       width="388"
                                       height="92"
                                       viewBox="0 0 388 92"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          className="line-1"
                                          d="M26.1083 16.1786C67.9411 7.45203 126.997 2 192.5 2C259.892 2 320.457 7.77109 362.461 16.9403C374.082 19.4769 382.69 29.0865 384.844 40.9343C387.658 56.4147 378.729 71.4569 363.618 74.8053C321.574 84.1218 260.515 90 192.5 90C126.136 90 66.3907 84.4036 24.4701 75.4762C8.0022 71.9691 -1.1998 55.0857 3.19829 38.5437C6.18283 27.3183 14.8629 18.5244 26.1083 16.1786Z"
                                          stroke="#0B59DB"
                                          strokeWidth="4"
                                       />
                                    </svg>
                                 </span>
                              </span>
                           </h1>
                           <p
                              className="hero-text"
                              data-ani="slideinleft"
                              data-ani-delay="0.7s"
                           >
                              Cybersecurity refers to the practice of protecting systems,
                              networks, and data from cyber threats, unauthorized access.
                           </p>
                           <div
                              className="btn-group"
                              data-ani="slideinup"
                              data-ani-delay="0.9s"
                           >
                              <Link
                                 onClick={ClickHandler}
                                 to="/contact"
                                 className="th-btn style2 th-icon th-radius"
                              >
                                 Discover More <i className="fa-light fa-arrow-right-long"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="th-hero-image">
                        <div className="hero-img" data-ani="slideinleft" data-ani-delay="0.8s">
                           <img src={hero_51} alt="Hero 1" />
                        </div>
                        <div className="hero-img2" data-ani="slideinright" data-ani-delay="0.9s">
                           <img src={hero_52} alt="Hero 2" />
                        </div>
                     </div>
                     <div className="hero-5-shape-box">
                        <div className="hero-shape-1" data-ani="slideinleft" data-ani-delay="0.8s">
                           <img src={shape1} alt="Shape 1" />
                        </div>
                        <div className="hero-shape-2" data-ani="slideinleft" data-ani-delay="0.9s">
                           <img src={shape2} alt="Shape 2" />
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
            <div className="th-swiper-custom">
               <button
                  data-slider-prev="#heroSlide1"
                  className="slider-arrow slider-prev"
               >
                  <img src={right} alt="Prev" />
               </button>
               <div className="slider-pagination"></div>
               <button
                  data-slider-next="#heroSlide1"
                  className="slider-arrow slider-next"
               >
                  <img src={left} alt="Next" />
               </button>
            </div>
         </Swiper>
      </div>
   );
};

export default HeroSlider;