
import { Fragment } from 'react';
import FeatuersArea from './FeatuersArea';
import FooterArea from './FooterArea';
import HeaderArea from './HeaderArea';
import HeroArea from './HeroArea';
import HomeArea from './HomeArea';
import InnerPagesArea from './InnerPagesArea';
import ResponsiveSupported from './ResponsiveSupported';
import CategorieArea from './CategorieArea';
import './sass/style.scss';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
const LandingPage = () => {

   return (
      <Fragment>
         <div className="landingpage" id='scroll'>
            <HeaderArea />
            <HeroArea />
            <FeatuersArea />
            <HomeArea />
            <CategorieArea />
            <InnerPagesArea />
            <ResponsiveSupported />
            <FooterArea />
            <Scrollbar />
         </div>
      </Fragment>
   )
}

export default LandingPage
