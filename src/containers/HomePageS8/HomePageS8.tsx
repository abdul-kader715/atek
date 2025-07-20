import { Fragment, type FC } from 'react';
import AboutAreaS8 from '../../components/AboutAreaS8/AboutAreaS8';
import BlogAreaS6 from '../../components/BlogAreaS6/BlogAreaS6';
import BrandArea from '../../components/BrandArea/BrandArea';
import ChooseUsArea from '../../components/ChooseUsArea/ChooseUsArea';
import ContactAreaS6 from '../../components/ContactAreaS6/ContactAreaS6';
import CounterAreaS3 from '../../components/CounterAreaS3/CounterAreaS3';
import FooterAreaS2 from '../../components/FooterAreaS2/FooterAreaS2';
import HeaderAreaS3 from '../../components/HeaderAreaS3/HeaderAreaS3';
import HeroAreaS8 from '../../components/HeroAreaS8/HeroAreaS8';
import ProjectAreaS3 from '../../components/ProjectAreaS3/ProjectAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS8 from '../../components/ServiceAreaS8/ServiceAreaS8';
import TeamArea from '../../components/TeamArea/TeamArea';
import TestimonialAreaS5 from '../../components/TestimonialAreaS5/TestimonialAreaS5';
import GsapAnimation from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS8: FC = () => {
   return (
      <Fragment>
         <GsapAnimation />
         <HeaderAreaS3 className="th-header header-layout3 header-absolute" />
         <HeroAreaS8 />
         <AboutAreaS8 className="about-area position-relative overflow-hidden space" />
         <ServiceAreaS8 className="service-area4 space smoke-bg overflow-hidden" />
         <ProjectAreaS3 className="project-area position-relative project-overlay overflow-hidden bg-top-center space background-image arrow-wrap" />
         <BrandArea className="brand-sec space-bottom" SecNote />
         <TestimonialAreaS5 className="testi-area7 bg-smoke overflow-hidden space background-image" SecNote />
         <TeamArea className="team-area space team-slider-1 background-image" />
         <ChooseUsArea  />
         <CounterAreaS3 className="counter-sec2 space" />
         <ContactAreaS6 className="bg-top-center position-relative space-top overflow-hidden background-image" />
         <BlogAreaS6 className="overflow-hidden space" />
         <FooterAreaS2 className="footer-wrapper bg-title footer-layout2 footer-layout5 space-top" />
         <Scrollbar />
      </Fragment>
   );
};

export default HomePageS8;
