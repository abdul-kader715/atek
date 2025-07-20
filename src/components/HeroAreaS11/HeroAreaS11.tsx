import hero11bg from "../../img/bg/hero11-bg.png";
import shap1 from "../../img/shape/hero11-shap1.png";
import shap2 from "../../img/shape/hero11-shap2.png";
import video from "../../img/hero/hero-video-img.png";
import { Link } from "react-router-dom";
import VideoModal from "../ModalVideo/ModalVideo";
import type { FC } from "react";

const HeroAreaS11: FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="th-hero-wrapper bg-bottom-center hero-11" id="hero">
      <div
        className="hero-11-wrapp background-image"
        style={{ backgroundImage: `url(${hero11bg})` }}
      >
        <div className="container">
          <div className="hero-style11 text-center">
            <div className="hero11-titlebox mb-40">
              <h1 className="hero-title">
                Unlocking the Future with Digital Solutions
              </h1>
              <p className="hero-desc">
                Digital transformation is the process of integrating digital technology into all aspects of a business, fundamentally changing how it operates.
              </p>
            </div>
            <div className="hero11-action">
              <Link
                onClick={ClickHandler}
                to="/contact"
                className="th-btn style3 th-radius th-icon"
              >
                Get Started Now <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero11-shapebox">
          <div className="shape1">
            <img src={shap1} alt="decorative shape 1" />
          </div>
          <div className="shape2">
            <img src={shap2} alt="decorative shape 2" />
          </div>
        </div>
      </div>
      <div className="hero-video-img">
        <img src={video} alt="video thumbnail" />
        <VideoModal vidclass="play-btn popup-video" />
      </div>
    </div>
  );
};

export default HeroAreaS11;
