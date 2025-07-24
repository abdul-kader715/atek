import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectData from '../../api/project';
import bgimg from '../../img/bg/process_bg_1.webp';

interface ProjectItem {
  slug: string;
  pimg: string;
  title: string;
  subtitle: string;
  num: number | string;
}

interface ProjectAreaProps {
  className?: string;
}

const ProjectArea: FC<ProjectAreaProps> = (props) => {
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
      className={props.className}
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="container">
        <div className="process-area">
          <div className="process-content text-center">
            <div className="title-area mb-55">
              <span className="sub-title style1 text-anime-style-2">Our Process</span>
              <h2 className="sec-title text-anime-style-2">How It Work Process!</h2>
            </div>
          </div>
          <div className="slider-area">
            <Swiper
              className="swiper th-slider has-shadow"
              id="processSlider"
              spaceBetween={30}
              loop={settings.loop}
              speed={settings.speed}
              autoplay={settings.autoplay}
              modules={[Autoplay]}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 4 },
              }}
            >
              {ProjectData.slice(0, 5).map((item: ProjectItem, index: number) => (
                <SwiperSlide key={index}>
                  <div className="process-item">
                    <div className="process-img mb-20">
                      <Link onClick={ClickHandler} to={`/project-details/${item.slug}`}>
                        <img src={item.pimg} alt="service image" />
                      </Link>
                    </div>
                    <div className="process-content text-center">
                      <h3 className="box-title mb-10">
                        <Link onClick={ClickHandler} to={`/project-details/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="process-text">{item.subtitle}</p>
                      <p className="box-number">STEP -{item.num}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectArea;
