import { Link } from 'react-router-dom';
import present from '../../img/shape/blog-present.png';
import patter from '../../img/shape/line-patter.png';
import BlogData from '../../api/blog';
import type { FC } from 'react';

const BlogAreaS8: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className="blog-area space bg-smoke background-image"
      style={{ backgroundImage: `url(${patter})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area blog12-titlebox text-center text-lg-start pe-xl-5">
                  <span className="sub-title text-anime-style-2">Blog and Article</span>
                  <h2 className="sec-title text-anime-style-3">
                    News & Articles From Tourm
                  </h2>
                  <Link
                    onClick={ClickHandler}
                    to="/blog"
                    className="th-btn style4 th-radius th-icon scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    See More Articles <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="blog12-shape">
                  <img src={present} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="blog-grid4-static-wrap">
              {BlogData.slice(0, 6).map((item, bix) => (
                <div className="col-12 blog-grid12 blog-grid4_wrapp" key={bix}>
                  <div className="blog-grid4 th-ani style4 mt-24">
                    <div className="blog-img global-img">
                      <img src={item.urlGrid12} alt="blog image" />
                    </div>
                    <div className="box-content">
                      <div className="blog-meta">
                        <Link
                          onClick={ClickHandler}
                          className="author"
                          to="/blog"
                        >
                          {item.date}
                        </Link>
                        <Link onClick={ClickHandler} to="/blog">
                          {item.minet}
                        </Link>
                      </div>
                      <h3 className="box-title">
                        <Link
                          onClick={ClickHandler}
                          to={`/blog-details/${item.slug}`}
                        >
                          {item.title9}
                        </Link>
                      </h3>
                      <p className="sec-text">{item.descpt}</p>
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
        </div>
      </div>
    </section>
  );
};

export default BlogAreaS8;
