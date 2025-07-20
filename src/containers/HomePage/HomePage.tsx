import { Fragment, type FC } from 'react';
import AboutArea from '../../components/AboutArea/AboutArea';
import BlogArea from '../../components/BlogArea/BlogArea';
import BrandArea from '../../components/BrandArea/BrandArea';
import CaseArea from '../../components/CaseArea/CaseArea';
import CategoryArea from '../../components/CategoryArea/CategoryArea';
import CounterArea from '../../components/CounterArea/CounterArea';
import FeatureArea from '../../components/FeatureArea/FeatureArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import GalleryArea from '../../components/GalleryArea/GalleryArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HeroArea from '../../components/HeroArea/HeroArea';
import TeamArea from '../../components/TeamArea/TeamArea';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceArea from '../../components/ServiceArea/ServiceArea';
import TestimonialArea from '../../components/TestimonialArea/TestimonialArea';
import GsapAnimation from '../../components/GsapAnimetion/GsapAnimetion';

const HomePage: FC = () => {
   return (
      <Fragment>
         <GsapAnimation />
         <HeaderArea className="th-header header-layout1" />
         <HeroArea />
         <FeatureArea className="" />
         <CategoryArea className="category-area bg-top-center space background-image" />
         <AboutArea className="about-area position-relative overflow-hidden" />
         <CaseArea className="case-area position-relative overflow-hidden space arrow-wrap" />
         <ServiceArea className="position-relative bg-top-center overflow-hidden space background-image" />
         <GalleryArea className="gallery-area overflow-hidden" />
         <CounterArea className="counter-area space space-extra3-bottom overflow-hidden" />
         <TeamArea className="bg-smoke space overflow-hidden background-image" />
         <TestimonialArea className="testi-area overflow-hidden space" />
         <BrandArea className="brand-area overflow-hidden space-bottom" />
         <BlogArea className="overflow-hidden space bg-smoke overflow-hidden arrow-wrap shape-mockup-wrap blogArea" />
         <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
         <Scrollbar />
      </Fragment>
   );
};

export default HomePage;
