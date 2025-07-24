import  { useRef, useState, type FC } from 'react';
import { Link } from 'react-router-dom';


import { EffectFade, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import benefit1 from '../../img/benefit/benefit_bg_1_1.webp';
import benefit2 from '../../img/benefit/benefit_bg_1_2.webp';
import benefit3 from '../../img/benefit/benefit_bg_1_3.webp';
import benefit4 from '../../img/benefit/benefit_bg_1_4.webp';
import benefit5 from '../../img/benefit/benefit_bg_1_5.webp';
import arrowLeft from '../../img/icon/left-arrow2.svg';
import arrowRight from '../../img/icon/right-arrow2.svg';

const BenefitSection: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const benefitImages: string[] = [benefit1, benefit2, benefit3, benefit4, benefit1, benefit2];
  const thumbImages: string[] = [benefit1, benefit2, benefit3, benefit4, benefit5, benefit1];

  return (
    <section className="benefit-area position-relative overflow-hidden bg-smoke" id="benefit-sec">

      {/* Main Swiper */}
      <Swiper
        modules={[EffectFade, Thumbs, Navigation]}
        effect="fade"
        speed={2000}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        className="th-slider benefitSlide"
      >
        {benefitImages.map((img, idx) => (
          <SwiperSlide key={`main-${idx}`}>
            <div className="benefit-img">
              <img src={img} alt={`Benefit ${idx + 1}`} />
            </div>
          </SwiperSlide>
        ))}

        <div className="icon-box">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="slider-arrow default slider-prev"
          >
            <img src={arrowRight} alt="Prev" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="slider-arrow default slider-next"
          >
            <img src={arrowLeft} alt="Next" />
          </button>
        </div>
      </Swiper>

      {/* Content */}
      <div className="benefit-area">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Text Section */}
            <div className="col-xl-4">
              <div className="title-area benefit-titlebox pe-xl-5">
                <h2 className="sec-title text-white text-anime-style-2">
                  Enhanced Customer Experience
                </h2>
                <p
                  className="text-white scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Enables businesses to make data-driven decisions with confidence. Data Analytics is the process of examining, interpreting,
                </p>
                <Link to="/" className="th-btn style2 th-radius th-icon">
                  Learn More <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>

            {/* Right Thumbs Section */}
            <div className="col-xl-8">
              <div className="title-area">
                <span className="sub-title text-white text-anime-style-2">
                  Our Benefits
                </span>
                <h2 className="sec-title text-white text-anime-style-3">
                  Key Benefits of Data Analytics
                </h2>
              </div>

              <div className="slider-area benefit-slider-thumb-wrap">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  modules={[Thumbs]}
                  spaceBetween={10}
                  loop={true}
                  slidesPerView={4}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    575: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 3 },
                    1300: { slidesPerView: 4 },
                  }}
                  className="th-slider benefit-grid-thumb"
                >
                  {thumbImages.map((img, idx) => (
                    <SwiperSlide key={`thumb-${idx}`}>
                      <div className="box-img">
                        <img src={img} alt={`Thumb ${idx + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default BenefitSection;
