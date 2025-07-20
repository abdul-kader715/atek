import  { useState, type FC } from 'react';

import client1 from '../../img/shape/client-img-2-1.png';
import client2 from '../../img/shape/client-img-2-2.png';
import client3 from '../../img/shape/client-img-2-3.png';
import client4 from '../../img/shape/client-img-2-4.png';
import shield from '../../img/icon/th-shield.svg';
import about_1 from '../../img/normal/about_8_1.jpg';
import about_2 from '../../img/normal/about_8_2.jpg';
import about_8 from '../../img/normal/about_8_3.jpg';
import './Ab.css';

interface AboutAreaS9Props {
  className?: string;
}

const AboutAreaS9: FC<AboutAreaS9Props> = ({ className = '' }) => {
  const [popupImg, setPopupImg] = useState<string | null>(null);

  const handleOpenPopup = (imgSrc: string) => {
    setPopupImg(imgSrc);
  };

  const handleClosePopup = () => {
    setPopupImg(null);
  };

  return (
    <div className={`${className}`} id="about-sec">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="title-area">
              <span className="sub-title text-anime-style-2">About Us Company</span>
              <h2 className="sec-title text-anime-style-3">
                A Complete Guide to Modern Web & Mobile App Development
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <p className="ps-xl-5 scroll-text-animation" data-animation="fade_from_bottom">
              Web and app development focuses on designing, creating, and maintaining websites and mobile
              applications to enhance digital experiences. These services cater to businesses, individuals,
              and organizations looking to establish a strong online presence, streamline operations, or
              connect with their audiences effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-4">
            <div className="img-box9">
              <div className="row gx-30">
                {[about_1, about_2].map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className={`col-sm-6${idx === 1 ? ' mt-60' : ''}`}
                  >
                    <div className="about-item2">
                      <div className="img1">
                        <img src={imgSrc} alt="About" />
                        <button
                          className="icon-btn popup-image"
                          onClick={() => handleOpenPopup(imgSrc)}
                          aria-label="Open image popup"
                        >
                          <i className="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="about-content-wrapper">
              <div className="about-item-wrap">
                <div className="about-client-box">
                  <div className="client-thumb-group">
                    {[client1, client2, client3, client4].map((clientSrc, idx) => (
                      <div key={idx} className="thumb">
                        <img src={clientSrc} alt="Client avatar" />
                      </div>
                    ))}
                    <div className="thumb icon">
                      <i className="fa-light fa-plus"></i>
                    </div>
                  </div>
                </div>

                {[
                  {
                    title: 'Responsive Design',
                    text: 'Practices designed to safeguard digital assets and ensure',
                  },
                  {
                    title: 'Custom Functionality',
                    text: 'Practices designed to safeguard digital assets and ensure',
                  },
                  {
                    title: 'Integration Capabilities',
                    text: 'Practices designed to safeguard digital assets and ensure',
                  },
                ].map(({ title, text }, idx) => (
                  <div className="about-item style2" key={idx}>
                    <div className="about-item_img">
                      <img src={shield} alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">{title}</h5>
                      <p className="about-item_text">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-image9">
                <img src={about_8} alt="Business Needs Custom Web & App Development" />
                <div className="cilent-box">
                  <span className="review">
                    <i className="fa-sharp fa-solid fa-star"></i>16k+
                  </span>
                  <p className="cilent-box_counter">
                    Business Needs Custom Web & App Development in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {popupImg && (
        <div
          className="custom-lightbox"
          onClick={handleClosePopup}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="custom-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={handleClosePopup}
              aria-label="Close popup"
            >
              ×
            </button>
            <img src={popupImg} alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutAreaS9;
