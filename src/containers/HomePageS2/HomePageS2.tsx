import { Fragment, type FC } from 'react';
import BlogArea from '../../components/BlogArea/BlogArea';
import GsapAnimation from '../../components/GsapAnimetion/GsapAnimetion';
import BrandArea from '../../components/BrandArea/BrandArea';
import ChooseArea from '../../components/ChooseArea/ChooseArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS2 from '../../components/HeaderAreaS2/HeaderAreaS2';
import HeroAreaS2 from '../../components/HeroAreaS2/HeroAreaS2';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS2 from '../../components/ServiceAreaS2/ServiceAreaS2';
import AboutAreaS2 from '../../components/AboutAreaS2/AboutAreaS2';
import PriceAreaS5 from '../../components/PriceAreaS5/PriceAreaS5';
import CounterArea from '../../components/CounterArea/CounterArea';
import GalleryAreaS2 from '../../components/GalleryAreaS2/GalleryAreaS2';
import TeamArea from '../../components/TeamArea/TeamArea';
import TestimonialAreaS2 from '../../components/TestimonialAreaS2/TestimonialAreaS2';

const HomePageS2: FC = () => {
   return (
      <Fragment>
         <GsapAnimation />
         <HeaderAreaS2 className="th-header header-layout1 header-layout2" />
         <HeroAreaS2 />
         <ServiceAreaS2 className="service-area bg-top-center position-relative space overflow-hidden background-image" />
         <ChooseArea className="choose-area bg-top-center" />
         <AboutAreaS2 className="about-area position-relative overflow-hidden space" />
         <PriceAreaS5 className="price-sec2 position-relative overflow-hidden bg-top-center z-index-3 space-top" />
         <CounterArea className="counter-area space space-extra3-bottom overflow-hidden" />
         <GalleryAreaS2 className="gallery-area2 bg-top-center space overflow-hidden background-image" />
         <TeamArea className="team-area space bg-smoke background-image" />
         <TestimonialAreaS2 className="testimonial-area2 overflow-hidden space" />
         <BrandArea className="brand-area overflow-hidden space-bottom" />
         <BlogArea className="overflow-hidden space bg-smoke overflow-hidden arrow-wrap shape-mockup-wrap blogArea" />
         <FooterArea className="footer-wrapper bg-title footer-layout2 space-top" />
         <Scrollbar />
      </Fragment>
   );
};

export default HomePageS2;
