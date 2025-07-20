import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';
import type { FC } from 'react';

interface BlogAreaS3Props {
  className?: string;
}

const BlogAreaS3:FC<BlogAreaS3Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={`${props.className}`}>
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-lg">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title text-anime-style-2">News & Blog</span>
              <h2 className="sec-title text-anime-style-2">
                Cyber News and Insights
              </h2>
            </div>
          </div>
          <div className="col-lg-auto d-none d-lg-block">
            <div
              className="sec-btn scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <Link
                onClick={ClickHandler}
                to="/blog"
                className="th-btn style4 th-radius th-icon"
              >
                See More Articles{' '}
                <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gx-24 gy-30">
          <div className="col-xl-8">
            {BlogData.slice(7, 8).map((item, index) => (
              <div className="blog-grid2 style2 th-ani" key={index}>
                <div className="blog-img global-img">
                  <img src={item.imageUrl} alt="blog image" />
                </div>
                <div className="blog-grid2_content">
                  <div className="blog-meta">
                    <Link
                      onClick={ClickHandler}
                      className="author"
                      to="/blog"
                    >
                      Sep 09, 2025
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      6 min read
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-details/${item.slug}`}
                    >
                      The {item.title}
                    </Link>
                  </h3>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-details/${item.slug}`}
                    className="th-btn style4 th-radius th-icon"
                  >
                    Read More <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            ))}

            {BlogData.slice(8, 9).map((item, index) => (
              <div
                className="blog-grid2 th-ani style2 mt-24"
                key={index}
              >
                <div className="blog-img global-img">
                  <img src={item.imageUrl} alt="blog image" />
                </div>
                <div className="blog-grid2_content">
                  <div className="blog-meta">
                    <Link
                      onClick={ClickHandler}
                      className="author"
                      to="/blog"
                    >
                      Sep 09, 2025
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      6 min read
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-details/${item.slug}`}
                    >
                      The {item.title}
                    </Link>
                  </h3>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-details/${item.slug}`}
                    className="th-btn style4 th-radius th-icon"
                  >
                    Read More <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {BlogData.slice(9, 10).map((item, index) => (
            <div className="col-xl-4" key={index}>
              <div className="blog-grid2 th-ani">
                <div className="blog-img global-img">
                  <img src={item.imageUrl} alt="blog image" />
                </div>
                <div className="blog-grid2_content">
                  <div className="blog-meta">
                    <Link
                      onClick={ClickHandler}
                      className="author"
                      to="/blog"
                    >
                      Sep 09, 2025
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      6 min read
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-details/${item.slug}`}
                    >
                      The {item.title}
                    </Link>
                  </h3>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-details/${item.slug}`}
                    className="th-btn style4 th-radius th-icon"
                  >
                    Read More <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAreaS3;
