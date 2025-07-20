import { type FC } from 'react';
import { Link } from 'react-router-dom';
import Bgimg from '../../img/bg/gallery_bg_1.jpg';
import GalleryPopup from '../GalleryS2/GalleryS2';

interface GalleryAreaS2Props {
  className?: string;
}

const GalleryAreaS2: FC<GalleryAreaS2Props> = ({ className = '' }) => {
  const handleClick = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className={className} style={{ backgroundImage: `url(${Bgimg})` }}>
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="title-area text-center text-lg-start mb-20 pe-xl-5 me-xl-5">
              <span className="sub-title text-anime-style-2">Project Gallery</span>
              <h2 className="sec-title text-anime-style-3">
                Let’s See Our Recent Work Projects Gallery
              </h2>
            </div>
            <p
              className="sec-text style2 mb-50 scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
          </div>
          <div className="col-auto">
            <div className="sec-btn scroll-text-animation" data-animation="fade_from_bottom">
              <Link onClick={handleClick} to="/gallery" className="th-btn th-icon">
                Enter Gallery <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <GalleryPopup />
    </div>
  );
};

export default GalleryAreaS2;
