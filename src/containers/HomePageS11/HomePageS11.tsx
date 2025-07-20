import { Fragment, type FC } from 'react';
import AboutAreaS11 from '../../components/AboutAreaS11/AboutAreaS11';
import AboutAreaS12 from '../../components/AboutAreaS12/AboutAreaS12';
import BlogArea from '../../components/BlogArea/BlogArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import GalleryAreaS6 from '../../components/GalleryAreaS6/GalleryAreaS6';
import HeaderAreaS8 from '../../components/HeaderAreaS8/HeaderAreaS8';
import HeroAreaS11 from '../../components/HeroAreaS11/HeroAreaS11';
import HistorySection from '../../components/HistorySection/HistorySection';
import NewsletterSectionS2 from '../../components/NewsletterSectionS2/NewsletterSectionS2';
import PriceAreaS2 from '../../components/PriceAreaS2/PriceAreaS2';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS11 from '../../components/ServiceAreaS11/ServiceAreaS11';
import TeamAreaS7 from '../../components/TeamAreaS7/TeamAreaS7';
import TestimonialAreaS8 from '../../components/TestimonialAreaS8/TestimonialAreaS8';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS11: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderAreaS8 className="th-header header-layout1 header-layout11" />
      <HeroAreaS11 />
      <ServiceAreaS11 className="project-area position-relative overflow-hidden space" />
      <AboutAreaS11 />
      <GalleryAreaS6 />
      <PriceAreaS2 />
      <HistorySection />
      <TeamAreaS7 />
      <AboutAreaS12 />
      <TestimonialAreaS8 />
      <BlogArea className="overflow-hidden space white-bg" />
      <NewsletterSectionS2 />
      <FooterArea className="footer-wrapper bg-title footer-layout2 footer-layout5 footer-layout10 space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePageS11;
