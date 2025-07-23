
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cateShape from './img/categorie/cate-shape.png';
import { Link } from 'react-router-dom';

import cate1 from './img/categorie/cate1.png';
import cate2 from './img/categorie/cate2.png';
import cate3 from './img/categorie/cate3.png';
import cate4 from './img/categorie/cate4.png';
import cate5 from './img/categorie/cate5.png';

const productSlides = [
  {
    img: cate1,
    link: 'https://themeforest.net/item/cigma-multipurpose-business-consulting-html-template/56550644?s_rank=6',
  },
  {
    img: cate2,
    link: 'https://themeforest.net/item/atek-it-solution-technology-figma-template/56737794?s_rank=4',
  },
  {
    img: cate3,
    link: 'https://themeforest.net/item/rotal-hotel-resort-booking-html-template/56740194?s_rank=3',
  },
  {
    img: cate4,
    link: 'https://themeforest.net/item/piller-real-estate-figma-template/56976401?s_rank=2',
  },
  {
    img: cate5,
    link: 'https://themeforest.net/item/robor-ai-and-automation-integration-figma-template/56978233?s_rank=1',
  },
  {
    img: cate3,
    link: 'https://themeforest.net/item/rotal-luxury-hotel-booking-figma-template/56568873?s_rank=5',
  },
  
  {
    img: cate1,
    link: 'https://themeforest.net/user/themehour/portfolio',
  },
  {
    img: cate2,
    link: 'https://themeforest.net/user/themehour/portfolio',
  },
  {
    img: cate3,
    link: 'https://themeforest.net/user/themehour/portfolio',
  },
  {
    img: cate4,
    link: 'https://themeforest.net/user/themehour/portfolio',
  },
  {
    img: cate5,
    link: 'https://themeforest.net/user/themehour/portfolio',
  },
  {
    img: cate3,
    link: 'https://themeforest.net/user/themehour/portfolio',
  },
];


const LatestProductsSlider = () => {
   return (
      <section className="categorie-area categorie-style">
         <div className="container th-container1440 z-index-common">
            <div className="categorie-wrapp position-relative text-center text-xl-start d-xl-flex justify-content-between align-items-center">
               <div className="title-area categorie-titlebox">
                  <h2 className="sec-title">Themehour Latest Products</h2>
                  <p className="sec-text">
                     Get a stunning set of inner ready-made pages. Choose from pre-made layouts for real business.
                  </p>
               </div>
               <div className="slider-area categorie-slider">
                  <Swiper
                     modules={[Navigation]}
                     spaceBetween={20}
                     slidesPerView={6}
                     breakpoints={{
                        0: { slidesPerView: 3 },
                        576: { slidesPerView: 5 },
                        768: { slidesPerView: 6 },
                        992: { slidesPerView: 6 },
                        1200: { slidesPerView: 5 },
                        1400: { slidesPerView: 6 },
                     }}
                     navigation={{
                        nextEl: '.categorie-icon',
                     }}
                     className="swiper th-slider text-end" id="innerSlider1"
                  >
                     {productSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                           <div className="categorie-item">
                              <Link to={slide.link} target="_blank" rel="noopener noreferrer">
                                 <img src={slide.img} alt={`Product ${index + 1}`} />
                              </Link>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
               <div className="categorie-shape">
                  <img className="categorie-line d-none d-xl-block" src={cateShape} alt="Decoration" />
                  <button className="categorie-icon d-none d-xl-block" aria-label="Next Slide">
                     <i className="fa-solid fa-angle-right"></i>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default LatestProductsSlider;
