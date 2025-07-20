import { type FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import teamData from "../../api/team";
import bgimg from '../../img/bg/team_bg_2.jpg';
import left from '../../img/icon/left-arrow2.svg';
import right from '../../img/icon/right-arrow2.svg';

interface TeamMember {
  bg: string;
  image: string;
  name: string;
  designation: string;
  slug: string;
}

interface TeamAreaS3Props {
  className?: string;
}

const TeamAreaS3: FC<TeamAreaS3Props> = ({ className }) => {
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
    <section className={className} style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="container z-index-common">
        <div className="title-area mb-60 text-center">
          <span className="sub-title text-anime-style-2">Our Team Members</span>{/* Fixed typo */}
          <h2 className="sec-title text-anime-style-3">Meet Our Expert Members</h2>
        </div>
        <div className="slider-area">
          <Swiper
            className="th-slider teamSlider3 has-shadow"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            pagination={{
              el: ".slider-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
          >
            {teamData.slice(0, 4).map((item: TeamMember, index: number) => (
              <SwiperSlide key={index}>
                <div className="th-team team-grid">
                  <div className="team-img">
                    <img src={item.bg} alt={`${item.name} background`} />
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
                        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-pagination" />
          </Swiper>

          <button className="slider-arrow slider-prev">
            <img src={right} alt="Previous" />
          </button>
          <button className="slider-arrow slider-next">
            <img src={left} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamAreaS3;
