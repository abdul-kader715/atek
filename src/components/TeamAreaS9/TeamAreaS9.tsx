import { type FC } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import teamData from '../../api/team';

const TeamAreaS9: FC = () => {
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
    <section className="team-area6 space overflow-hidden light-bg">
      <div className="container z-index-common">
        <div className="row text-center text-md-start">
          <div className="col-xl-9">
            <div className="title-area">
              <span className="sub-title extra-sub text-anime-style-2">Meet with Guide</span>
              <h2 className="sec-title text-white text-anime-style-3">Meet with Team Members</h2>
            </div>
          </div>
          <div className="col-xl-3">
            <div
              className="team-btn4 scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <Link
                onClick={ClickHandler}
                to="/team"
                className="th-btn style2 th-radius th-icon"
              >
                View All Members <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="team-slider-area">
          <Swiper
            className="swiper th-slider teamSlider5 has-shadow"
            id="teamSlider5"
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1400: { slidesPerView: 4 },
            }}
            pagination={{
              el: '.slider-pagination',
              clickable: true,
            }}
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay, Pagination]}
          >
            {teamData.slice(0, 5).map((item, itx) => (
              <SwiperSlide key={itx}>
                <div className="th-team team-box4 text-center">
                  <div className="team-img gsap-cursor">
                    <img src={item.image13} alt={item.name} />
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
            <div className="slider-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamAreaS9;
