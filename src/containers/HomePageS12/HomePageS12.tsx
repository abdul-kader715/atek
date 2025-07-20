import { Fragment, type FC } from 'react';
import AboutAreaS13 from '../../components/AboutAreaS13/AboutAreaS13';
import AboutAreaS14 from '../../components/AboutAreaS14/AboutAreaS14';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import BlogAreaS8 from '../../components/BlogAreaS8/BlogAreaS8';
import BrandAreaS2 from '../../components/BrandAreaS2/BrandAreaS2';
import ContactAreaS7 from '../../components/ContactAreaS7/ContactAreaS7';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderAreaS8 from '../../components/HeaderAreaS8/HeaderAreaS8';
import HeroAreaS12 from '../../components/HeroAreaS12/HeroAreaS12';
import PriceAreaS3 from '../../components/PriceAreaS3/PriceAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS12 from '../../components/ServiceAreaS12/ServiceAreaS12';
import ServiceAreaS13 from '../../components/ServiceAreaS13/ServiceAreaS13';
import TeamAreaS8 from '../../components/TeamAreaS8/TeamAreaS8';
import TestimonialAreaS9 from '../../components/TestimonialAreaS9/TestimonialAreaS9';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const HomePageS12: FC = () =>{
   return (
      <Fragment>
         <GsapAnimetion/>
         <HeaderAreaS8 className={'th-header header-layout1 header-layout12'} HeaderTop={false} />
         <HeroAreaS12 />
         <BrandAreaS2 />
         <AboutAreaS13 />
         <BenefitSection />
         <ServiceAreaS12 className={'service-area overflow-hidden space'} />
         <AboutAreaS14  />
         <PriceAreaS3 />
         <ServiceAreaS13 />
         <TestimonialAreaS9 />
         <ContactAreaS7 className={'contact-area3 bg-top-center space-top overflow-hidden background-image'} />
         <TeamAreaS8 />
         <BlogAreaS8 />
         <FooterArea className={'footer-wrapper bg-title footer-layout2 space-top'} />
         <Scrollbar />
      </Fragment>
   )
}

export default HomePageS12
