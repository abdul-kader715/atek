import { Fragment, type FC } from 'react';
import AboutAreaS7 from '../../components/AboutAreaS7/AboutAreaS7';
import BlogAreaS5 from '../../components/BlogAreaS5/BlogAreaS5';
import BrandArea from '../../components/BrandArea/BrandArea';
import CaseAreaS3 from '../../components/CaseAreaS3/CaseAreaS3';
import ContactAreaS5 from '../../components/ContactAreaS5/ContactAreaS5';
import CounterArea from '../../components/CounterArea/CounterArea';
import FeatureAreaS4 from '../../components/FeatureAreaS4/FeatureAreaS4';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS4 from '../../components/HeaderAreaS4/HeaderAreaS4';
import HeroAreaS7 from '../../components/HeroAreaS7/HeroAreaS7';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS7 from '../../components/ServiceAreaS7/ServiceAreaS7';
import TeamArea from '../../components/TeamArea/TeamArea';
import TestimonialAreaS4 from '../../components/TestimonialAreaS4/TestimonialAreaS4';
import GsapAnimation from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS7: FC = () => {
   return (
      <Fragment>
         <GsapAnimation />
         <HeaderAreaS4 className="th-header header-layout1 header-layout4" />
         <HeroAreaS7 />
         <FeatureAreaS4 className="category-area3 space" />
         <AboutAreaS7 className="about-area smoke-bg position-relative overflow-hidden space" />
         <ServiceAreaS7 className="service-area overflow-hidden space" />
         <BrandArea className="brand-area overflow-hidden space-bottom" />
         <ContactAreaS5 className="cantact-area6 contact6-overlay position-relative overflow-hidden background-image" />
         <CaseAreaS3 className="case-area3 position-relative overflow-hidden space" />
         <CounterArea className="counter-area space-bottom" />
         <TeamArea className="bg-smoke space overflow-hidden background-image" />
         <TestimonialAreaS4 className="testi-area overflow-hidden space-top" />
         <BlogAreaS5 className="overflow-hidden space" />
         <FooterArea className="footer-wrapper bg-title footer-layout2 space-top" />
         <Scrollbar />
      </Fragment>
   );
};

export default HomePageS7;
