import React, { useEffect, useRef, type HTMLAttributes, type FC } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import quote from '../../img/icon/testi-quote.svg';
import shape from '../../img/shape/testi-shape.png';
import testi_1_1 from '../../img/testimonial/testi_1_1.jpg';
import testi_1_2 from '../../img/testimonial/testi_1_2.jpg';
import testi_1_3 from '../../img/testimonial/testi_1_3.jpg';

interface MaskedDivProps extends HTMLAttributes<HTMLDivElement> {
  maskSrc?: string;
  className?: string;
}

const MaskedDiv: React.FC<MaskedDivProps> = ({ maskSrc, className = '', children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && maskSrc) {
      ref.current.style.maskImage = `url(${maskSrc})`;
      ref.current.style.webkitMaskImage = `url(${maskSrc})`;
      ref.current.classList.add('bg-mask');
    }
  }, [maskSrc]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonialData: Testimonial[] = [
  {
    name: "Maria Doe",
    role: "UI/UX Designer",
    image: testi_1_1,
    text: "Tech support services provide assistance to individuals and organizations in resolving technical issues related to hardware, software, networks, and other IT systems. These services are crucial for ensuring smooth operations",
  },
  {
    name: "Andrew Simon",
    role: "Front-End Dev",
    image: testi_1_2,
    text: "Tech support services provide assistance to individuals and organizations in resolving technical issues related to hardware, software, networks, and other IT systems. These services are crucial for ensuring smooth operations",
  },
  {
    name: "Alex Jordan",
    role: "Software Eng",
    image: testi_1_3,
    text: "Tech support services provide assistance to individuals and organizations in resolving technical issues related to hardware, software, networks, and other IT systems. These services are crucial for ensuring smooth operations",
  },
  {
    name: "Andrew Simon",
    role: "Front-End Dev",
    image: testi_1_2,
    text: "Tech support services provide assistance to individuals and organizations in resolving technical issues related to hardware, software, networks, and other IT systems. These services are crucial for ensuring smooth operations",
  },
];

interface TestimonialSectionProps {
  className?: string;
}

const TestimonialSection: FC<TestimonialSectionProps> = ({ className }) => {
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
    <section className={`${className ?? ''}`} id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title text-anime-style-2">Testimonial</span>
          <h2 className="sec-title text-anime-style-3">Hear From Our Satisfied Clients</h2>
        </div>
        <div className="slider-area">
          <Swiper
            className="th-slider testiSlider6 has-shadow"
            spaceBetween={24}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            centeredSlides={true}
            loop={settings.loop}
            speed={settings.speed}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2, centeredSlides: true },
              992: { slidesPerView: 2, centeredSlides: true },
              1200: { slidesPerView: 2, centeredSlides: true },
              1400: { slidesPerView: 3, centeredSlides: true },
            }}
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card style2">
                  <div className="testi-card_wrapper">
                    <MaskedDiv
                      className="testi-card_profile"
                      maskSrc={shape}
                    >
                      <div className="testi-card_avater">
                        <img src={testimonial.image} alt={`testimonial-${testimonial.name}`} />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">{testimonial.name}</h3>
                        <span className="testi-card_desig">{testimonial.role}</span>
                      </div>
                    </MaskedDiv>
                    <div className="testi-card_review">
                      {[...Array(5)].map((_, i) => (
                        <i className="fa-solid fa-star" key={i}></i>
                      ))}
                    </div>
                  </div>
                  <p className="testi-card_text">“{testimonial.text}”</p>
                  <div className="testi-card-quote">
                    <img src={quote} alt="quote" />
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

export default TestimonialSection;
