import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamData from '../../api/team';
import teamimg from '../../img/bg/team_bg_1.png';
import type { FC } from 'react';

interface TeamMember {
  name: string;
  designation: string;
  slug: string;
  image: string;
}

interface TeamAreaProps {
  className?: string;
}

const TeamArea: FC<TeamAreaProps> = ({ className }) => {
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
    <section className={className} style={{ backgroundImage: `url(${teamimg})` }}>
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title text-anime-style-2">Our Team Members</span>
          <h2 className="sec-title text-anime-style-3">Meet Our Expert Members</h2>
        </div>

        <div className="slider-area">
          <Swiper
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            className="th-slider teamSlider1 has-shadow"
            id="teamSlider1"
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {TeamData.slice(0, 8).map((member: TeamMember, index: number) => (
              <SwiperSlide key={index}>
                <div className="th-team team-box">
                  <div className="team-img">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-content">
                    <div className="media-body">
                      <h3 className="box-title">
                        <Link onClick={ClickHandler} to={`/team-guider-details/${member.slug}`}>
                          {member.name}
                        </Link>
                      </h3>
                      <span className="team-desig">{member.designation}</span>
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
                          <i className="fa-brands fa-youtube"></i>
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
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
