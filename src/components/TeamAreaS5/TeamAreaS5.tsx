import { type FC } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import teamData from '../../api/team';

interface TeamMember {
  image9: string;
  name: string;
  slug: string;
}

interface TeamAreaS5Props {
  className?: string;
}

const TeamAreaS5: FC<TeamAreaS5Props> = ({ className }) => {
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
    <section className={className} id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title text-anime-style-2">Our Team Members</span>{/* fixed typo */}
          <h2 className="sec-title text-anime-style-3">Meet Our Expert Members</h2>
        </div>
        <div className="slider-area">
          <Swiper
            className="swiper th-slider teamSlider8 has-shadow"
            id="teamSlider8"
            breakpoints={{
              0: { slidesPerView: 3 },
              767: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1400: { slidesPerView: 5 },
            }}
            pagination={{ el: '.slider-pagination', clickable: true }}
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay, Pagination]}
          >
            {teamData.slice(0, 6).map((item: TeamMember, itx: number) => (
              <SwiperSlide key={itx}>
                <div className="th-team team-grid2">
                  <div className="team-img">
                    <img src={item.image9} alt={item.name} />
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <Link onClick={ClickHandler} to={`/team-guider-details/${item.slug}`}>
                        {item.name}
                      </Link>
                    </h3>
                    <div className="th-social">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
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

export default TeamAreaS5;
