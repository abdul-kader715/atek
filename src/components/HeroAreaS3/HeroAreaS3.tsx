import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ScrollLink from '../ScrollLink/ScrollLink';

import Bg1 from '../../img/hero/hero_bg_3_1.webp';
import Bg2 from '../../img/hero/hero_bg_3_2.webp';
import Bg3 from '../../img/hero/hero_bg_3_3.webp';
import Bg4 from '../../img/hero/hero_bg_3_4.webp';
import Bg5 from '../../img/hero/hero_bg_3_5.webp';
import Bg6 from '../../img/hero/hero_bg_3_6.webp';
import chipset from '../../img/icon/chipset.svg';
import down from '../../img/icon/down-arrow.svg';
import left from '../../img/icon/hero-arrow-left.svg';
import right from '../../img/icon/hero-arrow-right.svg';
import hours from '../../img/icon/hours.svg';
import users from '../../img/icon/users.svg';

const HeroSection = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   };

   const slides = [
      { bgSrc: Bg1 },
      { bgSrc: Bg2 },
      { bgSrc: Bg3 },
      { bgSrc: Bg4 },
      { bgSrc: Bg5 },
      { bgSrc: Bg6 },
   ];

   const features = [
      {
         icon: chipset,
         title: 'Trusted Services',
         text: 'We Are Trusted Our Customers',
      },
      {
         icon: hours,
         title: '24/7 Support',
         text: 'We Are Trusted Our Customers',
      },
      {
         icon: users,
         title: 'Expert & Professional',
         text: 'We Are Trusted Our Customers',
      },
   ];



   useEffect(() => {
      const animatedElements = document.querySelectorAll<HTMLElement>('[data-ani]');
      animatedElements.forEach((el) => {
         const animation = el.getAttribute('data-ani');
         const delay = el.getAttribute('data-ani-delay') || '0s';
         el.classList.add(animation!);
         el.style.animationDelay = delay;
      });
   }, []);

   return (
      <div className="hero-3" id="hero">
         <div className="swiper hero-slider-3" id="heroSlide3">
            <Swiper
               modules={[Navigation, Pagination]}
               spaceBetween={0}
               slidesPerView={1}
               pagination={{
                  el: '.swiper-pagination',
                  type: 'fraction',
                  formatFractionCurrent: (number) => `0${number}`,
               }}
               navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
               }}
               className="hero-slider-3"
               id="heroSlide3"
            >
               {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                     <div className="hero-inner">
                        <div
                           className="th-hero-bg background-image"
                           style={{ backgroundImage: `url(${slide.bgSrc})` }}
                        ></div>
                        <div className="container">
                           <div className="hero-style3">
                              <h1
                                 className="hero-title"
                                 data-ani="slideinleft"
                                 data-ani-delay="0.2s"
                              >
                                 Machine Learning That Evolves with You
                              </h1>
                              <p
                                 className="hero-text"
                                 data-ani="slideinleft"
                                 data-ani-delay="0.4s"
                              >
                                 Welcome to Atek where we specialize in delivering tailored
                                 technology and Cloud Computing solutions.
                              </p>
                              <div
                                 className="btn-group"
                                 data-ani="slideinup"
                                 data-ani-delay="0.6s"
                              >
                                 <Link onClick={ClickHandler} to="/contact" className="th-btn th-icon">
                                    Get Started Now{' '}
                                    <i className="fa-light fa-arrow-right-long"></i>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>

            <div className="hero3-wrapper">
               <div className="container">
                  <div className="hero3-featuredbox d-flex justify-content-center align-items-end">
                     <div className="hero3-feature-wrapp">
                        <div className="hero-featured d-md-flex align-items-center justify-content-between">
                           {features.map((feature, index) => (
                              <div
                                 key={index}
                                 className="hero-featured-item text-center text-lg-start d-lg-flex align-items-center"
                              >
                                 <span className="hero-featured-icon">
                                    <img src={feature.icon} alt="" />
                                 </span>
                                 <div className="hero-featured-content">
                                    <h3 className="hero-featured-title text-anime-style-2">
                                       {feature.title}
                                    </h3>
                                    <p className="sec-text">{feature.text}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="hero-3thumbs">
                        <div className="hero3-swiper-custom">
                           <button
                              className="swiper-button-next"
                              data-slider-prev="#heroSlide3"
                           >
                              <img src={right} alt="" />
                           </button>
                           <div className="swiper-pagination"></div>
                           <button
                              className="swiper-button-prev"
                              data-slider-next="#heroSlide3"
                           >
                              <img src={left} alt="" />
                           </button>
                        </div>
                        <Swiper
                           spaceBetween={0}
                           slidesPerView={1}
                           className="hero3Thumbs d-none d-xl-block"
                        >
                           {slides.map((slide, index) => (
                              <SwiperSlide key={index}>
                                 <div className="hero-inner">
                                    <div className="hero3-card">
                                       <div className="hero-img">
                                          <img src={slide.bgSrc} alt="" />
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  </div>
               </div>
            </div>

            <div className="scroll-down">
               <ScrollLink href="#service-sec">
                  <strong className="scroll-wrap">
                     <span>
                        <img src={down} alt="" />
                     </span>
                     Scroll Down
                  </strong>
               </ScrollLink>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
