import { Fragment, type FC } from 'react';
import FaqAreaS2 from '../../components/FaqAreaS2/FaqAreaS2';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const ErrorPage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className={'th-header header-layout1'} />
      <PageTitle pageTitle={'FAQS'} pagesub={'FAQ'} />
      <FaqAreaS2 />
      <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
      <Scrollbar />
    </Fragment>
  );
};

export default ErrorPage;
