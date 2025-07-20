import { Fragment, type FC } from 'react';

import CaseAreaS4 from '../../components/CaseAreaS4/CaseAreaS4';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const CasePage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="Case Studies" pagesub="Case Studies" />
      <CaseAreaS4 />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default CasePage;
