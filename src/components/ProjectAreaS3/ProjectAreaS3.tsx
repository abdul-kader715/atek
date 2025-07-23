import { useEffect, useRef, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import ProjectData from '../../api/project';
import bgimg from '../../img/bg/project_bg.jpg';
import left from '../../img/icon/left-arrow2.svg';
import right from '../../img/icon/right-arrow2.svg';

interface ProjectAreaS3Props {
  className?: string;
}

const ProjectAreaS3: FC<ProjectAreaS3Props> = ({ className }) => {
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

  // Use refs for navigation buttons, type as HTMLButtonElement or null
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Store swiper instance in state
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // When swiper instance is ready, set navigation elements and update
  useEffect(() => {
    if (!swiperInstance || !prevRef.current || !nextRef.current) return;

    const nav = swiperInstance.params.navigation;
    if (nav && typeof nav !== 'boolean') {
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section
      className={className}
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-white text-anime-style-2">Examples of our work</span>
          <h2 className="sec-title text-white text-anime-style-3">Explore our recent projects</h2>
        </div>
        <div className="slider-area">
          <Swiper
            className="swiper th-slider"
            id="projectSlider"
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={setSwiperInstance}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 3 },
            }}
          >
            {ProjectData.slice(0, 4).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="project-item">
                  <div className="box-img global-img">
                    <img src={item.pimg3} alt="image" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">
                      <Link onClick={ClickHandler} to={`/project-details/${item.slug}`}>
                        {item.title3}
                      </Link>
                    </h3>
                    <p className="box-text">{item.subtitle3}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

export default ProjectAreaS3;
