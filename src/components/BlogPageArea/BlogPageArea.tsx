import { type FC } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';
import blog1 from '../../img/blog/blog-s-1-2.webp';
import blog2 from '../../img/blog/blog-s-1-3.webp';
import blog3 from '../../img/blog/blog-s-1-4.webp';
import cat from '../../img/icon/map.svg';
import VideoModal from '../ModalVideo/ModalVideo';
import BlogSidBar from '../BlogSidBar/BlogSidBar';

interface BlogItem {
  slug: string;
  date: string;
  title: string;
  grid?: string;
  imageUrl?: string;
  minet?: string; 
}

const BlogPageArea: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="th-blog-wrapper mt-50 space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            {BlogData.slice(0, 1).map((item: BlogItem, index: number) => (
              <div className="th-blog blog-single has-post-thumbnail" key={index}>
                <div className="blog-img">
                  <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>
                    <img src={item.grid} alt="Blog Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" onClick={ClickHandler} to="/blog">
                      <i className="fal fa-user"></i>By Rotal
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      <i className="fal fa-clock"></i>{item.date}
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      <img src={cat} alt="icon" />Sea Beach
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p className="blog-text">
                    In today’s fast-evolving digital landscape, businesses need a clear IT strategy
                    to align technology with their long-term goals. IT Strategy & Planning services
                    help organizations optimize resources, improve efficiency, enhance security,
                    and drive innovation through a structured approach to technology adoption and
                    management.
                  </p>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-details/${item.slug}`}
                    className="th-btn style4 th-icon mb-10"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            ))}

            <div className="th-blog blog-single has-post-thumbnail">
              <div className="blog-img th-slider">
                <Swiper
                  modules={[Navigation, EffectFade]}
                  effect="fade"
                  navigation={{
                    nextEl: '.slider-next',
                    prevEl: '.slider-prev',
                  }}
                  className="swiper-wrapper"
                >
                  <SwiperSlide>
                    <img src={blog1} alt="Blog Image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={blog2} alt="Blog Image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={blog3} alt="Blog Image" />
                  </SwiperSlide>
                </Swiper>

                <button className="slider-arrow slider-prev">
                  <i className="far fa-arrow-left"></i>
                </button>
                <button className="slider-arrow slider-next">
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
              {BlogData.slice(1, 2).map((item: BlogItem, index: number) => (
                <div className="blog-content" key={index}>
                  <div className="blog-meta">
                    <Link className="author" onClick={ClickHandler} to="/blog">
                      <i className="fal fa-user"></i>By Rotal
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      <i className="fal fa-clock"></i>{item.date}
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      <img src={cat} alt="icon" />Sea Beach
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p className="blog-text">
                    In today’s fast-evolving digital landscape, businesses need a clear IT strategy
                    to align technology with their long-term goals. IT Strategy & Planning services
                    help organizations optimize resources, improve efficiency, enhance security,
                    and drive innovation through a structured approach to technology adoption and
                    management.
                  </p>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-details/${item.slug}`}
                    className="th-btn style4 th-icon mb-10"
                  >
                    READ MORE
                  </Link>
                </div>
              ))}
            </div>

            {BlogData.slice(2, 3).map((item: BlogItem, index: number) => (
              <div className="th-blog blog-single blog-2 smoke-bg has-post-thumbnail" key={index}>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" onClick={ClickHandler} to="/blog">
                      <i className="fal fa-user"></i>By Rotal
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      <i className="fal fa-clock"></i>{item.date}
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      <img src={cat} alt="icon" />Sea Beach
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p className="blog-text">
                    In today’s fast-evolving digital landscape, businesses need a clear IT strategy
                    to align technology with their long-term goals. IT Strategy & Planning services
                    help organizations optimize resources, improve efficiency, enhance security,
                    and drive innovation through a structured approach to technology adoption and
                    management.
                  </p>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-details/${item.slug}`}
                    className="th-btn style2 th-iconth-btn style4 th-icon mb-10"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            ))}

            {BlogData.slice(3, 4).map((item: BlogItem, index: number) => (
              <div className="th-blog blog-single has-post-thumbnail" key={index}>
                <div className="blog-img">
                  <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>
                    <img src={item.imageUrl} alt="Blog Image" />
                  </Link>
                  <VideoModal vidclass={'play-btn popup-video'} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" onClick={ClickHandler} to="/blog">
                      <i className="fal fa-user"></i>By Rotal
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      <i className="fal fa-clock"></i>{item.date}
                    </Link>
                    <Link onClick={ClickHandler} to="/blog">
                      <img src={cat} alt="icon" />Sea Beach
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p className="blog-text">
                    In today’s fast-evolving digital landscape, businesses need a clear IT strategy
                    to align technology with their long-term goals. IT Strategy & Planning services
                    help organizations optimize resources, improve efficiency, enhance security,
                    and drive innovation through a structured approach to technology adoption.
                  </p>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-details/${item.slug}`}
                    className="th-btn style2 th-iconth-btn style4 th-icon mb-10"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            ))}

            <div className="th-pagination ">
              <ul>
                <li>
                  <Link onClick={ClickHandler} to="/blog" className="active">
                    1
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/blog">
                    2
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/blog">
                    3
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/blog">
                    4
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/blog" className="next-page">
                    <i className="fa-sharp fa-light fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <BlogSidBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPageArea;
