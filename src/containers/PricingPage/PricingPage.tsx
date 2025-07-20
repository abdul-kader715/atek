import { Fragment, type FC } from 'react';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import PriceAreaS6 from '../../components/PriceAreaS6/PriceAreaS6';
import CtaAreaS2 from '../../components/CtaAreaS2/CtaAreaS2';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const PricingPage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="Pricing Plan" pagesub="Pricing Plan" />
      <PriceAreaS6 />
      <CtaAreaS2 className="position-relative overflow-hidden space" />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default PricingPage;
