import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import AllTab from './AllTab';
import Productitem from './Productitem';
import ShopDetailApi from "../../api/data.json";
import RecentlyViewed from '../../components/ShopArea/ShopArea';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface ShopDetailsItem {
  slug: string;
  [key: string]: any;
}

const ShopDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ShopDetailsItem: ShopDetailsItem | undefined = ShopDetailApi.find(item => item.slug === slug);
  
  if (!ShopDetailsItem) {
    return <div>Product not found</div>;
  }

  return (
    <Fragment>
      <GsapAnimetion/>
      <HeaderArea className={'th-header header-layout1'} />
      <PageTitle pageTitle={'Shop Details'} pagesub={'Shop Details'} />
      <section className="product-details space-top space-extra-bottom">
        <div className="container">
          <Productitem item={ShopDetailsItem}/>
          <AllTab />
          <RecentlyViewed/>
        </div>
      </section>
      <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
      <Scrollbar />
    </Fragment>
  );
};

export default ShopDetails;