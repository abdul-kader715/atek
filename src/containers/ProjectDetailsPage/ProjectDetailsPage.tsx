import { Fragment, type FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import projectData from '../../api/project';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import project from '../../img/project/project-dsc.webp';
import project1 from '../../img/service/sv-sm-1.webp';
import project2 from '../../img/service/sv-sm-2.webp';
import widget from '../../img/bg/widget_banner.webp';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface Project {
  slug: string;
  title: string;
}

const EventDetailsPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectDetails = projectData.find((item: Project) => item.slug === slug);

  if (!projectDetails) {
    return (
      <Fragment>
        <HeaderArea className="th-header header-layout1" />
        <div className="container py-5">
          <h2>Project not found</h2>
          <Link to="/">Go back home</Link>
        </div>
        <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
        <Scrollbar />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <GsapAnimetion />
      <HeaderArea className="th-header header-layout1" />
      <PageTitle pageTitle={projectDetails.title} pagesub="Project Details" />

      <section className="space">
        <div className="container">
          <div className="row">
            <div className="project-dsc-img mb-60">
              <img src={project} alt={projectDetails.title} />
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="page-single mb-60">
                <div className="page-content d-block">
                  <h2 className="box-title">{projectDetails.title}</h2>
                  <p className="box-text mb-30">
                    Web and mobile development are critical components of the digital landscape, enabling
                    businesses to create engaging, user-friendly, and functional applications for their
                    customers. These services encompass the design, development, and maintenance of websites,
                    web applications, and mobile apps. Below are some key details about web and mobile
                    development services. Web and mobile development services are essential for businesses
                    looking to establish a strong digital presence, engage customers, and streamline
                    operations. By leveraging the latest technologies and best practices, developers can create
                    solutions that drive growth and innovation.
                  </p>
                  <p className="box-text mb-50">
                    Web development involves creating websites and web applications that run on browsers. It
                    is divided into front-end (user interface) and back-end (server-side logic) development.
                    Creating websites that adapt to different screen sizes (desktop, tablet, mobile) for optimal
                    user experience.
                  </p>
                  <h2 className="box-title">The challenge of project</h2>
                  <p className="box-text mb-30">
                    These services encompass the design, development, and maintenance of websites, web
                    applications, and mobile apps. Web and mobile development are critical components of the
                    digital landscape, enabling businesses to create engaging, user-friendly, and functional
                    applications for their customers. Web development involves creating websites and web
                    applications that run on browsers.
                  </p>

                  <div className="project-gallery-wrapper">
                    <div className="row gy-4">
                      <div className="col-6">
                        <div className="sv-sm-img">
                          <img className="w-100" src={project1} alt="Project gallery 1" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sv-sm-img">
                          <img className="w-100" src={project2} alt="Project gallery 2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="th-pagination">
                <div className="container">
                  <div className="pagination-box2 d-flex justify-content-between">
                    <div className="pagination-prev">
                      <a href="#" className="pagination-icon" aria-label="Previous Post">
                        <i className="fa-solid fa-arrow-left"></i>
                      </a>
                      <p className="pagination-title">Previous Post</p>
                    </div>
                    <div className="pagination-next text-end">
                      <p className="pagination-title">Next Post</p>
                      <a href="#" className="pagination-icon" aria-label="Next Post">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_download">
                  <h4 className="widget_title">Project Information</h4>
                  <div className="sidebar-info">
                    <div className="sidebar-info-item d-flex align-items-center">
                      <span className="sidebar-info-icon">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <div className="sidebar-info-content">
                        <span className="sidebar-info-meta">Clients:</span>
                        <h4 className="sidebar-info-title">
                          <a href="#">Josefin H. Smith</a>
                        </h4>
                      </div>
                    </div>

                    <div className="sidebar-info-item d-flex align-items-center">
                      <span className="sidebar-info-icon">
                        <i className="fa-solid fa-layer-group"></i>
                      </span>
                      <div className="sidebar-info-content">
                        <span className="sidebar-info-meta">Category:</span>
                        <h4 className="sidebar-info-title">
                          <a href="#">Branding Marketing</a>
                        </h4>
                      </div>
                    </div>

                    <div className="sidebar-info-item d-flex align-items-center">
                      <span className="sidebar-info-icon">
                        <i className="fa-solid fa-calendar-days"></i>
                      </span>
                      <div className="sidebar-info-content">
                        <span className="sidebar-info-meta">Date:</span>
                        <h4 className="sidebar-info-title">
                          <a href="#">25 March, 2025</a>
                        </h4>
                      </div>
                    </div>

                    <div className="sidebar-info-item d-flex align-items-center">
                      <span className="sidebar-info-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                      <div className="sidebar-info-content">
                        <span className="sidebar-info-meta">Address:</span>
                        <h4 className="sidebar-info-title">
                          <a href="https://maps.app.goo.gl/Wzit3rG9GvPXqTYQ8" target="_blank" rel="noopener noreferrer">
                            258 Dancing Street, USA
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget widget_download">
                  <h4 className="widget_title">Download Brochure</h4>
                  <div className="donwload-media-wrap">
                    <div className="download-media">
                      <div className="download-media_icon">
                        <i className="fa-light fa-file-pdf"></i>
                      </div>
                      <div className="download-media_info">
                        <h5 className="download-media_title">
                          <a href="#">Download PDF</a>
                        </h5>
                      </div>
                    </div>
                    <div className="download-media">
                      <div className="download-media_icon">
                        <i className="fal fa-file-lines"></i>
                      </div>
                      <div className="download-media_info">
                        <h5 className="download-media_title">
                          <a href="#">Download DOC</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="widget widget_banner background-image"
                  style={{ backgroundImage: `url(${widget})` }}
                >
                  <div className="widget-banner position-relative text-center">
                    <span className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <span className="text">Need Help? Call Here</span>
                    <a className="phone" href="tel:+25669872564">
                      +256 6987 2564
                    </a>
                    <Link to="/contact" className="th-btn style6">
                      Get A Quote <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <FooterArea className="footer-wrapper footer-layout1 black-bg space-top" />
      <Scrollbar />
    </Fragment>
  );
};

export default EventDetailsPage;
