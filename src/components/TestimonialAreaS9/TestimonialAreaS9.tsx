import { useRef, type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import testiImg from '../../img/normal/testi-img.png';
import rightArrow from '../../img/icon/right-arrow2.svg';
import leftArrow from '../../img/icon/left-arrow2.svg';

interface Testimonial {
  title: string;
  text: string;
  name: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    title: 'The Future of Data Analytics',
    text: 'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights, optimize performance, and support data-driven decision-making. It helps businesses and organizations uncover patterns, trends, and correlations in data to improve efficiency, enhance customer experiences, and drive growth.',
    name: 'Sarah Rahman',
    designation: 'Web Developer',
  },
  {
    title: 'The Future of Python Career',
    text: 'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights, optimize performance, and support data-driven decision-making. It helps businesses and organizations uncover patterns, trends, and correlations in data to improve efficiency, enhance customer experiences, and drive growth.',
    name: 'Angelina Rose',
    designation: 'Django Developer',
  },
  {
    title: 'The Future of Web Analytics',
    text: 'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights, optimize performance, and support data-driven decision-making. It helps businesses and organizations uncover patterns, trends, and correlations in data to improve efficiency, enhance customer experiences, and drive growth.',
    name: 'Michel Smith',
    designation: 'Graphic Designer',
  },
  {
    title: 'The Future of Robotics Mecanigm',
    text: 'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights, optimize performance, and support data-driven decision-making. It helps businesses and organizations uncover patterns, trends, and correlations in data to improve efficiency, enhance customer experiences, and drive growth.',
    name: 'Jesmen',
    designation: 'Software Engineer',
  },
  {
    title: 'The Future of Data Analytics',
    text: 'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights, optimize performance, and support data-driven decision-making. It helps businesses and organizations uncover patterns, trends, and correlations in data to improve efficiency, enhance customer experiences, and drive growth.',
    name: 'Sarah Rahman',
    designation: 'UiXi Designer',
  },
  {
    title: 'The Future of Ai Career',
    text: 'Data Analytics is the process of examining, interpreting, and visualizing data to extract valuable insights, optimize performance, and support data-driven decision-making. It helps businesses and organizations uncover patterns, trends, and correlations in data to improve efficiency, enhance customer experiences, and drive growth.',
    name: 'Angelina Rose',
    designation: 'JavaScript Developer',
  },
];

const TestimonialSection: FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="testi-area13 overflow-hidden bg-smoke" id="testi-sec">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6">
            <div className="testi-image2">
              <div className="testi-img">
                <img src={testiImg} alt="Testimonial" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="space-extra">
              <div className="title-area mb-40 pe-xl-5 me-xl-5">
                <span className="sub-title text-anime-style-2">Testimonial</span>
                <h2 className="sec-title text-anime-style-3">What Client Say About us Atek?</h2>
              </div>

              <Swiper
                direction="vertical"
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                pagination={{ el: '.slider-pagination', type: 'progressbar' }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                  if (prevRef.current && nextRef.current) {
                    const nav = swiper.params.navigation;
                    if (nav && typeof nav !== 'boolean') {
                      nav.prevEl = prevRef.current;
                      nav.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                  }
                }}
                className="testiSlide13"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testi-grid2 style2">
                      <div className="box-review">
                        {[...Array(5)].map((_, i) => (
                          <i className="fa-solid fa-star" key={i}></i>
                        ))}
                      </div>
                      <h4 className="box-title2">{item.title}</h4>
                      <div className="box-content">
                        <p className="box-text">“{item.text}”</p>
                        <h6 className="box-title">{item.name}</h6>
                        <span className="box-desig">{item.designation}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="slider-pagination"></div>
                <div className="icon-box">
                <button
                  className="slider-arrow style7 default prev"
                  ref={prevRef}
                  aria-label="Previous testimonial"
                  type="button"
                >
                  <img src={rightArrow} alt="Previous" />
                </button>
                <button
                  className="slider-arrow style7 default next"
                  ref={nextRef}
                  aria-label="Next testimonial"
                  type="button"
                >
                  <img src={leftArrow} alt="Next" />
                </button>
              </div>
              </Swiper>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
