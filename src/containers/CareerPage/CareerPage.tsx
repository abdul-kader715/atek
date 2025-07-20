import { Fragment, type FC } from 'react';

import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import JobSortAndPagination from '../../components/JobSortAndPagination/JobSortAndPagination';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const CareerPage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="Career Page" pagesub="Career" />
      <JobSortAndPagination />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default CareerPage;
