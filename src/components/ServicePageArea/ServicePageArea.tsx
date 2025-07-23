import { Link } from 'react-router-dom';
import ServiceData from '../../api/service';
import type { FC } from 'react';


const ServicePageArea: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className="position-relative bg-top-center overflow-hidden space-top"
      id="service-sec"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area service-title-box text-center">
              <span className="sub-title mb-15">What We’re Offering</span>
              <h2 className="sec-title">Dealing in all professional IT services</h2>
              <p className="sec-text mb-50">
                IT solutions refer to a broad range of services and technologies designed to address <br /> specific business needs, streamline operations, and drive growth.
              </p>
            </div>
          </div>
        </div>
        <div className="service-area">
          <div className="row gy-30 justify-content-center">
            {ServiceData.slice(0, 8).map((service, index) => (
              <div className="col-xl-3 col-md-6" key={index}>
                <div className="service-box service-style-1">
                  <div className="service-img">
                    <Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>
                      <img src={service.spage} alt={service.title} />
                    </Link>
                  </div>
                  <div className="service-content">
                    <h3 className="box-title">
                      <Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="service-box_text">{service.description}</p>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-details/${service.slug}`}
                      className="th-btn style4"
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
    </section>
  );
};

export default ServicePageArea;
