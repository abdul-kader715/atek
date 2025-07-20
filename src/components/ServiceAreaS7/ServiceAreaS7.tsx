import gsap from 'gsap';
import { useEffect, useRef, type FC } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import ServiceData from '../../api/service';

interface ServiceAreaS7Props {
  className?: string;
}

const ServiceAreaS7: FC<ServiceAreaS7Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

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
    <section className={`${props.className}`} id="service-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area service-title-box mb-50 text-center">
              <span className="sub-title text-anime-style-2">Our Services</span>
              <h2 className="sec-title text-anime-style-2">
                We Provide Experts cyber security services
              </h2>
            </div>
          </div>
        </div>
        <div className="service-wrapper">
          <div
            className="slider-area slider-drag-wrap position-relative"
            ref={wrapperRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="slider-drag-cursor" ref={cursorRef}>
              {'< DRAG >'}
            </div>

            <Swiper
              className="swiper th-slider has-shadow"
              id="serviceSlider1"
              spaceBetween={24}
              loop={settings.loop}
              speed={settings.speed}
              autoplay={settings.autoplay}
              modules={[Autoplay]}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
            >
              {ServiceData.slice(0, 5).map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-box service-style-1">
                    <div className="service-img">
                      <Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>
                        <img src={service.image7} alt={service.title} />
                      </Link>
                    </div>
                    <div className="service-content">
                      <h3 className="box-title">
                        <Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>
                          {service.title7}
                        </Link>
                      </h3>
                      <p className="service-box_text">{service.description7}</p>
                      <Link
                        onClick={ClickHandler}
                        to={`/service-details/${service.slug}`}
                        className="th-btn style4"
                      >
                        Read More <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaS7;
