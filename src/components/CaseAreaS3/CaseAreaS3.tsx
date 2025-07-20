import { useEffect, useRef, type FC } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import caseData from '../../api/Case';
import left from '../../img/icon/left-arrow2.svg';
import right from '../../img/icon/right-arrow2.svg';
import blog from '../../img/shape/blog-1-shape.png';
import shap from '../../img/shape/ab-1-shape-1.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';

interface CaseAreaS3Props {
  className?: string;
}

const CaseAreaS3: FC<CaseAreaS3Props> = ({ className }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Refs typed as HTMLButtonElement | null
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

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
    };
  }, []);

  const handleMouseEnter = () => {
    cursorRef.current?.classList.add('active');
  };

  const handleMouseLeave = () => {
    cursorRef.current?.classList.remove('active');
  };

  return (
    <div className={className}>
      <div ref={cursorRef} className="custom-cursor" />

      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title text-anime-style-2">Case Studies</span>
          <h2 className="sec-title text-anime-style-3">Let’s See Our Work Showcase</h2>
        </div>

        <div className="slider-area" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Swiper
            className="swiper th-slider case-slider3 slider-drag-wrap"
            modules={[EffectCoverflow, Autoplay, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            loop
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            coverflowEffect={{
              rotate: -17,
              stretch: -8,
              depth: 330,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
          >
            {caseData.slice(0, 5).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="case-box3 gsap-cursor">
                  <div className="case-img position-relative">
                    <img src={item.img3} alt="case" />
                    <div className="case-content">
                      <h3 className="case-title">
                        <Link onClick={ClickHandler} to={`/case-study-details/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <span className="case-categ">{item.subtitle2}</span>
                      <Link onClick={ClickHandler} to={`/case-study-details/${item.slug}`} className="case-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="icon-box mt-60 text-center">
            <button ref={nextRef} className="slider-arrow style5 default" aria-label="Next Slide">
              <img src={right} alt="next" />
            </button>
            <button ref={prevRef} className="slider-arrow style5 default" aria-label="Previous Slide">
              <img src={left} alt="prev" />
            </button>
          </div>
        </div>

        <ShapeMockup className="shape-mockup shape1 d-none d-xxl-block" bottom="3%" left="-9%">
          <img src={blog} alt="shape" />
        </ShapeMockup>
        <ShapeMockup className="shape-mockup movingX d-none d-xxl-block" top="9%" right="-7%">
          <img src={shap} alt="shape" />
        </ShapeMockup>
      </div>
    </div>
  );
};

export default CaseAreaS3;
