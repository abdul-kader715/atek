import { Fragment, type FC } from 'react';

import AboutAreaS4 from '../../components/AboutAreaS4/AboutAreaS4';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HistoryAreaS2 from '../../components/HistoryAreaS2/HistoryAreaS2';
import PageTitle from '../../components/PageTitle/PageTitle';
import ProcessArea from '../../components/ProjectArea/ProjectArea';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import VideoAreaS3 from '../../components/VideoAreaS3/VideoAreaS3';
import CounterAreaS5 from '../../components/CounterAreaS5/CounterAreaS5';
import TeamAreaS5 from '../../components/TeamAreaS5/TeamAreaS5';
import TestimonialArea from '../../components/TestimonialArea/TestimonialArea';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const AboutPage: FC = () =>  {

   return (
      <Fragment>
         <GsapAnimetion/>
         <HeaderArea className={'th-header header-layout1'} />
         <PageTitle pageTitle={'About Us Two'} pagesub={'About Us Two'} />
         <AboutAreaS4 className={'about-area position-relative overflow-hidden space'} />
         <ProcessArea className={'process-area bg-top-center space background-image'} />
         <VideoAreaS3 />
         <HistoryAreaS2 />
         <CounterAreaS5 />
         <TeamAreaS5 className={'team-area8 overflow-hidden bg-smoke space'}   />
         <TestimonialArea className={'testi-area overflow-hidden space'} />
         <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
         <Scrollbar />

      </Fragment>
   )
}

export default AboutPage
