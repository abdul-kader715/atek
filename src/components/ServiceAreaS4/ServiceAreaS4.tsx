import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ServiceData from '../../api/service';
import bgimg from '../../img/bg/service_bg_4.jpg';
import left from '../../img/icon/left-arrow2.svg';
import right from '../../img/icon/right-arrow2.svg';

interface ServiceItem {
  slug: string;
  image2: string;
  Icon: string;
  title2: string;
  description2: string;
}

interface ServiceAreaS4Props {
  className?: string;
}

const ServiceAreaS4: FC<ServiceAreaS4Props> = (props) => {
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
      id="service-sec"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Services We’re Offering</span>
              <h2 className="sec-title text-anime-style-3">
                Key Services Offered by a Startup Tech Agency
              </h2>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            className="swiper th-slider has-shadow"
            id="serviceSlider4"
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            pagination={{
              el: '.slider-pagination',
              clickable: true,
            }}
            navigation={{
              nextEl: '.slider-next',
              prevEl: '.slider-prev',
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
          >
            {ServiceData.slice(0, 4).map((item: ServiceItem, index: number) => (
              <SwiperSlide key={index}>
                <div className="service-item style4 th-ani">
                  <div className="service-img position-relative">
                    <Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>
                      <img src={item.image2} alt="service" />
                    </Link>
                    <span className="service-icon">
                      <img src={item.Icon} alt="" />
                    </span>
                  </div>
                  <div className="service-content text-start">
                    <h3 className="box-title">
                      <Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>
                        {item.title2}
                      </Link>
                    </h3>
                    <p className="service-text">{item.description2}</p>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-details/${item.slug}`}
                      className="th-btn style4 th-icon"
                    >
                      Read More <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
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

export default ServiceAreaS4;
