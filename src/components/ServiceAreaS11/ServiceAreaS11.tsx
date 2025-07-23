import { useEffect, useRef, type FC } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectData from '../../api/project';
import shape from '../../img/shape/sv-shape.png';

interface ServiceAreaS11Props {
  className?: string;
}

const ServiceAreaS11: FC<ServiceAreaS11Props> = (props) => {
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

  const cursorRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className={`${props.className}`} id="project-sec">
      <div className="container">
        <div className="project-titlebox">
          <div className="row">
            <div className="col-md-9 col-lg-8 col-xl-8">
              <div className="title-area text-center text-md-start">
                <span className="sub-title text-anime-style-2">Service We’re Offering</span>
                <h2 className="sec-title text-anime-style-3">
                  Your Digital Journey Starts Here
                </h2>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-4">
              <div className="project2-btn text-center text-md-end">
                <Link
                  onClick={ClickHandler}
                  to="/service"
                  className="th-btn style4 th-radius th-icon"
                >
                  View All Services <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="slider-area slider-drag-wrap"
          ref={wrapperRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="slider-drag-cursor" ref={cursorRef}>
            {'< DRAG >'}
          </div>

          <Swiper
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
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            className="swiper th-slider has-shadow"
          >
            {ProjectData.slice(0, 5).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="project-item2 style2 th-ani gsap-cursor">
                  <div
                    className="project-item2_img global-img"
                    style={{
                      WebkitMaskImage: `url(${shape})`,
                      maskImage: `url(${shape})`,
                      WebkitMaskSize: 'cover',
                      maskSize: 'cover',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                    }}
                  >
                    <img src={item.pimg5} alt="image" />
                  </div>
                  <div className="project-content">
                    <h3 className="box-title">
                      <Link
                        onClick={ClickHandler}
                        to={`/project-details/${item.slug}`}
                      >
                        {item.title3}
                      </Link>
                    </h3>
                    <span className="sub-title">{item.subtitle3}</span>
                  </div>
                  <Link
                    onClick={ClickHandler}
                    to={`/project-details/${item.slug}`}
                    className="icon-btn"
                  >
                    <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaS11;











