import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';

import gallery1 from '../../img/gallery/gallery_10_1.jpg';
import gallery2 from '../../img/gallery/gallery_10_2.jpg';
import gallery3 from '../../img/gallery/gallery_10_3.jpg';
import gallery5 from '../../img/gallery/gallery_10_4.jpg';
import gallery8 from '../../img/gallery/gallery_10_5.jpg';
import gallery6 from '../../img/gallery/gallery_10_6.jpg';
import gallery4 from '../../img/gallery/gallery_10_7.jpg';
import gallery7 from '../../img/gallery/gallery_10_8.jpg';
import gallery11 from '../../img/gallery/gallery_10_9.jpg';
import gallery10 from '../../img/gallery/gallery_11.jpg';
import gallery9 from '../../img/gallery/gallery_11_1.jpg';

const images: string[] = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11
];

const Gallery = () => {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const openPopup = (src: string) => setPopupImage(src);
  const closePopup = () => setPopupImage(null);

  useEffect(() => {
    let iso: Isotope | undefined;

    if (!gridRef.current) return;

    const imgLoad = imagesLoaded(gridRef.current);

    imgLoad.on('always', () => {
      if (gridRef.current) {
        iso = new Isotope(gridRef.current, {
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-item',
          },
        });
      }
    });

    return () => {
      if (iso) iso.destroy();
    };
  }, []);

  return (
    <div className="case-area space">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-12">
            <span className="sub-title">Our Gallery</span>
            <h2 className="sec-title text-center mb-30">Our Recent Project Gallery</h2>
          </div>
        </div>

        <div className="row gy-30 grid" ref={gridRef}>
          {images.map((img, i) => (
            <div className="col-xl-4 col-lg-6 grid-item" key={i}>
              <div className="case-box style2 inner-style1">
                <div className="case-img global-img">
                  <img
                    src={img}
                    alt={`gallery ${i}`}
                    style={{ cursor: 'pointer' }}
                  />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup(img);
                    }}
                    className="icon-btn"
                  >
                    <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
                <div className="case-action">
                  <a
                    href="#"
                    className="case-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup(img);
                    }}
                  >
                    <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popupImage && (
        <div
          className="popup-overlay"
          onClick={closePopup}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
        >
          <button className="lightbox-close" onClick={closePopup}>×</button>
          <img
            src={popupImage}
            alt="popup"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(255,255,255,0.2)',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
