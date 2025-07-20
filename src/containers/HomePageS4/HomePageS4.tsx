import { Fragment, type FC } from 'react';

import AboutAreaS4 from '../../components/AboutAreaS4/AboutAreaS4';
import BlogArea from '../../components/BlogArea/BlogArea';
import BrandArea from '../../components/BrandArea/BrandArea';
import ContactAreaS2 from '../../components/ContactAreaS2/ContactAreaS2';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS4 from '../../components/HeaderAreaS4/HeaderAreaS4';
import HeroAreaS4 from '../../components/HeroAreaS4/HeroAreaS4';
import ProjectAreaS2 from '../../components/ProjectAreaS2/ProjectAreaS2';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS4 from '../../components/ServiceAreaS4/ServiceAreaS4';
import TeamAreaS4 from '../../components/TeamAreaS4/TeamAreaS4';
import TestimonialAreaS2 from '../../components/TestimonialAreaS2/TestimonialAreaS2';
import GsapAnimation from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS4: FC = () => {
   return (
      <Fragment>
         <GsapAnimation />
         <HeaderAreaS4 className="th-header header-layout1 header-layout4" />
         <HeroAreaS4 />
         <AboutAreaS4 className="about-area position-relative overflow-hidden space" />
         <ServiceAreaS4 className="service-area4 space arrow-wrap background-image" />
         <ProjectAreaS2 className="overflow-hidden space" />
         <BrandArea className="brand-area overflow-hidden space-bottom" />
         <TeamAreaS4 className="team-area3 position-relative bg-top-center space background-image" />
         <ContactAreaS2 className="bg-top-center space-top overflow-hidden background-image" />
         <TestimonialAreaS2 className="testimonial-area2 overflow-hidden space" />
         <BlogArea className="overflow-hidden space bg-smoke arrow-wrap shape-mockup-wrap blogArea" />
         <FooterArea className="footer-wrapper light-blue-bg footer-layout2 space-top" />
         <Scrollbar />
      </Fragment>
   );
};

export default HomePageS4;
