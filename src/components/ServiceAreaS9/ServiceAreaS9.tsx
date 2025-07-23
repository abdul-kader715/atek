import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceData from '../../api/service';
import left from '../../img/icon/left-arrow.svg';
import right from '../../img/icon/right-arrow.svg';
import type { FC } from 'react';

interface ServiceAreaS9Props {
  className?: string;
}

const ServiceAreaS9: FC<ServiceAreaS9Props> = (props) => {
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
    <section className={`${props.className}`}>
      <div className="container th-container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Our Services</span>
              <h2 className="sec-title text-anime-style-3">
                Scalable Solutions for Web and Mobile Success
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
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
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          className="swiper th-slider categorySlider6"
        >
          {ServiceData.slice(0, 7).map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="category-card style4 single2">
                <div className="box-img global-img">
                  <img src={slide.image9} alt="Image" />
                </div>
                <div className="box-wrapp">
                  <div className="box-content">
                    <h3 className="box-title">
                      <Link
                        onClick={ClickHandler}
                        to={`/service-details/${slide.slug}`}
                      >
                        {slide.title9}
                      </Link>
                    </h3>
                    <p className="box-text">{slide.description9}</p>
                  </div>
                  <div className="icon-btn">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="th-swiper-custom">
            <button className="slider-arrow slider-prev">
              <img src={right} alt="Previous" />
            </button>
            <div className="slider-pagination"></div>
            <button className="slider-arrow slider-next">
              <img src={left} alt="Next" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceAreaS9;
