import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceData from '../../api/service';
import shape from '../../img/shape/sv-shape.png';
import type { FC } from 'react';

interface ServiceAreaS14Props {
  className?: string;
}

const ServiceAreaS14: FC<ServiceAreaS14Props> = (props) => {
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-9 col-lg-8">
            <div className="title-area service10-titlebox text-center">
              <span className="sub-title extra-sub text-anime-style-2">
                Service We’re Offering
              </span>
              <h2 className="sec-title text-white text-anime-style-3">
                What we can help you with
              </h2>
            </div>
          </div>
        </div>
        <div className="slider-area">
          <div
            className="swiper serviceSlider10 th-slider has-shadow"
            id="serviceSlider10"
          >
            <Swiper
              spaceBetween={24}
              loop={settings.loop !== false}
              speed={settings.speed || 1000}
              autoplay={settings.autoplay}
              modules={[Autoplay]}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
              className="serviceSlider10"
            >
              {ServiceData.slice(0, 8).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="sv-card10 sv-single position-relative">
                    <div
                      className="service-content text-center text-sm-start mg-mask"
                      style={{
                        WebkitMaskImage: `url(${shape})`,
                        maskImage: `url(${shape})`,
                        WebkitMaskSize: '100% 100%',
                        maskSize: '100% 100%',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                      }}
                    >
                      <div className="icon mb-50 d-sm-flex align-items-center justify-content-between">
                        <img src={item.Icon13} alt="Image" />
                        <span className="number">
                          0{item.id}
                        </span>
                      </div>
                      <h3 className="box-title">
                        <Link
                          onClick={ClickHandler}
                          to={`/service-details/${item.slug}`}
                        >
                          {item.title13}
                        </Link>
                      </h3>
                      <p className="sec-text">
                        Secure, fast, and low-cost cross-border transactions.
                        Decentralized payment gateways businesses and
                        individuals.
                      </p>
                    </div>

                    <div className="service-btn">
                      <Link
                        onClick={ClickHandler}
                        to={`/service-details/${item.slug}`}
                        className="icon-btn"
                      >
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
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

export default ServiceAreaS14;
