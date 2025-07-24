import { type FC } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// logo imports
import img1 from '../../img/brand/brand_1_1.svg';
import img2 from '../../img/brand/brand_1_2.svg';
import img3 from '../../img/brand/brand_1_3.svg';
import img4 from '../../img/brand/brand_1_4.svg';
import img5 from '../../img/brand/brand_1_5.svg';
import img6 from '../../img/brand/brand_1_6.svg';
import img7 from '../../img/brand/brand_1_1.svg';  

type BrandImage = {
  id: string;
  logo: string;
};

const brandImages: BrandImage[] = [
  { id: '1', logo: img1 },
  { id: '2', logo: img2 },
  { id: '3', logo: img3 },
  { id: '4', logo: img4 },
  { id: '5', logo: img5 },
  { id: '6', logo: img6 },
  { id: '7', logo: img7 },
  { id: '8', logo: img4 }, 
];

interface BrandAreaProps {
  className?: string;
  SecNote?: boolean;
}

const BrandArea: FC<BrandAreaProps> = ({ className = '', SecNote = false }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

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
    <div className={className}>
      <div className="container th-container">
        {SecNote && (
          <p className="sec-note text-center mb-60">
            Trusted by 1600+ of the world's most popular companies
          </p>
        )}
        <div className="slider-area text-center">
          <Swiper
            className="swiper th-slider brandSlider1"
            id="brandSlider1"
            spaceBetween={30}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              476: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 6 },
              1400: { slidesPerView: 7 },
            }}
          >
            {brandImages.map((imgSrc) => (
              <SwiperSlide key={imgSrc.id}>
                <div className="brand-box">
                  <a onClick={ClickHandler} href="#" aria-label="Brand logo link">
                    <img className="original" src={imgSrc.logo} alt="Brand Logo" />
                    <img className="gray" src={imgSrc.logo} alt="Brand Logo" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
