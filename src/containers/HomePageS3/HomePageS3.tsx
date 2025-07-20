import { Fragment, type FC } from 'react';
import AboutAreaS3 from '../../components/AboutAreaS3/AboutAreaS3';
import HeroAreaS3 from '../../components/HeroAreaS3/HeroAreaS3';
import BlogAreaS2 from '../../components/BlogAreaS2/BlogAreaS2';
import BrandArea from '../../components/BrandArea/BrandArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS3 from '../../components/HeaderAreaS3/HeaderAreaS3';
import ProcessArea from '../../components/ProjectArea/ProjectArea';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import CaseAreaS2 from '../../components/CaseAreaS2/CaseAreaS2';
import ServiceAreaS3 from '../../components/ServiceAreaS3/ServiceAreaS3';
import TestimonialAreaS2 from '../../components/TestimonialAreaS2/TestimonialAreaS2';
import GalleryAreaS3 from '../../components/GalleryAreaS3/GalleryAreaS3';
import TeamAreaS3 from '../../components/TeamAreaS3/TeamAreaS3';
import ContactArea from '../../components/ContactArea/ContactArea';
import GsapAnimation from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS3: FC = () => {
   return (
      <Fragment>
         <GsapAnimation />
         <HeaderAreaS3 className="th-header header-layout3 header-absolute" />
         <HeroAreaS3 />
         <ServiceAreaS3 className="position-relative overflow-hidden space background-image" />
         <CaseAreaS2 className="category-area3 bg-smoke space background-image" />
         <AboutAreaS3 className="about-area position-relative overflow-hidden space" />
         <ProcessArea className="process-area bg-top-center space background-image" />
         <GalleryAreaS3 className="process-area bg-top-center space background-image" />
         <TeamAreaS3 className="team-area3 position-relative bg-top-center space background-image" />
         <ContactArea className="contact-area3 bg-top-center overflow-hidden background-image" />
         <TestimonialAreaS2 className="testimonial-area2 overflow-hidden space" />
         <BrandArea className="brand-area overflow-hidden space-bottom" />
         <BlogAreaS2 className="bg-smoke overflow-hidden space" />
         <FooterArea className="footer-wrapper bg-title footer-layout2 space-top" />
         <Scrollbar />
      </Fragment>
   );
};

export default HomePageS3;
