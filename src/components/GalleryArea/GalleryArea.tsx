import { type FC } from 'react';
import shape2 from '../../img/shape/ab-1-shape-2.png';
import shape from '../../img/shape/g-shape-1.png';
import ShapeMockup from '../ShapeMockup/ShapeMockup';
import Gallery from '../Gallery/Gallery';

interface GalleryAreaProps {
  className?: string;
}

const GalleryArea: FC<GalleryAreaProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title mb-15 text-anime-style-2">Our Gallery</span>
          <h2 className="sec-title text-anime-style-3">Our Recent Project Gallery</h2>
        </div>

        <Gallery />

        <ShapeMockup className="shape-mockup th-line-shape d-none d-xl-block" top="-18%" left="0">
          <span>
            <svg width="3200" height="860" viewBox="0 0 3200 860" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="line-1"
                d="M2138 14.0506C2095.27 -17.4415 2002.06 10.9842 1886.26 120.726C1741.5 257.904 1351.09 392.927 1300.98 262.785C1236.52 95.3792 1538.14 78.636 1447.87 346.052C1357.6 613.468 810.026 408.273 376.356 511.519C46.7827 589.983 -27.4648 825.017 -14.6451 859"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </span>
        </ShapeMockup>

        <ShapeMockup className="shape-mockup movingX d-none d-xl-block" top="11%" left="-3%">
          <img className="gmovingX" src={shape} alt="shape" />
        </ShapeMockup>

        <ShapeMockup className="shape-mockup jump d-none d-xl-block" bottom="0" right="-3%">
          <img className="gmovingX" src={shape2} alt="shape" />
        </ShapeMockup>
      </div>
    </div>
  );
};

export default GalleryArea;
