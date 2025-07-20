import { Fragment, type FC } from 'react';
import BlogPageArea from '../../components/BlogPageArea/BlogPageArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

const BlogPage: FC = () => {
  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="Blog List" pagesub="Blog List" />
      <BlogPageArea />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogPage;
