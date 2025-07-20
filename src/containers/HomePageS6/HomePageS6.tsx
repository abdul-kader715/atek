import { Fragment, type FC } from 'react';
import BrandArea from '../../components/BrandArea/BrandArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS5 from '../../components/HeaderAreaS5/HeaderAreaS5';
import HeroAreaS6 from '../../components/HeroAreaS6/HeroAreaS6';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS6 from '../../components/ServiceAreaS6/ServiceAreaS6';
import AboutAreaS6 from '../../components/AboutAreaS6/AboutAreaS6';
import FeatureAreaS3 from '../../components/FeatureAreaS3/FeatureAreaS3';
import AboutFeatured from '../../components/AboutFeatured/AboutFeatured';
import CounterArea from '../../components/CounterArea/CounterArea';
import ContactAreaS4 from '../../components/ContactAreaS4/ContactAreaS4';
import TestimonialAreaS2 from '../../components/TestimonialAreaS2/TestimonialAreaS2';
import BlogAreaS4 from '../../components/BlogAreaS4/BlogAreaS4';
import GsapAnimation from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS6: FC = () => {
   return (
      <Fragment>
         <GsapAnimation />
         <HeaderAreaS5 className="th-header header-layout6" />
         <HeroAreaS6 />
         <BrandArea className="brand-sec3 space-bottom" SecNote />
         <ServiceAreaS6 className="service-area space-bottom" />
         <AboutAreaS6 className="bg-smoke position-relative overflow-hidden space background-image" />
         <FeatureAreaS3 className="overflow-hidden space" />
         <AboutFeatured className="about-area" />
         <CounterArea className="counter-area space space-extra3-bottom overflow-hidden" />
         <ContactAreaS4 className="contact-area bg-top-center position-relative overflow-hidden background-image" />
         <TestimonialAreaS2 className="testimonial-area2 overflow-hidden space" />
         <BlogAreaS4 className="bg-smoke overflow-hidden space" />
         <FooterArea className="footer-wrapper bg-title footer-layout2 space-top" />
         <Scrollbar />
      </Fragment>
   );
};

export default HomePageS6;
