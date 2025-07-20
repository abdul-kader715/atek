import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Bgimg from '../../img/hero/hero_bg_5_1.jpg';
import Bgimg2 from '../../img/hero/hero_bg_5_2.jpg';
import Bgimg3 from '../../img/hero/hero_bg_5_3.jpg';
import shape from '../../img/shape/hero-5-shape-1.png';
import shape2 from '../../img/shape/hero-5-shape-2.png';
import HeroForm from '../HeroForm/HeroForm';

const slides = [
   {
      bg: Bgimg,
      title: 'Tech Support That Never Sleeps',
      text: 'Tech support services provide assistance to individuals and organizations in resolving technical issues related to hardware, software, networks,',
   },
   {
      bg: Bgimg2,
      title: 'Let’s make your best trip with us',
      text: 'Tech support services provide assistance to individuals and organizations in resolving technical issues related to hardware, software, networks,',
   },
   {
      bg: Bgimg3,
      title: 'Explore beauty of the whole world',
      text: 'Tech support services provide assistance to individuals and organizations in resolving technical issues related to hardware, software, networks,',
   },
];

const HeroSlider = () => {
   const ClickHandler = (): void => {
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
      <div className="th-hero-wrapper hero-7 position-relative" id="hero">
         <Swiper
            className="th-slider hero-slider-1"
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 5000 }}
            loop
         >
            {slides.map((slide, index) => (
               <SwiperSlide key={index}>
                  <div className="hero-inner">
                     <div
                        className="th-hero-bg background-image"
                        style={{ backgroundImage: `url(${slide.bg})` }}
                     ></div>
                     <div className="container">
                        <div className="row text-center text-xl-start">
                           <div className="col-xl-7">
                              <div className="hero-style7 z-index-common">
                                 <h1
                                    className="hero-title"
                                    data-ani="slideinup"
                                    data-ani-delay="0.4s"
                                 >
                                    {slide.title}
                                 </h1>
                                 <p
                                    className="hero-text text-white mb-35"
                                    data-ani="slideinup"
                                    data-ani-delay="0.6s"
                                 >
                                    {slide.text}
                                 </p>
                                 <div
                                    className="btn-group"
                                    data-ani="slideinup"
                                    data-ani-delay="0.8s"
                                 >
                                    <Link
                                       onClick={ClickHandler}
                                       to="/contact"
                                       className="th-btn th-radius th-icon"
                                    >
                                       Get Started <i className="fa-light fa-arrow-right-long"></i>
                                    </Link>
                                    <Link
                                       onClick={ClickHandler}
                                       to="/service"
                                       className="th-btn style2 th-radius th-icon"
                                    >
                                       Our Services <i className="fa-light fa-arrow-right-long"></i>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="hero-7-shape-box hero-5-shape-box z-index-3">
                        <div
                           className="hero-shape-1"
                           data-ani="slideinleft"
                           data-ani-delay="0.8s"
                        >
                           <img src={shape} alt="decorative shape 1" />
                        </div>
                        <div
                           className="hero-shape-2"
                           data-ani="slideinleft"
                           data-ani-delay="0.9s"
                        >
                           <img src={shape2} alt="decorative shape 2" />
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <HeroForm />
      </div>
   );
};

export default HeroSlider;
