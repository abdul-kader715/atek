import { useEffect, useState, type FC } from "react";
import { Link } from 'react-router-dom';
import ServiceData from '../../api/service';
import servicBg from '../../img/bg/line-pattern2.png';
import shape1 from '../../img/shape/shape_2_1.png';
import shape2 from '../../img/shape/shape_2_2.png';
import ShapeMockup from "../ShapeMockup/ShapeMockup";

interface ServiceItem {
  image?: string;
  Icon?: string;
  title: string;
  description: string;
  slug: string;
}

interface ServiceAreaS2Props {
  className?: string;
}

const ServiceAreaS2: FC<ServiceAreaS2Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [activeIndex, setActiveIndex] = useState<number>(3);
  const [bgImages, setBgImages] = useState<string[]>([]);

  useEffect(() => {
    const initialBgImages = ServiceData.slice(0, 4).map((item: ServiceItem) => item.image || "");
    setBgImages(initialBgImages);
  }, []);

  return (
    <div className={`${props.className ?? ''}`} id="service-sec" style={{ backgroundImage: `url(${servicBg})` }}>
      <ShapeMockup className="shape-mockup movingX d-none d-xl-block" top="10%" left="5%">
        <img src={shape1} alt="shape" />
      </ShapeMockup>
      <ShapeMockup className="shape-mockup jump d-none d-xl-block" bottom="17%" right="3%">
        <img src={shape2} alt="shape" />
      </ShapeMockup>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center">
              <span className="sub-title text-anime-style-2">Services We’re Offering</span>
              <h2 className="sec-title text-anime-style-3">
                We Provide our Clients Best Cloud Computing Solution
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="service-list-area">
            {ServiceData.slice(9, 13).map((item: ServiceItem, index: number) => (
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
                    {item.Icon && <img src={item.Icon} alt="icon" />}
                  </span>
                  <div className="service-content">
                    <h4 className="box-title">
                      <Link onClick={ClickHandler} to={`/service-details/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <span className="service-subtitle">{item.description}</span>
                  </div>
                  <Link onClick={ClickHandler} to={`/service-details/${item.slug}`} className="th-btn style2">
                    View Details <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="service-btn text-center mt-60">
          <Link onClick={ClickHandler} to="/service" className="th-btn th-icon">
            View All Services <i className="fa-light fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaS2;
