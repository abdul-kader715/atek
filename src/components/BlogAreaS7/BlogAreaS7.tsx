import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';
import discus from '../../img/shape/blog-discus.png';
import type { FC } from 'react';

const BlogAreaS7: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="space">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area text-center text-lg-start pe-xl-5">
                  <span className="sub-title text-anime-style-2">Blog and Article</span>
                  <h2 className="sec-title text-anime-style-3">
                    Latest Blog & Articles From Atek
                  </h2>
                  <Link
                    onClick={ClickHandler}
                    to="/blog"
                    className="th-btn style4 th-icon"
                  >
                    See More Articles <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="blog-shape text-lg-start text-center">
                  <img src={discus} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="blog-grid4-static-wrap">
              {BlogData.slice(0, 6).map((item, bix) => (
                <div className="col-12 blog-grid4_wrapp" key={bix}>
                  <div className="blog-grid4 th-ani style4 mt-24">
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
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-details/${item.slug}`}
                        className="th-btn style4 th-icon"
                      >
                        Read More <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                    <div className="blog-img global-img">
                      <img src={item.urlGrid9} alt="blog image" />
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

export default BlogAreaS7;
