import type { FC } from 'react';
import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';

interface BlogItem {
  slug: string;
  title: string;
  date: string;
  minet: string;
  gridPage: string;
  [key: string]: any; // fallback for other props if needed
}

const BlogGrid: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="blog-area space space-extra2-bottom">
      <div className="container">
        <div className="blog-area">
          <div className="row gy-30 justify-content-center">
            {BlogData.slice(3, 12).map((item: BlogItem, bindex: number) => (
              <div className="col-xl-4 col-md-6" key={bindex}>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={item.gridPage} alt="Blog Image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link onClick={ClickHandler} to="#">
                        <i className="fal fa-clock"></i>
                        {item.date}
                      </Link>
                      <Link onClick={ClickHandler} to="#">
                        {item.minet}
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-details/${item.slug}`}
                      className="th-btn style4 th-icon mb-1"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
