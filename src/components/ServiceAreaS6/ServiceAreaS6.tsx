import { useEffect, useState, type FC } from "react";
import { Link } from 'react-router-dom';
import ServiceData from '../../api/service';

interface ServiceAreaS2Props {
  className?: string;
}

const ServiceAreaS2: FC<ServiceAreaS2Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [bgImages, setBgImages] = useState<string[]>([]);

  useEffect(() => {
    const initialBgImages = ServiceData.slice(0, 4).map(item => item.image || "");
    setBgImages(initialBgImages);
  }, []);

  return (
    <div className={`${props.className}`} id="service-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Our Services</span>
              <h2 className="sec-title text-anime-style-3">
                Our Solution for your business
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="service-list-area">
            {ServiceData.slice(24, 27).map((item, index) => (
              <div
                key={index}
                className={`service-list-wrap sv-list2 ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className="service-list background-image"
                  style={{ backgroundImage: `url(${item.image || ""})` }}
                >
                  <span className="service-icon">
                    <img src={item.Icon} alt="img" />
                  </span>
                  <div className="service-content">
                    <h4 className="box-title">
                      <Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <span className="service-subtitle">{item.description}</span>
                  </div>
                  <Link
                    onClick={ClickHandler}
                    to={`/service-details/${item.slug}`}
                    className="th-btn style2"
                  >
                    View Details <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaS2;
