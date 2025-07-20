import { Fragment, type FC } from 'react';
import AboutAreaS9 from '../../components/AboutAreaS9/AboutAreaS9';
import BlogAreaS7 from '../../components/BlogAreaS7/BlogAreaS7';
import ChooseAreaS3 from '../../components/ChooseAreaS3/ChooseAreaS3';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS6 from '../../components/HeaderAreaS6/HeaderAreaS6';
import HeroAreaS9 from '../../components/HeroAreaS9/HeroAreaS9';
import ProcessArea from '../../components/ProcessArea/ProcessArea';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS9 from '../../components/ServiceAreaS9/ServiceAreaS9';
import TestimonialAreaS6 from '../../components/TestimonialAreaS6/TestimonialAreaS6';
import PriceArea from '../../components/PriceArea/PriceArea';
import TeamAreaS5 from '../../components/TeamAreaS5/TeamAreaS5';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS9: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderAreaS6 className="th-header header-layout5" />
      <HeroAreaS9 />
      <ServiceAreaS9 className="service-area5 bg-top-center position-relative overflow-hidden space" />
      <AboutAreaS9 className="about-4-area overflow-hidden space bg-smoke" />
      <ProcessArea className="process-area bg-top-center space background-image" />
      <ChooseAreaS3 className="choose-6-area space-bottom" />
      <TestimonialAreaS6 className="overflow-hidden space space-extra-bottom background-image" />
      <PriceArea />
      <TeamAreaS5 className="team-area8 overflow-hidden bg-smoke space" />
      <BlogAreaS7 />
      <FooterArea className="footer-wrapper bg-title footer-layout2 space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePageS9;
