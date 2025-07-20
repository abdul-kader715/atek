import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gallery1 from '../../img/gallery/gallery_15_1.png';
import gallery2 from '../../img/gallery/gallery_15_2.png';
import gallery3 from '../../img/gallery/gallery_15_3.png';
import gallery4 from '../../img/gallery/gallery_15_4.png';
import gallery5 from '../../img/gallery/gallery_15_5.png';
import gallery6 from '../../img/gallery/gallery_15_7.png';
import './GallerySection.css';

interface GalleryItem {
  img: string;
  title: string;
}

const galleryData: GalleryItem[] = [
  { img: gallery1, title: 'Captivating Digital Campaign' },
  { img: gallery2, title: 'Graphics Design' },
  { img: gallery3, title: 'Software Development' },
  { img: gallery4, title: 'Cybersecurity' },
  { img: gallery5, title: 'App Development' },
  { img: gallery6, title: 'UiXi Design' },
  { img: gallery2, title: 'Django Development' },
  { img: gallery3, title: 'JavaScript Developer' },
  { img: gallery4, title: 'Python Developer' },
  { img: gallery5, title: 'Web Development' },
];

const GallerySection = () => {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const openPopup = (src: string) => setPopupImage(src);
  const closePopup = () => setPopupImage(null);

  const settings = {
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 1;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const tickerFn = () => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    gsap.ticker.add(tickerFn);

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      gsap.ticker.remove(tickerFn);
    };
  }, []);

  const handleMouseEnter = () => {
    cursorRef.current?.classList.add('active');
  };

  const handleMouseLeave = () => {
    cursorRef.current?.classList.remove('active');
  };

  return (
    <section className="gallery-area8 position-relative overflow-hidden space" id="gallery-sec">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="title-area text-center text-lg-start pe-xl-5 me-xl-5">
              <span className="sub-title text-anime-style-2">Projects Gallery</span>
              <h2 className="sec-title text-anime-style-3">Our Latest Projects</h2>
              <p className="sec-text scroll-text-animation" data-animation="fade_from_bottom">
                Digital transformation is no longer optional—it is a necessity for businesses to stay relevant and competitive. By embracing modern technologies.
              </p>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn gallery8-btn scroll-text-animation" data-animation="fade_from_bottom">
              <Link to="/gallery" className="th-btn style5 th-icon th-radius">
                Enter Gallery <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div
          className="slider-area slider-drag-wrap"
          ref={wrapperRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="slider-drag-cursor" ref={cursorRef}>{'< DRAG >'}</div>
          <Swiper
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2, centeredSlides: true },
              992: { slidesPerView: 3, centeredSlides: true },
              1200: { slidesPerView: 3, centeredSlides: true },
              1400: { slidesPerView: 5, centeredSlides: true },
            }}
            className="gallerySlide10 has-shadow"
          >
            {galleryData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-card2">
                  <div className="box-img">
                    <img
                      src={item.img}
                      alt="gallery"
                      onClick={() => openPopup(item.img)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">
                      <Link to="/gallery">{item.title}</Link>
                    </h3>
                    <p className="box-text">
                      Have a valid credit card or preferred payment method ready to complete the booking process.
                    </p>
                  </div>
                  <div className="box-btn">
                    <button onClick={() => openPopup(item.img)} className="icon-btn popup-image">
                      <i className="fa-light fa-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {popupImage && (
        <div className="custom-popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={popupImage}
              alt="Enlarged"
              className="popup-image"
            />
            <button className="lightbox-close" onClick={closePopup}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
