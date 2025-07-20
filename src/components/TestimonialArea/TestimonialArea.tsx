import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialData from '../../api/testimonial';
import quote from '../../img/icon/testi-quote.svg';
import Shape from '../../img/shape/shape_7.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

const TestimonialArea = (props) => {

    const settings = {
      loop: true,
      speed: 1200,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
      },
   };


   const sliderOptions = {
      modules: [Autoplay, Pagination],
      centeredSlides: true,
      spaceBetween: 30,
      loop: settings.loop,
      speed: settings.speed,
      autoplay: settings.autoplay,
      pagination: {
         clickable: true,
      },
      breakpoints: {
         767: {
            slidesPerView: 2,
            centeredSlides: true,
         },
         992: {
            slidesPerView: 2,
            centeredSlides: true,
         },
         1200: {
            slidesPerView: 2.5,
            centeredSlides: true,
         },
         1400: {
            slidesPerView: 2.5,
            spaceBetween: 5,
            centeredSlides: true,
         },
      },
   };


   return (
      <section className={`${props.className}`} id="testi-sec">
         <div className="container-fluid p-0">
            <div className="title-area mb-20 text-center">
               <span className="sub-title text-anime-style-2">Testimonial</span>
               <h2 className="sec-title text-anime-style-3">What Client Say About us</h2>
            </div>
            <div className="slider-area">
               <Swiper
                  {...sliderOptions}
                  className="swiper th-slider testiSlider1 has-shadow"
                  id="testiSlider1"
               >
                  {testimonialData.slice(0, 4).map((testimonial, index) => (
                     <SwiperSlide key={index}>
                        <div className="testi-card">
                           <div className="testi-card_wrapper">
                              <div className="testi-card_profile">
                                 <div className="testi-card_avater">
                                    <img src={testimonial.img} alt="testimonial" />
                                 </div>
                                 <div className="media-body">
                                    <h3 className="box-title">{testimonial.athName}</h3>
                                    <span className="testi-card_desig">{testimonial.postion}</span>
                                 </div>
                              </div>
                              <div className="testi-card_review">
                                 {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                 ))}
                              </div>
                           </div>
                           <p className="testi-card_text">“{testimonial.document}”</p>
                           <div className="testi-card-quote">
                              <img src={quote} alt="quote" />
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>


         <ShapeMockup className="shape-mockup th-line-shape d-none d-xl-block" bottom="-2%" right="0%">
            <span>
               <svg width="1920" height="775" viewBox="0 0 1920 775" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     className="line-1"
                     d="M1922 761.516C1883.55 789.861 1799.69 764.276 1695.5 665.5C1565.26 542.03 1214 420.5 1168.91 537.637C1110.92 688.314 1382.3 703.384 1301.08 462.69C1219.86 221.996 727.193 406.687 337.011 313.758C40.4869 243.135 -26.3152 31.5872 -14.781 1"
                     stroke="#F2F5FA"
                     strokeWidth="4"
                  />
               </svg>
            </span>
         </ShapeMockup>

         <ShapeMockup
            src={Shape}
            alt="Shape"
            className=" movingX d-none d-xl-block" top="15%" left="5%"
         />
          <ShapeMockup className="shape-mockup movingX d-none d-xl-block" top="15%" left="5%">
            <img src={Shape} alt="shape" />
        </ShapeMockup>

      </section>
   );
};

export default TestimonialArea;
