import { type FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceData from '../../api/service';
import { Link } from 'react-router-dom';

interface ChooseAreaS2Props {
  className?: string;
}

const ChooseAreaS2: FC<ChooseAreaS2Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    loop: true,
    speed: 1200,
  };

  return (
    <section className={`${props.className}`}>
      <div className="container container-choose">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-8 col-lg-7 col-md-9">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Why Choose to Us</span>
              <h2 className="sec-title text-anime-style-3">Shielding Businesses from Cyber Risks, 24/7.</h2>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
              1600: { slidesPerView: 5 },
            }}
            className="swiper th-slider has-shadow chooseSlider"
            id="chooseSlider"
          >
            {ServiceData.slice(18, 24).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="choose-card style5 text-center">
                  <div className="box-img global-img mb-30">
                    <img src={item.image} alt="Image" />
                  </div>
                  <h3 className="box-title">
                    <Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="sec-text">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ChooseAreaS2;
