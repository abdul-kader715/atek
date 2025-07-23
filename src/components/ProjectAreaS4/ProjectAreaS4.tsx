import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectData from '../../api/project';
import Bgimg from '../../img/bg/project_2_bg.jpg';
import shape from '../../img/shape/sv-shape.png';

interface ProjectAreaS4Props {
  className?: string;
}

const ProjectAreaS4: FC<ProjectAreaS4Props> = ({ className }) => {
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
    <section
      className={className}
      id="project-sec"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-anime-style-2">Our Projects</span>
          <h2 className="sec-title text-anime-style-3">Explore our recent projects</h2>
        </div>
        <div className="slider-area">
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
                <div className="project-item2 th-ani">
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
                    <img src={item.pimg4} alt="image" />
                  </div>
                  <div className="project-content">
                    <h3 className="box-title">
                      <Link onClick={ClickHandler} to={`/project-details/${item.slug}`}>
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
        <div className="project2-btn text-center mt-60">
          <Link onClick={ClickHandler} to="/project-grid" className="th-btn th-radius th-icon">
            View All Projects <i className="fa-light fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectAreaS4;
