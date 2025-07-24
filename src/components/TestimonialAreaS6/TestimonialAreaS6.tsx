import { useRef, useState, type FC } from 'react';
import { EffectFade, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import bgImage from '../../img/bg/testi_bg_1.webp';
import thumb1 from '../../img/testimonial/testi-img-2_1.jpg';
import thumb2 from '../../img/testimonial/testi-img-2_2.jpg';
import thumb3 from '../../img/testimonial/testi-img-2_3.jpg';
import avatar1 from '../../img/testimonial/testi_5_1.png';
import avatar2 from '../../img/testimonial/testi_5_2.png';
import avatar3 from '../../img/testimonial/testi_5_3.png';

interface Testimonial {
  text: string;
  avatar: string;
  name: string;
  role: string;
  thumb: string;
}

const testimonialData: Testimonial[] = [
  {
    text: '“Web and app development focuses on designing, creating, and maintaining websites and mobile applications to enhance digital experiences. These services cater to businesses, individuals, and organizations.”',
    avatar: avatar1,
    name: 'Kelsey Baine',
    role: 'Web Developer',
    thumb: thumb1,
  },
  {
    text: '“UiXi and app development focuses on designing, creating, and maintaining websites and mobile applications to enhance digital experiences. These services cater to businesses, individuals, and organizations.”',
    avatar: avatar2,
    name: 'Angelina Rose',
    role: 'Python Developer',
    thumb: thumb2,
  },
  {
    text: '“Web and Software development focuses on designing, creating, and maintaining websites and mobile applications to enhance digital experiences. These services cater to businesses, individuals, and organizations.”',
    avatar: avatar3,
    name: 'Michel Smith',
    role: 'Designer',
    thumb: thumb3,
  },
];

interface TestimonialSectionProps {
  className?: string;
}

const TestimonialSection: FC<TestimonialSectionProps> = ({ className = '' }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section
      className={`${className} overflow-hidden space space-extra-bottom`}
      id="testi-sec"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xxl-7">
            <div className="testi-area8 bg-title">
              <Swiper
                modules={[Thumbs, EffectFade, Navigation]}
                effect="fade"
                loop={false}
                thumbs={{ swiper: thumbsSwiper }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}

                onBeforeInit={(swiper) => {
                  const nav = swiper.params.navigation;
                  if (nav && typeof nav !== 'boolean') {
                    nav.prevEl = prevRef.current;
                    nav.nextEl = nextRef.current;
                  }
                }}
                className="testiSlide8"
              >
                {testimonialData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="testi-grid4">
                      <p className="box-text">{item.text}</p>
                      <div className="box-profile">
                        <div className="box-avater">
                          <img src={item.avatar} alt={item.name} />
                        </div>
                        <div className="media-body">
                          <h3 className="box-title">{item.name}</h3>
                          <span className="box-desig">{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs, EffectFade]}
                effect="fade"
                spaceBetween={3}
                slidesPerView={1}
                className="testi-grid3-thumb style3"
              >
                {testimonialData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="box-img">
                      <img src={item.thumb} alt={`${item.name} thumbnail`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="icon-box">
                <button ref={nextRef} className="slider-arrow default">
                  NEXT
                </button>
                <button ref={prevRef} className="slider-arrow default">
                  PREVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
