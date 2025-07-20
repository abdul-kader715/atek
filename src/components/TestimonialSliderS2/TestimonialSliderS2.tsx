import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import thumb1 from "../../img/testimonial/testi_4_1.png";
import thumb2 from "../../img/testimonial/testi_4_2.png";
import thumb3 from "../../img/testimonial/testi_4_3.png";
import thumb4 from "../../img/testimonial/testi_4_4.png";

import arrowLeft from "../../img/icon/left-arrow2.svg";
import arrowRight from "../../img/icon/right-arrow2.svg";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonialData: Testimonial[] = [
  {
    text: "Cybersecurity is more critical than ever in a world increasingly reliant on digital technologies. By investing in robust cybersecurity measures, individuals and organizations can protect themselves from threats and secure their digital assets for the future.",
    name: "Sarah Rahman",
    role: "UI/UX Designer",
    image: thumb1,
  },
  {
    text: "Cybersecurity is more critical than ever in a world increasingly reliant on digital technologies. By investing in robust cybersecurity measures, individuals and organizations can protect themselves from threats and secure their digital assets for the future.",
    name: "Angelina Rose",
    role: "App Developer",
    image: thumb2,
  },
  {
    text: "Cybersecurity is more critical than ever in a world increasingly reliant on digital technologies. By investing in robust cybersecurity measures, individuals and organizations can protect themselves from threats and secure their digital assets for the future.",
    name: "Michel Smith",
    role: "Software Engineer",
    image: thumb3,
  },
  {
    text: "Cybersecurity is more critical than ever in a world increasingly reliant on digital technologies. By investing in robust cybersecurity measures, individuals and organizations can protect themselves from threats and secure their digital assets for the future.",
    name: "Jesmen",
    role: "Graphics Designer",
    image: thumb4,
  },
];

export default function TestimonialSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const settings = {
    speed: 1200,
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        slidesPerView={1}
        spaceBetween={24}
        loop={false}
        speed={settings.speed}
        navigation={{ prevEl: prevRef.current!, nextEl: nextRef.current! }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="testiSlide5"
      >
        {testimonialData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testi-grid2">
              <div className="box-content">
                <p className="box-text">“{item.text}”</p>
                <h6 className="box-title">{item.name}</h6>
                <span className="box-desig">{item.role}</span>
                <div className="box-review">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper th-slider testi-grid2-thumb style2">
        <div className="icon-box">
          <button ref={prevRef} className="slider-arrow default" aria-label="Previous">
            <img src={arrowRight} alt="Prev" />
          </button>
          <button ref={nextRef} className="slider-arrow default" aria-label="Next">
            <img src={arrowLeft} alt="Next" />
          </button>
        </div>
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={2}
          slidesPerView={4}
          loop={false}
          watchSlidesProgress
          className="testi-grid2-thumb"
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="box-img">
                <img src={item.image} alt={item.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
