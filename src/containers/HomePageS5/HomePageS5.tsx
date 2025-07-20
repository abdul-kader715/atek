import { Fragment, type FC } from 'react';
import BrandArea from '../../components/BrandArea/BrandArea';
import CounterArea from '../../components/CounterArea/CounterArea';
import HeroAreaS5 from '../../components/HeroAreaS5/HeroAreaS5';
import CtaArea from '../../components/CtaArea/CtaArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import ChooseAreaS2 from '../../components/ChooseAreaS2/ChooseAreaS2';
import HeaderAreaS3 from '../../components/HeaderAreaS3/HeaderAreaS3';
import FeatureAreaS2 from '../../components/FeatureAreaS2/FeatureAreaS2';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import AboutAreaS5 from '../../components/AboutAreaS5/AboutAreaS5';
import ServiceAreaS5 from '../../components/ServiceAreaS5/ServiceAreaS5';
import TestimonialAreaS3 from '../../components/TestimonialAreaS3/TestimonialAreaS3';
import ContactAreaS3 from '../../components/ContactAreaS3/ContactAreaS3';
import BlogAreaS3 from '../../components/BlogAreaS3/BlogAreaS3';
import GalleryAreaS4 from '../../components/GalleryAreaS4/GalleryAreaS4';
import GsapAnimation from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS5: FC = () => {
   return (
      <Fragment>
         <GsapAnimation />
         <HeaderAreaS3 className="th-header header-layout3 header-absolute" />
         <HeroAreaS5 />
         <FeatureAreaS2 className="featured-area" />
         <ChooseAreaS2 className="choose-area5 space space-extra" />
         <AboutAreaS5 className="bg-smoke position-relative overflow-hidden space" />
         <BrandArea className="brand-area overflow-hidden space" />
         <ServiceAreaS5 className="service-area overflow-hidden space-bottom" />
         <CtaArea className="cta-4 position-relative overflow-hidden" />
         <CounterArea className="counter-area space space-extra3-bottom overflow-hidden" />
         <TestimonialAreaS3 className="testi-area5 bg-smoke overflow-hidden space" />
         <ContactAreaS3 className="bg-top-center space-top overflow-hidden background-image" />
         <BlogAreaS3 className="overflow-hidden space" />
         <GalleryAreaS4 className="sidebar-gallery-area space-bottom" />
         <FooterArea className="footer-wrapper bg-title footer-layout2 space-top" />
         <Scrollbar />
      </Fragment>
   );
};

export default HomePageS5;
