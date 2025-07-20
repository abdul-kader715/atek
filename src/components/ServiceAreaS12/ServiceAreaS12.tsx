import { Link } from "react-router-dom";
import ServiceData from "../../api/service";
import type { FC } from "react";

interface ServiceItem {
  image12: string;
  title: string;
  description9: string;
  slug: string;
}

interface ServiceAreaS12Props {
  className?: string;
}

const ServiceAreaS12: FC<ServiceAreaS12Props> = ({ className }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={className} id="service-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area service-title-box mb-50 text-center">
              <span className="sub-title text-anime-style-2">Our Services</span>
              <h2 className="sec-title text-anime-style-3">
                We Provide Realtime Data Solutions
              </h2>
            </div>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="row">
            {ServiceData.slice(0, 6).map((item: ServiceItem, isky: number) => (
              <div className="col-xl-4 col-md-6" key={isky}>
                <div className="service-box service-style-1 service-style9">
                  <div className="service-img">
                    <span>
                      <img src={item.image12} alt={item.title || ""} />
                    </span>
                  </div>
                  <div className="service-content sv-content6">
                    <h3 className="box-title">
                      <Link
                        onClick={ClickHandler}
                        to={`/service-details/${item.slug}`}
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="service-box_text">{item.description9}</p>
                    <Link
                      className="th-btn"
                      onClick={ClickHandler}
                      to={`/service-details/${item.slug}`}
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

export default ServiceAreaS12;
