import { type FC } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import category1 from '../../img/category/category_3_1.jpg';
import category2 from '../../img/category/category_3_2.jpg';
import category3 from '../../img/category/category_3_3.jpg';
import category4 from '../../img/category/category_3_4.jpg';
import category5 from '../../img/category/category_3_5.jpg';

interface FeatureAreaS4Props {
  className?: string;
}

const featureItems = [
  {
    image: category1,
    title: 'Multi-Channel Support',
    text: 'Assistance via phone, email, live chat, or remote desktop tools.',
  },
  {
    image: category2,
    title: 'Proactive Monitoring',
    text: 'Real-time tracking of systems to detect & resolve issues before they escalate.',
  },
  {
    image: category3,
    title: 'Custom Solutions',
    text: 'Tailored services to meet the unique needs of different industries and clients.',
  },
  {
    image: category4,
    title: 'Fast Response Times',
    text: 'Prioritizing timely assistance to ensure minimal disruptions.',
  },
  {
    image: category5,
    title: '24/7 Availability',
    text: 'Around-the-clock support to address emergencies at any time.',
  },
  {
    image: category3,
    title: 'Custom Solutions',
    text: 'Tailored services to meet the unique needs of different industries and clients.',
  },
];

const FeatureAreaS4: FC<FeatureAreaS4Props> = ({ className = '' }) => {
  return (
    <section className={className}>
      <div className="container th-container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area text-center mb-55">
              <span className="sub-title text-anime-style-2">Our Features</span>
              <h2 className="sec-title text-anime-style-3">
                Features of High-Quality Tech Support Services
              </h2>
            </div>
          </div>
        </div>

        <div className="slider-area category-style-3">
          <Swiper
            spaceBetween={30}
            loop
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="th-slider category-slider3 has-shadow"
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 5 },
            }}
          >
            {featureItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="category-card single2">
                  <div className="box-img global-img">
                    <span>
                      <img src={item.image} alt={item.title} />
                    </span>
                  </div>
                  <h3 className="box-title">
                    <span>{item.title}</span>
                  </h3>
                  <span className="category-text">{item.text}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaS4;
