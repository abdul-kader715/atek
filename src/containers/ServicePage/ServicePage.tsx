import { Fragment, type FC } from 'react';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServicePageArea from '../../components/ServicePageArea/ServicePageArea';
import CtaAreaS2 from '../../components/CtaAreaS2/CtaAreaS2';
import BrandArea from '../../components/BrandArea/BrandArea';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const ServicePage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="Our Services" pagesub="Our Services" />
      <ServicePageArea />
      <CtaAreaS2 className="position-relative overflow-hidden space" />
      <BrandArea className="brand-sec space-bottom" SecNote={true} />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default ServicePage;
