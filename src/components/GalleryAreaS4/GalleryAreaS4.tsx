import { type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import G1 from '../../img/gallery/gallery_9_1.webp';
import G2 from '../../img/gallery/gallery_9_2.webp';
import G3 from '../../img/gallery/gallery_9_3.webp';
import G4 from '../../img/gallery/gallery_9_4.webp';
import G5 from '../../img/gallery/gallery_9_5.webp';
import G6 from '../../img/gallery/gallery_9_6.webp';

interface GalleryItem {
  img: string;
}

const galleryItems: GalleryItem[] = [
  { img: G1 },
  { img: G2 },
  { img: G3 },
  { img: G4 },
  { img: G5 },
  { img: G6 },
  { img: G3 },
];

interface GalleryAreaS4Props {
  className?: string;
}

const GalleryAreaS4: FC<GalleryAreaS4Props> = ({ className = '' }) => {
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
      <div className="container-fluid">
        <div className="title-area text-center">
          <span className="sub-title text-anime-style-2">We Are On Instagram</span>
          <h2 className="sec-title text-anime-style-3">Follow With Us</h2>
        </div>
        <div className="slider-area">
          <Swiper
            className="swiper th-slider has-shadow"
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1400: { slidesPerView: 6 },
            }}
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-thumb2">
                  <img src={item.img} alt={`Gallery Image ${index + 1}`} />
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-btn"
                    aria-label="Instagram link"
                  >
                    <i className="fab fa-instagram"></i>
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

export default GalleryAreaS4;
