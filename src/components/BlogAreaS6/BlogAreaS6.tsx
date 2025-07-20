import { Link } from "react-router-dom";
import BlogData from "../../api/blog";
import type { FC } from "react";

interface BlogAreaS6Props {
  className?: string;
}

const BlogAreaS6: FC<BlogAreaS6Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={`${props.className}`}>
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-lg">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title text-anime-style-2">Blog and Article</span>
              <h2 className="sec-title text-anime-style-3">
                News & Articles From Atek
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
                See More Articles <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gx-24 gy-30">
          {BlogData.slice(3, 4).map((item, index) => (
            <div className="col-xl-5" key={index}>
              <div className="blog-grid th-ani">
                <div className="blog-img global-img">
                  <img src={item.imageUrl8} alt="blog image" />
                </div>
                <div className="blog-grid_content">
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
                      {item.title8}
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

          <div className="col-xl-7">
            {BlogData.slice(4, 5).map((item, index) => (
              <div className="blog-grid style2 th-ani" key={index}>
                <div className="blog-img global-img">
                  <img src={item.imageUrl8} alt="blog image" />
                </div>
                <div className="blog-grid_content">
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
                      {item.title8}
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

            {BlogData.slice(5, 6).map((item, index) => (
              <div className="blog-grid th-ani style2 mt-24" key={index}>
                <div className="blog-img global-img">
                  <img src={item.imageUrl8} alt="blog image" />
                </div>
                <div className="blog-grid_content">
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
                      {item.title8}
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
        </div>
      </div>
    </section>
  );
};

export default BlogAreaS6;
