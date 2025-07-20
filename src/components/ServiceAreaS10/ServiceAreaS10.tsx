import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceData from '../../api/service';
import left from '../../img/icon/left-arrow2.svg';
import right from '../../img/icon/right-arrow2.svg';
import type { FC } from 'react';

interface ServiceAreaS10Props {
  className?: string;
}

const ServiceAreaS10: FC<ServiceAreaS10Props> = (props) => {
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
    <section className={`${props.className}`} id="service-sec">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center align-items-end">
          <div className="col-xl-7">
            <div className="title-area text-center text-xl-start mb-60">
              <span className="sub-title style2 text-anime-style-2">Our Services</span>
              <h2 className="sec-title style1 text-anime-style-3">
                We’re Provide Smart Solution
              </h2>
            </div>
          </div>
          <div className="col-lg-auto d-none d-lg-block">
            <div className="sec-btn">
              <div className="icon-box">
                <button className="slider-arrow slider-prev default style6">
                  <img src={right} alt="Previous" />
                </button>
                <button className="slider-arrow slider-next default style6">
                  <img src={left} alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            autoHeight={true}
            slidesPerView={1}
            pagination={{
              el: '.slider-pagination',
              type: 'progressbar',
              clickable: true,
            }}
            navigation={{
              nextEl: '.slider-next',
              prevEl: '.slider-prev',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1300: {
                slidesPerView: 6,
              },
            }}
            className="swiper th-slider"
            id="serviceSlider7"
          >
            {ServiceData.slice(0, 7).map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="service-card style6 text-center">
                  <div className="box-img global-img">
                    <img src={slide.image10} alt="Image" />
                  </div>
                  <div className="icon">
                    <Link
                      onClick={ClickHandler}
                      to={`/service-details/${slide.slug}`}
                    >
                      <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                  <div className="service-content">
                    <h3 className="box-title">
                      <Link
                        onClick={ClickHandler}
                        to={`/service-details/${slide.slug}`}
                      >
                        {slide.title8}
                      </Link>
                    </h3>
                    <p className="sec-text">
                      Providing ongoing technical support, troubleshooting.
                    </p>
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

export default ServiceAreaS10;
