import  { type FC } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../GalleryS3/GalleryS3';

interface GalleryAreaS3Props {
  className?: string;
}

const GalleryAreaS3: FC<GalleryAreaS3Props> = ({ className = '' }) => {
  return (
    <div className={`overflow-hidden space-bottom ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title text-anime-style-2">Projects Gallery</span>
              <h2 className="sec-title text-anime-style-2">Recent Projects Gallery</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div
              className="gallery-action text-center text-lg-end scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <Link to="/gallery" className="th-btn black-btn th-icon">
                Enter Gallery <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryAreaS3;
