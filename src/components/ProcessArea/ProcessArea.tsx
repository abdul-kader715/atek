import { type FC } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import processbg from '../../img/bg/process-1-2-bg.webp';
import process_2_1 from '../../img/process/process_2_1.jpg';
import process_2_2 from '../../img/process/process_2_2.jpg';
import process_2_3 from '../../img/process/process_2_3.jpg';
import process_2_4 from '../../img/process/process_2_4.jpg';

interface ProcessItem {
  title: string;
  image: string;
  description: string;
  step: string;
}

interface ProcessAreaProps {
  className?: string;
}

const processData: ProcessItem[] = [
  {
    title: 'Requirement Analysis',
    image: process_2_1,
    description: "Identify and create relevant features that enhance the model's performance.",
    step: 'STEP -01',
  },
  {
    title: 'Planning Integration',
    image: process_2_2,
    description: 'Retrain the model with new data to maintain relevance and effectiveness.',
    step: 'STEP -02',
  },
  {
    title: 'Design & Development',
    image: process_2_3,
    description: 'Integrate the trained model into the desired platform, application, or system.',
    step: 'STEP -03',
  },
  {
    title: 'Maintenance & Update',
    image: process_2_4,
    description: 'Incorporate user feedback and system outcomes for iterative improvements.',
    step: 'STEP -04',
  },
  {
    title: 'Planning',
    image: process_2_1,
    description: "Identify and create relevant features that enhance the model's performance.",
    step: 'STEP -01',
  },
  {
    title: 'Design & Execution',
    image: process_2_2,
    description: 'Retrain the model with new data to maintain relevance and effectiveness.',
    step: 'STEP -02',
  },
  {
    title: 'Monitoring',
    image: process_2_3,
    description: 'Integrate the trained model into the desired platform, application, or system.',
    step: 'STEP -03',
  },
  {
    title: 'Report & Sign-out',
    image: process_2_4,
    description: 'Incorporate user feedback and system outcomes for iterative improvements.',
    step: 'STEP -04',
  },
];

const ProcessArea:FC<ProcessAreaProps> = (props) => {
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
    <section
      className={`${props.className}`}
      style={{ backgroundImage: `url(${processbg})` }}
    >
      <div className="container">
        <div className="process-content text-center">
          <div className="title-area mb-55">
            <span className="sub-title style1 text-anime-style-2">Our Process</span>
            <h2 className="sec-title text-anime-style-3">How It Work Process!</h2>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={settings.loop}
          speed={settings.speed}
          autoplay={settings.autoplay}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="swiper th-slider has-shadow"
        >
          {processData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="process-item">
                <div className="process-img mb-20">
                  <a href="#">
                    <img src={item.image} alt="service" />
                  </a>
                </div>
                <div className="process-content text-center">
                  <h3 className="box-title mb-10">
                    <span>{item.title}</span>
                  </h3>
                  <p className="process-text">{item.description}</p>
                  <p className="box-number">{item.step}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProcessArea;
