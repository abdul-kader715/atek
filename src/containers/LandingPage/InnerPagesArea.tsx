import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import innerPages from './innerData';

const AwesomeInnerPages = () => {
   const settings = {
      loop: true,
      speed: 1200,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
      },
   };

   return (
      <div id="innerPage" className="inner-page-area space-bottom overflow-hidden">
         <div className="container-fluid">
            <div className="title-area text-center mb-60">
               <h2 className="sec-title">Awesome Inner Pages</h2>
               <p className="sec-text">
                  Get a stunning set of inner ready-made pages. Choose from pre-made <br />
                  layouts for real business.
               </p>
            </div>
            <div className="slider-area">
               <Swiper
                  spaceBetween={10}
                  loop={settings.loop}
                  speed={settings.speed}
                  autoplay={settings.autoplay}
                  modules={[Autoplay]}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 2 },
                     768: { slidesPerView: 2 },
                     992: { slidesPerView: 3 },
                     1400: { slidesPerView: 7 },
                  }}
                  className="swiper inner-slider th-slider" id="innerSlider1"
               >

                  {innerPages.map((page, i) => (
                     <SwiperSlide key={i}>
                        <div className="inner-thumb-box">
                           <div className="inner-thumb-img">
                              <img src={page.img} alt={page.alt} />
                              <Link target="_blank" rel="noopener noreferrer" to={page.link} className="th-btn style3 w-100">
                                 View Demo
                              </Link>
                           </div>
                           <h4 className="box-title mb-0 text-center">
                              <Link target="_blank" to={page.link}>{page.title}</Link>
                           </h4>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default AwesomeInnerPages;
