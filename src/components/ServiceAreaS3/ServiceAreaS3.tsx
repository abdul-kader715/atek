import { type FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import ServiceData from '../../api/service';

interface ServiceItem {
  image: string;
  slug: string;
  title: string;
  description: string;
}

interface ServiceAreaS3Props {
  className?: string;
}

const ServiceAreaS3: FC<ServiceAreaS3Props> = (props) => {
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
    <section className={props.className} id="service-sec">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-7">
            <div className="title-area service-3-titlebox text-center text-md-start">
              <span className="sub-title text-anime-style-2">Our Services</span>
              <h2 className="sec-title text-anime-style-2">Our Featured Solutions</h2>
            </div>
          </div>
          <div className="col-xl-5">
            <p
              className="service-3-text text-center text-md-start scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              AI and Machine Learning are reshaping industries, enabling smarter
              solutions, and paving the way for a more connected and efficient
              future. Businesses that embrace these technologies today are poised
              to lead the innovation wave of tomorrow.
            </p>
          </div>
        </div>
        <div className="slider-area">
          <Swiper
            spaceBetween={30}
            className="th-slider has-shadow"
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
          >
            {ServiceData.slice(13, 18).map((item: ServiceItem, index: number) => (
              <SwiperSlide key={index}>
                <div className="service-item style3 th-ani">
                  <div className="service-item_img global-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="service-content">
                    <h3 className="box-title">
                      <Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="service-text">{item.description}</p>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-details/${item.slug}`}
                      className="th-btn style4 th-icon"
                    >
                      View Details <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="service-3-btn text-center mt-60">
          <Link onClick={ClickHandler} to="/service" className="th-btn black-btn th-icon">
            View All Services <i className="fa-light fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaS3;
