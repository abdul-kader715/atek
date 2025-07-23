import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CaseData from "../../api/Case";

export default function CaseSlider() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 1;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const onMove = (e: { clientX: number; clientY: number; }) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const tick = () => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    gsap.ticker.add(tick);
    window.addEventListener("pointermove", onMove);

    return () => {
      window.removeEventListener("pointermove", onMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  const handleEnter = () => {
    cursorRef.current?.classList.add("active");
  };

  const handleLeave = () => {
    cursorRef.current?.classList.remove("active");
  };

  const handleInnerEnter = () => {
    cursorRef.current?.classList.remove("active");
  };

  const handleInnerLeave = () => {
    cursorRef.current?.classList.add("active");
  };

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
    <div className="slider-area case-slider slider-drag-wrap">
      <div ref={cursorRef} className="slider-drag-cursor">{'< DRAG >'}</div>

      <div
        className="swiper th-slider case-slider"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        ref={wrapperRef}
      >
        <Swiper
          className="th-slider case-slider"
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides
          coverflowEffect={{
            rotate: 0,
            stretch: 95,
            depth: 212,
            modifier: 1,
          }}
          spaceBetween={24}
          loop={settings.loop}
          speed={settings.speed}
          autoplay={settings.autoplay}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
        >
          {CaseData.slice(0, 12).map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="case-box">
                <div className="case-img">
                  <img src={slide.img} alt="case image" />
                  <div className="case-content">
                    <div className="media-left">
                      <h4 className="box-title">
                        <Link
                          onClick={ClickHandler}
                          to={`/case-study-details/${slide.slug}`}
                          onMouseEnter={handleInnerEnter}
                          onMouseLeave={handleInnerLeave}
                        >
                          {slide.title}
                        </Link>
                      </h4>
                      <span className="case-subtitle">{slide.subtitle}</span>
                    </div>
                  </div>
                  <div className="case-action">
                    <Link
                      onClick={ClickHandler}
                      to={`/case-study-details/${slide.slug}`}
                      className="case-btn"
                      onMouseEnter={handleInnerEnter}
                      onMouseLeave={handleInnerLeave}
                    >
                      <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
