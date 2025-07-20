import { useRef, type FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import arrowLeft from '../../img/icon/left-arrow2.svg';
import arrowRight from '../../img/icon/right-arrow2.svg';
import quoteIcon from '../../img/icon/testi-quote5.svg';
import shape1 from '../../img/shape/shape_2_1.png';
import shape2 from '../../img/shape/shape_2_2.png';
import shape3 from '../../img/shape/shape_2_3.png';
import shape4 from '../../img/shape/shape_2_4.png';
import testi1 from '../../img/testimonial/testi_11_1.jpg';
import testi2 from '../../img/testimonial/testi_11_2.jpg';
import testi3 from '../../img/testimonial/testi_11_3.jpg';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

interface Testimonial {
  img: string;
  name: string;
  title: string;
  number: string;
}

const testimonials: Testimonial[] = [
  {
    img: testi1,
    name: 'Angelina Mary',
    title: 'UI/UX Designer',
    number: '01',
  },
  {
    img: testi2,
    name: 'Maria Doe',
    title: 'World Traveler',
    number: '02',
  },
  {
    img: testi3,
    name: 'Angelina Rose',
    title: 'World Traveler',
    number: '03',
  },
];

const TestimonialSlider: FC = () => {
  const slides = [...testimonials, ...testimonials, ...testimonials];

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

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
    <section className="testi-area12 position-relative bg-smoke overflow-hidden space" id="testi-sec">
      <div className="container-fluid pe-4 ps-4 justify-content-center">
        <div className="title-area mb-0 text-center">
          <span className="sub-title text-anime-style-2">Testimonial</span>
          <h2 className="sec-title text-anime-style-3">What Client Say About us</h2>
        </div>

        <div className="slider-area position-relative">
          <Swiper
            className="th-slider testiSlider12 has-shadow"
            modules={[Navigation, Pagination, Autoplay]}
            onInit={(swiper) => {
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            pagination={{ clickable: true, el: '.slider-pagination' }}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: true },
              767: { slidesPerView: 1, centeredSlides: true },
              992: { slidesPerView: 1, centeredSlides: true },
              1200: { slidesPerView: 2, centeredSlides: true },
              1400: { slidesPerView: 3, centeredSlides: true },
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card5">
                  <div className="box-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="box-content">
                    <div className="box-quote">
                      <img src={quoteIcon} alt="quote" />
                    </div>
                    <p className="box-text">
                      “Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates.”
                    </p>
                    <h3 className="box-title">{item.name}</h3>
                    <span className="box-desig">{item.title}</span>
                    <span className="box-number">{item.number}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-pagination" />

            <button className="slider-arrow style7 slider-prev" ref={prevRef} aria-label="Previous slide">
              <img src={arrowLeft} alt="Previous" />
            </button>
            <button className="slider-arrow style7 slider-next" ref={nextRef} aria-label="Next slide">
              <img src={arrowRight} alt="Next" />
            </button>
          </Swiper>
        </div>

        <ShapeMockup className="shape-mockup movingX d-none d-xl-block" top="8%" left="-15%">
          <img src={shape1} alt="shape" />
        </ShapeMockup>
        <ShapeMockup className="shape-mockup jump d-none d-xl-block" top="23%" right="-14%">
          <img src={shape2} alt="shape" />
        </ShapeMockup>
        <ShapeMockup className="shape-mockup spin d-none d-xl-block" bottom="-4%" left="-18%">
          <img src={shape3} alt="shape" />
        </ShapeMockup>
        <ShapeMockup className="shape-mockup movingX d-none d-xl-block" bottom="12%" right="-14%">
          <img src={shape4} alt="shape" />
        </ShapeMockup>
      </div>
    </section>
  );
};

export default TestimonialSlider;
