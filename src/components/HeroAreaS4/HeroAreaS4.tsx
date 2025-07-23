import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import hero1 from '../../img/hero/hero_4_1.jpg';
import hero2 from '../../img/hero/hero_4_2.jpg';
import hero3 from '../../img/hero/hero_4_3.jpg';
import bg from '../../img/hero/hero_bg_4_1.jpg';

const HeroSlider = () => {
   const slides = [hero1, hero2, hero3];

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
         className="hero-4 background-image"
         id="hero"
         style={{ backgroundImage: `url(${bg})` }}
      >
         <div className="swiper th-slider" id="heroSlide4">
            <Swiper
               effect="fade"
               modules={[EffectFade, Autoplay]}
               autoHeight={true}
               loop={true}
               autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
               {slides.map((imgSrc, index) => (
                  <SwiperSlide key={index}>
                     <div className="hero-inner">
                        <div className="container">
                           <div className="hero-style4 text-center">
                              <span
                                 className="sub-title style1"
                                 data-ani="slideinup"
                                 data-ani-delay="0.1s"
                              >
                                 Welcome to Our
                              </span>
                              <h1
                                 className="hero-title"
                                 data-ani="slideinup"
                                 data-ani-delay="0.3s"
                              >
                                 Fueling Big Ideas with Startup{' '}
                                 <span
                                    className="title1"
                                    data-ani="slideinup"
                                    data-ani-delay="0.5s"
                                 >
                                    <span>Technology Agency</span>
                                 </span>
                              </h1>
                              <div
                                 className="btn-group"
                                 data-ani="slideinup"
                                 data-ani-delay="0.8s"
                              >
                                 <Link
                                    onClick={ClickHandler}
                                    to="/service"
                                    className="th-btn th-radius th-icon"
                                 >
                                    Our Services{' '}
                                    <i className="fa-light fa-arrow-right-long"></i>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="hero-4-thumb">
                           <img src={imgSrc} alt={`hero-${index}`} />
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default HeroSlider;
