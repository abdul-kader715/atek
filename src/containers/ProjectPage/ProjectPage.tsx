import { Fragment, type FC } from 'react';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ProjectAreaS5 from '../../components/ProjectAreaS5/ProjectAreaS5';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const EventPage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="Projects Grid" pagesub="Projects" />
      <ProjectAreaS5 />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default EventPage;
