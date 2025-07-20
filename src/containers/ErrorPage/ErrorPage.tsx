import { Fragment, type FC } from 'react';
import ErrorArea from '../../components/ErrorArea/ErrorArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';

const ErrorPage: FC = () => {
  return (
    <Fragment>
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle="Error Page" pagesub="Error Page" />
      <ErrorArea />
      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default ErrorPage;
