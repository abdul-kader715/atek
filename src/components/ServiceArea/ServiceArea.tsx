import { useRef, useEffect, type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ServiceData from '../../api/service';
import servicebg from '../../img/bg/service_bg_1.webp';
import { Autoplay, Pagination } from 'swiper/modules';

interface ServiceAreaProps {
  className?: string;
}

const ServiceArea: FC<ServiceAreaProps> = (props) => {
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
    <section
      className={`${props.className ?? ''}`}
      id="service-sec"
      style={{ backgroundImage: `url(${servicebg})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area service-title-box text-center">
              <span className="sub-title mb-15 text-anime-style-2">What We’re Offering</span>
              <h2 className="sec-title text-anime-style-2">
                Dealing in all professional IT services
              </h2>
              <p className="sec-text mb-50">
                IT solutions refer to a broad range of services and technologies designed to address
                <br />
                specific business needs, streamline operations, and drive growth.
              </p>
            </div>
          </div>
        </div>

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
            spaceBetween={20}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
          >
            {ServiceData.slice(0, 9).map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-box service-style-1 gsap-cursor">
                  <div className="service-img">
                    <Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>
                      <img src={service.image} alt={service.title} />
                    </Link>
                  </div>
                  <div className="service-content">
                    <h3 className="box-title">
                      <Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="service-box_text">{service.description}</p>
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
    </section>
  );
};

export default ServiceArea;
