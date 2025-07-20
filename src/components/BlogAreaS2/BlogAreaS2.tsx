import { Link } from "react-router-dom";
import BlogData from "../../api/blog";
import shape from "../../img/shape/ab-1-shape-1.png";
import shape2 from "../../img/shape/blog-1-shape.png";
import ShapeMockup from "../ShapeMockup/ShapeMockup";
import type { FC } from "react";

interface BlogAreaS2Props {
  className?: string;
}

const BlogAreaS2: FC<BlogAreaS2Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={props.className}>
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-lg">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title text-anime-style-2">
                Blog and Article
              </span>
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
                className="th-btn style4 th-icon"
              >
                See More Articles{" "}
                <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gx-24 gy-30">
          {BlogData.slice(4, 5).map((item, index) => (
            <div className="col-xl-4" key={index}>
              <div className="blog-grid th-ani">
                <div className="blog-img global-img">
                  <img src={item.imageUrl} alt="blog" />
                </div>
                <div className="blog-grid_content">
                  <div className="blog-meta">
                    <Link onClick={ClickHandler} className="author" to="/blog">
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
                      {item.title}
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
              </div>
            </div>
          ))}

          <div className="col-xl-8">
            {BlogData.slice(5, 6).map((item, index) => (
              <div className="blog-grid style2 th-ani" key={index}>
                <div className="blog-img global-img">
                  <img src={item.imageUrl} alt="blog" />
                </div>
                <div className="blog-grid_content">
                  <div className="blog-meta">
                    <Link onClick={ClickHandler} className="author" to="/blog">
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
                      {item.title}
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
              </div>
            ))}

            {BlogData.slice(6, 7).map((item, index) => (
              <div className="blog-grid style2 th-ani mt-24" key={index}>
                <div className="blog-img global-img">
                  <img src={item.imageUrl} alt="blog" />
                </div>
                <div className="blog-grid_content">
                  <div className="blog-meta">
                    <Link onClick={ClickHandler} className="author" to="/blog">
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
                      {item.title}
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
              </div>
            ))}
          </div>
        </div>

        <ShapeMockup
          className="shape-mockup shape2 d-none d-xl-block"
          top="5%"
          right="-12%"
        >
          <img src={shape} alt="shape" />
        </ShapeMockup>
        <ShapeMockup
          className="shape-mockup shape3 d-none d-xxl-block"
          bottom="0%"
          left="-18%"
        >
          <img src={shape2} alt="shape" />
        </ShapeMockup>
      </div>
    </section>
  );
};

export default BlogAreaS2;
