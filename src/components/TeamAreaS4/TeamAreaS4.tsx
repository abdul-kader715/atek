import { useRef, type FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import teamData from "../../api/team";
import bgimg from '../../img/bg/team_bg_2.webp';
import left from '../../img/icon/left-arrow2.svg';
import right from '../../img/icon/right-arrow2.svg';
import { Link } from "react-router-dom";



interface TeamAreaS4Props {
  className?: string;
}

const TeamAreaS4: FC<TeamAreaS4Props> = ({ className }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Create refs for navigation buttons
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
    <section className={className} style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="container z-index-common">
        <div className="title-area mb-60 text-center">
          <span className="sub-title text-anime-style-2">Our Team Members</span>
          <h2 className="sec-title text-anime-style-3">Meet Our Expert Members</h2>
        </div>
        <div className="slider-area">
          <Swiper
            className="th-slider teamSlider3 has-shadow"
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            pagination={{ el: ".slider-pagination", clickable: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
          >
            {teamData.slice(0, 4).map((item, index: number) => (
              <SwiperSlide key={index}>
                <div className="th-team team-grid">
                  <div className="team-img">
                    <img src={item.bg2} alt={`${item.name} background`} />
                  </div>
                  <div className="team-img2">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="team-content">
                    <div className="media-body">
                      <h3 className="box-title">
                        <Link onClick={ClickHandler} to={`/team-guider-details/${item.slug}`}>
                          {item.name}
                        </Link>
                      </h3>
                      <span className="team-desig">{item.designation}</span>
                      <div className="th-social">
                        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/"><i className="fab fa-youtube"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-pagination" />
          </Swiper>

          {/* Navigation buttons with refs */}
          <button ref={prevRef} className="slider-arrow slider-prev" aria-label="Previous Slide">
            <img src={right} alt="Previous" />
          </button>
          <button ref={nextRef} className="slider-arrow slider-next" aria-label="Next Slide">
            <img src={left} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamAreaS4;
