import  { Fragment, type FC } from 'react';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GalleryAreaS7 from '../../components/GalleryAreaS7/GalleryAreaS7';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const GalleryPage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="Gallery" pagesub="Gallery" />
      <GalleryAreaS7 />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default GalleryPage;
