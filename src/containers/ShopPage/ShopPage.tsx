import { Fragment, type FC } from 'react';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import ProductArea from '../../components/ProductArea/ProductArea';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const ShopPage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className={'th-header header-layout1'} />
      <PageTitle pageTitle={'Shops'} pagesub={'Shops'} />
      <ProductArea className={'space-top space-extra-bottom'} totalPages={2} />
      <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
      <Scrollbar />
    </Fragment>
  );
};

export default ShopPage;
