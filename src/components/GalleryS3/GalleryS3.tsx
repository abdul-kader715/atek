import { useState } from 'react';
import '../../components/Gallery/GalleryPopup.css';

// Images
import Im1 from '../../img/gallery/gallery_3_1.jpg';
import Im2 from '../../img/gallery/gallery_3_2.jpg';
import Im3 from '../../img/gallery/gallery_3_3.jpg';
import Im4 from '../../img/gallery/gallery_3_4.jpg';
import Im5 from '../../img/gallery/gallery_3_5.jpg';
import Im6 from '../../img/gallery/gallery_3_6.jpg';

const GalleryPopup = () => {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const openPopup = (src: string) => setPopupImage(src);
  const closePopup = () => setPopupImage(null);

  return (
    <div>
      <div className="row gy-10 gx-10 justify-content-center align-items-center">
        <div className="col-lg-3">
          <div className="gallery-box style2">
            <div className="gallery-img global-img" onClick={() => openPopup(Im1)}>
              <div className="icon-btn">
                <i className="fal fa-magnifying-glass-plus"></i>
              </div>
              <img src={Im1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="gallery-box style2">
            <div className="gallery-img global-img" onClick={() => openPopup(Im2)}>
              <div className="icon-btn">
                <i className="fal fa-magnifying-glass-plus"></i>
              </div>
              <img src={Im2} alt="" />
            </div>
          </div>
          <div className="gallery-box style2">
            <div className="gallery-img global-img" onClick={() => openPopup(Im4)}>
              <div className="icon-btn">
                <i className="fal fa-magnifying-glass-plus"></i>
              </div>
              <img src={Im4} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="gallery-box style2">
            <div className="gallery-img global-img" onClick={() => openPopup(Im3)}>
              <div className="icon-btn">
                <i className="fal fa-magnifying-glass-plus"></i>
              </div>
              <img src={Im3} alt="" />
            </div>
          </div>
          <div className="gallery-box-wrapp">
            <div className="gallery-box style2">
              <div className="gallery-img global-img" onClick={() => openPopup(Im5)}>
                <div className="icon-btn">
                  <i className="fal fa-magnifying-glass-plus"></i>
                </div>
                <img src={Im5} alt="" />
              </div>
            </div>
            <div className="gallery-box style2">
              <div className="gallery-img global-img" onClick={() => openPopup(Im6)}>
                <div className="icon-btn">
                  <i className="fal fa-magnifying-glass-plus"></i>
                </div>
                <img src={Im6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {popupImage && (
        <div className="custom-lightbox" onClick={closePopup}>
          <div className="custom-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closePopup}>×</button>
            <img src={popupImage} alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPopup;
