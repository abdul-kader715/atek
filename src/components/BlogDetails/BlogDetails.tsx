import { useParams } from 'react-router-dom';
import BlogData from '../../api/blog';
import blog1 from '../../img/blog/blog_inner_1.jpg';
import blog2 from '../../img/blog/blog_inner_2.jpg';
import blogAtho from '../../img/blog/blog-s-1-4.jpg';
import author1 from '../../img/blog/comment-author-1.jpg';
import author2 from '../../img/blog/comment-author-2.jpg';
import author3 from '../../img/blog/comment-author-3.jpg';
import map from '../../img/icon/map.svg';
import BlogSidBar from '../BlogSidBar/BlogSidBar';
import CommentForm from '../CommentForm/CommentForm';

interface BlogItem {
  slug: string;
  title: string;
  [key: string]: any; 
}


const BlogDetail: React.FC = () => {

  const { slug } = useParams();
  const BlogDetails: BlogItem | undefined = BlogData.find(
    (item) => item.slug === slug
  );

  if (!BlogDetails) {
    return <div>Blog post not found</div>;
  }

  return (
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="th-blog blog-single">
              <div className="blog-img">
                <img src={blogAtho} alt="Blog Image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a className="author">
                    <i className="fa-light fa-user"></i>by David Smith
                  </a>
                  <a>
                    <i className="fa-regular fa-calendar"></i>05 May,2025
                  </a>
                  <a>
                    <img src={map} alt="" />
                    Sea Beach
                  </a>
                </div>
                <h2 className="blog-title">{BlogDetails.title}</h2>
                <p className="blog-text mb-30">
                  In today’s fast-evolving digital landscape, businesses need a
                  clear IT strategy to align technology with their long-term
                  goals. IT Strategy & Planning services help organizations
                  optimize resources, improve efficiency, enhance security, and
                  drive innovation through a structured approach to technology
                  adoption and management. In addition to protecting against
                  external threats, cybersecurity also plays a crucial role in
                  ensuring business continuity. In the event of a cyber attack
                  or data breach, systems may be disrupted, data may be lost or
                  corrupted, and downtime can result in significant financial
                  losses.
                </p>

                <p className="blog-text mb-30">
                  In today's interconnected world, cybersecurity has become a
                  critical concern for businesses of all sizes. With cyber
                  threats evolving rapidly
                </p>

                <blockquote>
                  <p>
                    Join your neighbors for an eco-friendly social gathering as
                    the day comes to a conclusion. Savor refreshments made with
                    sustainable ingredients and have discussions on sustainable
                    life. By fostering a sense of community.
                  </p>
                  <cite>Michel Clarck</cite>
                </blockquote>

                <p className="blog-text mt-5 mb-4">
                  These attacks can have devastating consequences for
                  businesses, ranging from financial losses and reputational
                  damage to legal liabilities. By investing in cybersecurity
                  measures such as firewalls, intrusion detection systems, and
                  security awareness training, businesses can reduce their
                  susceptibility.
                </p>

                <p className="blog-text mt-5 mb-4">
                  Living sustainably at Realar Residence is more than a choice;
                  it's an immersive experience that shapes every moment of your
                  day. From the moment you wake up in your solar-powered home
                  to the evening gatherings with like-minded neighbors{' '}
                </p>

                <h3 className="mt-4">
                  The sustainable traveller These 6 hotels epitomise ethical
                  luxury
                </h3>

                <p className="">
                  ‍Whether you work from home or commute to a nearby office,
                  the energy-efficient features of your home contribute to a
                  productive and eco-conscious workday. Smart home systems
                  allow you to monitor and control energy usage, ensuring that
                  your environmental impact remains minimal.
                </p>
                <div className="row gy-4">
                  <div className="col-6">
                    <div className="blog-img">
                      <img className="w-100" src={blog1} alt="Blog Image" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="blog-img">
                      <img className="w-100" src={blog2} alt="Blog Image" />
                    </div>
                  </div>
                </div>
                <p className="blog-text mb-4">
                  Quickly build covalent data after turnkey content.
                  Distinctively reconceptualize customized growth strategies via
                  prospective potentialities. Professionally pursue cutting-edge
                  web-readiness vis-a-vis just in time infrastructures.
                  Conveniently target client-based systems with turnkey
                  sources.
                </p>
                <p className="mb-0">
                  Collaboratively syndicate focused opportunities for
                  interactive deliverables. Assertively initiate client-based
                  infomediaries through collaborative mindshare create
                  bleeding-edge meta-services
                </p>

                <div className="share-links clearfix ">
                  <div className="row justify-content-between">
                    <div className="col-md-auto">
                      <span className="share-links-title">Tags:</span>
                      <div className="tagcloud">
                        <a>Apartment</a>
                        <a>Buyer</a>
                        <a>Modern</a>
                        <a>Luxury</a>
                      </div>
                    </div>
                    <div className="col-md-auto text-xl-end">
                      <div className="share-links_wrapp">
                        <span className="share-links-title">Share:</span>
                        <div className="social-links">
                          <a target="_blank" href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://www.twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="th-comments-wrap ">
              <h2 className="blog-inner-title h4"> Comments (03)</h2>
              <ul className="comment-list">
                <li className="th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src={author1} alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h3 className="name">Daniel Adam</h3>
                      <span className="commented-on">15 Jun, 2025 08:56pm</span>
                      <p className="text">
                        Empower multifunctional e-commerce for prospective
                        applications. Seamlessly productivate plug-and-play
                        markets whereas synergistic scenarios.
                      </p>
                      <div className="reply_and_edit">
                        <a href="/" className="reply-btn">
                          <i className="fas fa-reply"></i>Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul className="children">
                    <li className="th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img src={author2} alt="Comment Author" />
                        </div>
                        <div className="comment-content">
                          <div className="">
                            <h3 className="name">Zenelia Lozhe</h3>
                            <span className="commented-on">
                              25 Jun, 2025 08:56pm
                            </span>
                          </div>
                          <p className="text">
                            Empower multifunctional e-commerce for prospective
                            applications. Seamlessly productivate plug-and-play
                            markets whereas synergistic scenarios.
                          </p>
                          <div className="reply_and_edit">
                            <a href="/" className="reply-btn">
                              <i className="fas fa-reply"></i>Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src={author3} alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <div className="">
                        <h3 className="name">Daniel Adam</h3>
                        <span className="commented-on">
                          27 Jun, 2025 08:56pm
                        </span>
                      </div>
                      <p className="text">
                        Empower multifunctional e-commerce for prospective
                        applications. Seamlessly productivate plug-and-play
                        markets whereas synergistic scenarios.
                      </p>
                      <div className="reply_and_edit">
                        <a href="/" className="reply-btn">
                          <i className="fas fa-reply"></i>Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <CommentForm />
          </div>

          <div className="col-xxl-4 col-lg-5">
            <BlogSidBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
