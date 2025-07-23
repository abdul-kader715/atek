import { type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import brand1 from '../../img/brand/brand_2_1.svg';
import brand2 from '../../img/brand/brand_2_2.svg';
import brand3 from '../../img/brand/brand_2_3.svg';
import brand4 from '../../img/brand/brand_2_4.svg';
import brand5 from '../../img/brand/brand_2_5.svg';
import brand6 from '../../img/brand/brand_2_6.svg';

type BrandLogo = {
  brandImage: string;
};

const brandLogos: BrandLogo[] = [
  { brandImage: brand1 },
  { brandImage: brand2 },
  { brandImage: brand3 },
  { brandImage: brand4 },
  { brandImage: brand5 },
  { brandImage: brand6 },
  { brandImage: brand1 },
  { brandImage: brand2 },
  { brandImage: brand3 },
  { brandImage: brand4 },
  { brandImage: brand5 },
  { brandImage: brand6 },
];

const BrandSlider: FC = () => {
  return (
    <div className="brand-area brand4 overflow-hidden space-bottom light-bg">
      <div className="container">
        <div className="brand4-wrapp">
          <p className="sec-note text-center text-white mb-30">
            36k+ Installation And Featured On
          </p>
          <Swiper
            className="swiper th-slider brandSlider4"
            id="brandSlider1"
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 6 },
              1400: { slidesPerView: 7 },
            }}
          >
            {brandLogos.map((logo, idx) => (
              <SwiperSlide key={idx}>
                <div className="brand-box">
                  <span>
                    <img className="original" src={logo.brandImage} alt="Brand Logo" />
                    <img className="gray" src={logo.brandImage} alt="Brand Logo" />
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
