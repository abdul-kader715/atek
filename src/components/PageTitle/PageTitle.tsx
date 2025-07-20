import type { FC } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../img/bg/breadcumb-bg.jpg';

interface PageTitleProps {
  pageTitle: string;
  pagesub: string;
}

const PageTitle: FC<PageTitleProps> = ({ pageTitle, pagesub }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="breadcumb-banner">
      <div className="breadcumb-wrapper background-image" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{pageTitle}</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link onClick={ClickHandler} to="/">
                  Home
                </Link>
              </li>
              <li>{pagesub}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
