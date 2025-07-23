import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import choose1 from '../../img/choose/choose_5_1.jpg';
import choose2 from '../../img/choose/choose_5_2.jpg';
import choose3 from '../../img/choose/choose_5_3.jpg';
import choose4 from '../../img/choose/choose_5_4.jpg';

interface ChooseItem {
  img: string;
  title: string;
  text: string;
}

const chooseItems: ChooseItem[] = [
  { img: choose1, title: 'Safe and secure', text: 'Blockchain is set to disrupt traditional banking, payments, and investment models,' },
  { img: choose2, title: 'Good investment', text: 'Blockchain is set to disrupt traditional banking, payments, and investment models,' },
  { img: choose3, title: 'Integrated app', text: 'Blockchain is set to disrupt traditional banking, payments, and investment models,' },
  { img: choose4, title: 'Multi Support', text: 'Blockchain is set to disrupt traditional banking, payments, and investment models,' },
  { img: choose1, title: 'Innovative IT Hub', text: 'Blockchain is set to disrupt traditional banking, payments, and investment models,' },
  { img: choose2, title: 'NetPulse IT', text: 'Building visual assets and brand guidelines for cohesive brand representation.' },
  { img: choose4, title: 'HyperTech Solutions', text: 'Blockchain is set to disrupt traditional banking, payments, and investment models,' },
  { img: choose1, title: 'ByteForce IT', text: 'Building visual assets and brand guidelines for cohesive brand representation.' },
];

const ChooseSlider: FC = () => {
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
    <section className="choose-area3 space light-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title extra-sub text-anime-style-2">Why Choose Us</span>
              <h2 className="sec-title text-white text-anime-style-3">Safe, guaranteed, and easy to use</h2>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 4 },
            }}
            className="th-slider has-shadow"
          >
            {chooseItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="choose-item choose-card3 style3 th-ani dark-bg">
                  <div className="choose-img mb-30">
                    <span>
                      <img src={item.img} alt="service" />
                    </span>
                  </div>
                  <div className="choose-content text-center">
                    <h3 className="box-title text-white">
                      <Link onClick={ClickHandler} to="/service">{item.title}</Link>
                    </h3>
                    <p className="sec-text">{item.text}</p>
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

export default ChooseSlider;
