import { type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import bgImage from '../../img/bg/process-1-3-bg.jpg';
import processIcon1 from '../../img/icon/process-icon-1.svg';
import processIcon2 from '../../img/icon/process-icon-2.svg';
import processIcon3 from '../../img/icon/process-icon-3.svg';
import processIcon4 from '../../img/icon/process-icon-4.svg';

interface Step {
  icon: string;
  title: string;
  description: string;
  number: string;
}

interface ProcessSectionProps {
  className?: string;
}

const steps: Step[] = [
  {
    icon: processIcon1,
    title: 'Select A Project',
    description: "Identify and create relevant features that enhance the model's performance.",
    number: 'STEP -01',
  },
  {
    icon: processIcon2,
    title: 'Project Analysis',
    description: 'Retrain the model with new data to maintain relevance and effectiveness.',
    number: 'STEP -02',
  },
  {
    icon: processIcon3,
    title: 'Start Process',
    description: 'Integrate the trained model into the desired platform, application, or system.',
    number: 'STEP -03',
  },
  {
    icon: processIcon4,
    title: 'Deliver Result',
    description: 'Incorporate user feedback and system outcomes for iterative improvements.',
    number: 'STEP -04',
  },
  {
    icon: processIcon1,
    title: 'Planning',
    description: "Identify and create relevant features that enhance the model's performance.",
    number: 'STEP -01',
  },
  {
    icon: processIcon2,
    title: 'Design & Execution',
    description: 'Retrain the model with new data to maintain relevance and effectiveness.',
    number: 'STEP -02',
  },
  {
    icon: processIcon3,
    title: 'Monitoring',
    description: 'Integrate the trained model into the desired platform, application, or system.',
    number: 'STEP -03',
  },
  {
    icon: processIcon4,
    title: 'Report & Sign-out',
    description: 'Incorporate user feedback and system outcomes for iterative improvements.',
    number: 'STEP -04',
  },
];

const ProcessSection: FC<ProcessSectionProps> = ({ className }) => {
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
      className={className}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="process-area">
          <div className="process-content text-center">
            <div className="title-area mb-55">
              <span className="sub-title style1 text-white text-anime-style-2">Our Process</span>
              <h2 className="sec-title text-white text-anime-style-3">How It Work Process!</h2>
            </div>
          </div>
          <div className="slider-area">
            <Swiper
              className="th-slider has-shadow"
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 4 },
              }}
              spaceBetween={24}
              loop={settings.loop}
              speed={settings.speed}
              autoplay={settings.autoplay}
              modules={[Autoplay, Pagination]}
            >
              {steps.map((step, index) => (
                <SwiperSlide key={index}>
                  <div className="process-item style-2 text-center">
                    <div className="process-icon mb-20">
                      <img src={step.icon} alt="icon" />
                    </div>
                    <div className="process-content text-center">
                      <h3 className="box-title mb-10">
                        <a href="#">{step.title}</a>
                      </h3>
                      <p className="process-text">{step.description}</p>
                      <p className="box-number">{step.number}</p>
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

export default ProcessSection;
