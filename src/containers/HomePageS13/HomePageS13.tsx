import { Fragment, type FC} from 'react';
import AboutAreaS15 from '../../components/AboutAreaS15/AboutAreaS15';
import BlogAreaS9 from '../../components/BlogAreaS9/BlogAreaS9';
import BrandAreaS3 from '../../components/BrandAreaS3/BrandAreaS3';
import ChooseAreaS5 from '../../components/ChooseAreaS5/ChooseAreaS5';
import CounterAreaS4 from '../../components/CounterAreaS4/CounterAreaS4';
import FaqArea from '../../components/FaqArea/FaqArea';
import FeaturesArea from '../../components/FeaturesArea/FeaturesArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS9 from '../../components/HeaderAreaS9/HeaderAreaS9';
import HeroAreaS13 from '../../components/HeroAreaS13/HeroAreaS13';
import HistoryArea from '../../components/HistoryArea/HistoryArea';
import PriceAreaS4 from '../../components/PriceAreaS4/PriceAreaS4';
import ProcessAreaS3 from '../../components/ProcessAreaS3/ProcessAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS14 from '../../components/ServiceAreaS14/ServiceAreaS14';
import TeamAreaS9 from '../../components/TeamAreaS9/TeamAreaS9';
import TestimonialAreaS10 from '../../components/TestimonialAreaS10/TestimonialAreaS10';
import VideoArea from '../../components/VideoArea/VideoArea';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS13: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderAreaS9 className="th-header header-layout12 header-layout13" HeaderTop={false} />
      <HeroAreaS13 />
      <BrandAreaS3 />
      <FeaturesArea />
      <AboutAreaS15 />
      <CounterAreaS4 />
      <ServiceAreaS14 className="service-area service10-style space space-extra-bottom light-bg" />
      <VideoArea />
      <HistoryArea />
      <ChooseAreaS5 />
      <PriceAreaS4 />
      <TeamAreaS9 />
      <ProcessAreaS3 />
      <FaqArea />
      <TestimonialAreaS10 />
      <BlogAreaS9 className="overflow-hidden space light-bg" />
      <FooterArea
        className="footer-wrapper bg-title footer-layout2 space-top dark-bg"
        footerlogotwo={true}
        footerlogoOn={false}
      />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePageS13;
