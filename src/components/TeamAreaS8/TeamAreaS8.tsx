import { useEffect, useRef, type FC } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import teamData from "../../api/team";

import gsap from "gsap";

const TeamSection: FC = () => {
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

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
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

    const tick = () => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    gsap.ticker.add(tick);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  const handleMouseEnter = () => {
    cursorRef.current?.classList.add("active");
  };

  const handleMouseLeave = () => {
    cursorRef.current?.classList.remove("active");
  };

  return (
    <section className="team-area7 position-relative space overflow-hidden">
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title text-anime-style-2">Our Team Members</span>
          <h2 className="sec-title text-anime-style-3">Meet Our Expert Members</h2>
        </div>
        <div
          className="slider-area"
          ref={wrapperRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="slider-drag-cursor" ref={cursorRef}>
            {'< DRAG >'}
          </div>

          <Swiper
            pagination={{ el: ".slider-pagination", clickable: true }}
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
              1200: { slidesPerView: 4 },
            }}
            className="teamSlider11 slider-drag-wrap has-shadow"
          >
            {teamData.slice(0, 6).map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="th-team team-box3 gsap-cursor">
                  <div className="team-img">
                    <img src={item.image9} alt={item.name} />
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <Link
                        onClick={ClickHandler}
                        to={`/team-guider-details/${item.slug}`}
                      >
                        {item.name}
                      </Link>
                    </h3>
                    <div className="th-social">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.twitter.com/"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="slider-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
