import { Fragment, type FC } from 'react';

import AboutAreaS10 from '../../components/AboutAreaS10/AboutAreaS10';
import ChooseAreaS4 from '../../components/ChooseAreaS4/ChooseAreaS4';
import CounterAreaS3 from '../../components/CounterAreaS3/CounterAreaS3';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import TeamArea from '../../components/TeamArea/TeamArea';
import TestimonialAreaS8 from '../../components/TestimonialAreaS8/TestimonialAreaS8';
import VideoAreaS2 from '../../components/VideoAreaS2/VideoAreaS2';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const AboutPage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="About Us" pagesub="About Us" />
      <AboutAreaS10 className="about-area space-extra-bottom position-relative overflow-hidden space" />
      <CounterAreaS3 className="counter-sec2 space" />
      <TeamArea className="team-area space bg-smoke background-image" />
      <ChooseAreaS4 className="choose-area space" />
      <VideoAreaS2 />
      <TestimonialAreaS8 />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutPage;
