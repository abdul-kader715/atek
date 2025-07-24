import React, { useState, useRef, type FormEvent } from "react";
import SimpleReactValidator from "simple-react-validator";
import { Link } from "react-router-dom";

import recent1 from '../../img/blog/recent-post-1-1.webp';
import recent2 from '../../img/blog/recent-post-1-2.webp';
import recent3 from '../../img/blog/recent-post-1-3.webp';
import bannerBg from '../../img/bg/widget_banner.webp';

const BlogSidebar: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [, forceUpdate] = useState<number>(0);
  const validator = useRef<SimpleReactValidator>(new SimpleReactValidator());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      // Form is valid, do something here if needed
    } else {
      validator.current.showMessages();
      forceUpdate((prev) => prev + 1);
    }
  };

  const ClickHandler = () => window.scrollTo(10, 0);

  return (
    <aside className="sidebar-area">
      <div className="widget widget_search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              validator.current.showMessageFor("search");
            }}
          />
          <button type="submit"><i className="far fa-search"></i></button>
        </form>
      </div>

      <div className="widget widget_categories">
        <h3 className="widget_title">Categories</h3>
        <ul>
          {[
            "IT Strategy & Planning",
            "Web Developments",
            "Cloud Consulting",
            "Machine Learning",
            "Database Security",
            "IT Management"
          ].map((cat, idx) => (
            <li key={idx}>
              <Link onClick={ClickHandler} to="/blog">{cat}</Link>
              <span><i className="fa-regular fa-arrow-up-right"></i></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget_title">Recent Posts</h3>
        <div className="recent-post-wrap">
          {[
            {
              img: recent1,
              date: "22 Sep, 2025",
              title: "5 Common IT Issues and How to Solve Them"
            },
            {
              img: recent2,
              date: "25 Sep, 2025",
              title: "Hybrid Cloud Solutions: The Best of Both Worlds"
            },
            {
              img: recent3,
              date: "27 Sep, 2025",
              title: "Top 10 IT Solutions Every Business."
            }
          ].map((post, idx) => (
            <div className="recent-post" key={idx}>
              <div className="media-img">
                <Link onClick={ClickHandler} to="/blog-details/1">
                  <img src={post.img} alt="Blog" />
                </Link>
              </div>
              <div className="media-body">
                <div className="recent-post-meta">
                  <Link onClick={ClickHandler} to="/blog">
                    <i className="fa-solid fa-calendar-days"></i> {post.date}
                  </Link>
                </div>
                <h4 className="post-title">
                  <Link onClick={ClickHandler} className="text-inherit" to="/blog-details/1">
                    {post.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="widget widget_tag_cloud">
        <h3 className="widget_title">Popular Tags</h3>
        <div className="tagcloud">
          {[
            "Advice", "Technology", "Atek", "Ux/Ui",
            "Consulting", "Solution", "Health", "IT Solution", "Cloud"
          ].map((tag, idx) => (
            <Link onClick={ClickHandler} to="/blog" key={idx}>{tag}</Link>
          ))}
        </div>
      </div>

      <div className="widget widget_banner background-image" style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="widget-banner position-relative text-center">
          <span className="icon"><i className="fa-solid fa-phone"></i></span>
          <span className="text">Need Help? Call Here</span>
          <a className="phone" href="tel:+25669872564">+256 6987 2564</a>
          <Link onClick={ClickHandler} to="/contact" className="th-btn style6">
            Get A Quote <i className="fa-light fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
