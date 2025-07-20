import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// Import images
import img1 from '../../img/gallery/gallery_12_2.jpg';
import img2 from '../../img/gallery/gallery_12_3.jpg';
import img3 from '../../img/gallery/gallery_12_4.jpg';
import img4 from '../../img/gallery/gallery_12_5.jpg';
import img5 from '../../img/gallery/gallery_12_6.jpg';

const galleryImages = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img1];

const settings = {
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
};

const GalleryAreaS5 = () => {
  return (
    <div className="container">
      <div className="title-area footer8-titlebox text-center mb-60 mt-n3">
        <h2 className="sec-title text-white">Instagram Post</h2>
      </div>
      <div className="gallery-area3">
        <div className="slider-area">
          <Swiper
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
            className="th-slider has-shadow"
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="gallery-thumb2 f-gallary style2">
                  <img src={img} alt={`Gallery Image ${idx + 1}`} />
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

export default GalleryAreaS5;
