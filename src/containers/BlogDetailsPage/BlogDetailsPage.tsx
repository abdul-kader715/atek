import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../../api/blog';
import BlogDetail from '../../components/BlogDetails/BlogDetails';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface BlogPost {
  slug: string;
  title: string;
}

const BlogDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const BlogDetails: BlogPost | undefined = BlogData.find((item: BlogPost) => item.slug === slug);

  if (!BlogDetails) {
    return <div>Blog post not found</div>; 
  }

  return (
    <Fragment>
      <GsapAnimetion/>
      <HeaderArea className={'th-header header-layout1'} />
      <PageTitle pageTitle={BlogDetails.title} pagesub={'Single Blog'} />
      <BlogDetail />
      <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetailsPage;