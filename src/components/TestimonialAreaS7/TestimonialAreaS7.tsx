import  { useEffect, useRef, type FC } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';

import quoteIcon from '../../img/icon/testi-quote2.svg';
import avatar1 from '../../img/testimonial/testi_6_1.png';
import avatar2 from '../../img/testimonial/testi_6_2.png';
import avatar3 from '../../img/testimonial/testi_6_3.png';
import testiBg1 from '../../img/testimonial/testi_bg_1.jpg';
import testiBg2 from '../../img/testimonial/testi_bg_2.jpg';
import testiBg3 from '../../img/testimonial/testi_bg_3.jpg';

interface Testimonial {
  bg: string;
  avatar: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    bg: testiBg1,
    avatar: avatar1,
    name: 'Alex Carlose',
    role: 'UI/UX Design',
    text: '“IT Solutions encompass a wide range of services, technologies, and strategies designed to address the technological needs of businesses and organizations. These solutions are tailored to improve efficiency.”',
  },
  {
    bg: testiBg2,
    avatar: avatar2,
    name: 'Maria Doe',
    role: 'App Development',
    text: '“IT Solutions encompass a wide range of services, technologies, and strategies designed to address the technological needs of businesses and organizations. These solutions are tailored to improve efficiency.”',
  },
  {
    bg: testiBg3,
    avatar: avatar3,
    name: 'Angelina Rose',
    role: 'Software Engineer',
    text: '“IT Solutions encompass a wide range of services, technologies, and strategies designed to address the technological needs of businesses and organizations. These solutions are tailored to improve efficiency.”',
  },
  {
    bg: testiBg2,
    avatar: avatar2,
    name: 'Angelina Rose',
    role: 'Software Engineer',
    text: '“IT Solutions encompass a wide range of services, technologies, and strategies designed to address the technological needs of businesses and organizations. These solutions are tailored to improve efficiency.”',
  },
];

const TestimonialSection: FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

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
    if (cursorRef.current) cursorRef.current.classList.add('active');
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) cursorRef.current.classList.remove('active');
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
    <section className="testi-area9 bg-smoke overflow-hidden space" id="testi-sec">
      <div className="container">
        <div className="title-area mb-20 text-center">
          <span className="sub-title text-anime-style-2">Testimonial</span>
          <h2 className="sec-title text-anime-style-3">What Client Say About us</h2>
        </div>
      </div>
      <div
        className="container-fluid p-0"
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slider-drag-wrap">
          <div className="slider-drag-cursor" ref={cursorRef}>
            {'< DRAG >'}
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            centeredSlides
            centeredSlidesBounds
            spaceBetween={120}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            className="testiSlider9"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card3 gsap-cursor">
                  <div className="box-img">
                    <img src={item.bg} alt="testimonial background" />
                  </div>
                  <div className="box-content">
                    <div className="box-profile">
                      <div className="box-avater">
                        <img src={item.avatar} alt={item.name} />
                      </div>
                      <p className="box-text">{item.text}</p>
                      <div className="media-body">
                        <h3 className="box-title">{item.name}</h3>
                        <span className="box-desig">{item.role}</span>
                      </div>
                    </div>
                    <div className="box-quote">
                      <img src={quoteIcon} alt="quote icon" />
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
