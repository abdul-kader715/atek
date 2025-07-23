import { useEffect, useRef, type FC } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';

import testi1 from '../../img/testimonial/testi_7_1.png';
import testi2 from '../../img/testimonial/testi_7_2.png';
import testi3 from '../../img/testimonial/testi_7_3.png';
import testi4 from '../../img/testimonial/testi_7_4.png';

interface Testimonial {
  text: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  { text: "App experience.", name: "Michel Smith", image: testi1 },
  { text: "Web experience.", name: "Sarah Johnson", image: testi2 },
  { text: "Theme experience.", name: "Richard Wilson", image: testi3 },
  { text: "UiXi experience.", name: "David Brown", image: testi4 },
  { text: "Python experience.", name: "Michel Smith", image: testi2 },
  { text: "Python experience.", name: "Michel Smith", image: testi3 },
];

const TestimonialSection: FC = () => {
  const settings = {
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  const cursorRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 1;

    const xSet = gsap.quickSetter(cursor, 'x', 'px');
    const ySet = gsap.quickSetter(cursor, 'y', 'px');

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      gsap.ticker.remove(() => {});
    };
  }, []);

  const handleMouseEnter = () => {
    cursorRef.current?.classList.add('active');
  };

  const handleMouseLeave = () => {
    cursorRef.current?.classList.remove('active');
  };

  return (
    <section className="testi-area11 overflow-hidden space dark-bg" id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area text-center">
          <span className="sub-title extra-sub text-anime-style-2">Testimonial</span>
          <h2 className="sec-title text-white text-anime-style-3">What Client Say About us?</h2>
        </div>

        <div
          className="slider-area slider-drag-wrap position-relative"
          ref={wrapperRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="slider-drag-cursor" ref={cursorRef}>{'< DRAG >'}</div>
          <Swiper
            centeredSlides={true}
            pagination={{ clickable: true }}
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            className="th-slider slider-drag-wrap testiSlider11"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card4 light-bg gsap-cursor">
                  <div className="testi-card4_review">
                    {[...Array(5)].map((_, i) => (
                      <i className="fa-solid fa-star" key={i}></i>
                    ))}
                  </div>
                  <div className="box-content">
                    <p className="box-text">
                      “We specialize in personalized itineraries, 24/7 customer support, & access to exclusive deals, ensuring a unique and unforgettable {item.text}”
                    </p>
                    <div className="box-profile">
                      <div className="box-avater">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title text-white">{item.name}</h3>
                        <span className="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
