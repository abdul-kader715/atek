import { Fragment, type FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import ServiceData from '../../api/service';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import widget from '../../img/bg/widget_banner.jpg';
import check from '../../img/icon/price-check.svg';
import details from '../../img/service/sv-details.jpg';
import sv1 from '../../img/service/sv-sm-1.jpg';
import sv2 from '../../img/service/sv-sm-2.jpg';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface Service {
  slug: string;
  title: string;
}

const ServiceDetailsPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ServiceDetails = ServiceData.find((item: Service) => item.slug === slug);

  if (!ServiceDetails) {
    return (
      <Fragment>
        <HeaderArea className="th-header header-layout1" />
        <div className="container py-5">
          <h2>Service not found</h2>
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
      <PageTitle pageTitle={ServiceDetails.title} pagesub="Service Details" />
      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="page-single">
                <div className="service-img sv-details-img">
                  <img className="w-100" src={details} alt={ServiceDetails.title} />
                </div>
                <div className="page-content sv-content d-block">
                  <h2 className="box-title">IT Strategy & Planning</h2>
                  <p className="box-text mb-30">
                    In today’s fast-evolving digital landscape, businesses need a clear IT strategy to align technology with their long-term goals. IT Strategy & Planning services help organizations optimize resources, improve efficiency, enhance security, and drive innovation through a structured approach to technology adoption and management. A well-defined IT strategy ensures that businesses stay ahead of the competition by leveraging the right technology, at the right time, with the right investment.
                  </p>
                  <p className="box-text mb-50">
                    With the rise of cloud computing, AI, cybersecurity threats, and digital transformation, businesses must continuously refine their IT strategies. An adaptive, forward-thinking approach ensures long-term success in a technology-driven world.
                  </p>
                  <h2 className="box-title">Why Choose The Service</h2>
                  <div className="checklist sv-details-list mb-40">
                    <ul>
                      {[
                        'Visit most popular location of Maldives',
                        'Buffet Breakfast for all traveler with good quality.',
                        'Expert guide always guide you and give informations.',
                        'Best Hotel for all also great food.',
                        'Helping all traveler for Money Exchange.',
                        'Buffet Breakfast for all traveler with good quality..',
                        'Buffet Breakfast for all traveler with good quality.',
                      ].map((text, idx) => (
                        <li key={idx}>
                          <img className="icon" src={check} alt="check icon" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sv-gallery-wrapper">
                    <div className="row gy-4">
                      {[sv1, sv2].map((imgSrc, idx) => (
                        <div key={idx} className="col-6">
                          <div className="sv-sm-img">
                            <img className="w-100" src={imgSrc} alt={`Gallery image ${idx + 1}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    {[
                      'IT Strategy & Planning',
                      'Web Developments',
                      'Cloud Consulting',
                      'Machine Learning',
                      'Database Security',
                      'IT Management',
                    ].map((category, idx) => (
                      <li key={idx}>
                        <Link to="/blog">{category}</Link>
                        <span>
                          <i className="fa-regular fa-arrow-up-right"></i>
                        </span>
                      </li>
                    ))}
                  </ul>
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

export default ServiceDetailsPage;
