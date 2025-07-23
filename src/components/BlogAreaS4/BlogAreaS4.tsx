import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import BlogData from "../../api/blog";
import shape from "../../img/shape/ab-1-shape-1.png";
import shape2 from "../../img/shape/blog-1-shape.png";
import ShapeMockup from "../ShapeMockup/ShapeMockup";
import type { FC } from "react";

interface BlogAreaS4Props {
  className?: string;
}

const BlogAreaS4: FC<BlogAreaS4Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  return (
    <section className={`${props.className}`} id="blog-sec">
      <div className="container">
        <div className="mb-30 text-center text-md-start">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="title-area mb-md-0">
                <span className="sub-title  text-anime-style-2">Blog and Article</span>
                <h2 className="sec-title  text-anime-style-3">News & Articles From Atek</h2>
              </div>
            </div>
            <div className="col-md-auto scroll-text-animation" data-animation="fade_from_bottom">
              <Link
                onClick={ClickHandler}
                to="/blog"
                className="th-btn style4 th-icon"
              >
                See More Articles <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            className="swiper th-slider has-shadow"
            id="blogSlider1"
            spaceBetween={24}
            loop={settings.loop}
            speed={settings.speed}
            autoplay={settings.autoplay}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {BlogData.slice(0, 4).map((Blog, index) => (
              <SwiperSlide key={index}>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={Blog.urlGrid} alt="blog image" />
                  </div>
                  <div className="blog-box_content">
                    <div className="blog-meta">
                      <Link onClick={ClickHandler} className="author" to="/blog">
                        {Blog.date}
                      </Link>
                      <Link onClick={ClickHandler} to="/blog">
                        {Blog.minet}
                      </Link>
                    </div>
                    <h3 className="box-title">
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-details/${Blog.slug}`}
                      >
                        {Blog.title2}
                      </Link>
                    </h3>
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-details/${Blog.slug}`}
                      className="th-btn style4 th-icon"
                    >
                      Read More <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ShapeMockup
        className="shape-mockup shape1 d-none d-xxl-block"
        bottom="5%"
        left="3%"
      >
        <img src={shape2} alt="shape" />
      </ShapeMockup>
      <ShapeMockup
        className="shape-mockup shape2 d-none d-xl-block"
        top="28%"
        right="5%"
      >
        <img src={shape} alt="shape" />
      </ShapeMockup>
    </section>
  );
};

export default BlogAreaS4;
