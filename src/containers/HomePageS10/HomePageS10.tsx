import { Fragment, type FC } from 'react';
import AboutAreaS10 from '../../components/AboutAreaS10/AboutAreaS10';
import BlogArea from '../../components/BlogArea/BlogArea';
import BrandArea from '../../components/BrandArea/BrandArea';
import ChooseAreaS4 from '../../components/ChooseAreaS4/ChooseAreaS4';
import CounterAreaS3 from '../../components/CounterAreaS3/CounterAreaS3';
import CtaAreaS2 from '../../components/CtaAreaS2/CtaAreaS2';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS7 from '../../components/HeaderAreaS7/HeaderAreaS7';
import HeroAreaS10 from '../../components/HeroAreaS10/HeroAreaS10';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import ProcessAreaS2 from '../../components/ProcessAreaS2/ProcessAreaS2';
import ProjectAreaS4 from '../../components/ProjectAreaS4/ProjectAreaS4';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS10 from '../../components/ServiceAreaS10/ServiceAreaS10';
import TeamAreaS6 from '../../components/TeamAreaS6/TeamAreaS6';
import TestimonialAreaS7 from '../../components/TestimonialAreaS7/TestimonialAreaS7';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS10: FC = () =>{
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderAreaS7 className="th-header header-layout3 header-layout9" />
      <HeroAreaS10 />
      <ServiceAreaS10 className="service-area8 space space-extra-bottom" />
      <AboutAreaS10 className="about-area space-extra-bottom position-relative overflow-hidden space-bottom" />
      <ProjectAreaS4 className="project-area position-relative overflow-hidden space background-imag" />
      <CtaAreaS2 className="position-relative overflow-hidden space" />
      <TeamAreaS6 className="team-area9 overflow-hidden space-bottom" />
      <ProcessAreaS2 className="process-area bg-top-center space background-image" />
      <ChooseAreaS4 className="choose-area space-bottom" />
      <CounterAreaS3 className="counter-sec2 space-bottom" />
      <TestimonialAreaS7 />
      <BlogArea className="overflow-hidden space white-bg" />
      <NewsletterSection className="newsletter-area" />
      <BrandArea className="brand-sec space" SecNote={true} />
      <FooterArea className="footer-wrapper bg-title footer-layout2 footer-layout5 footer-layout10 space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePageS10;
