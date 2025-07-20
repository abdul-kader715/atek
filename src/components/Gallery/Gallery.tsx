import { useState, type FC } from 'react';
import './GalleryPopup.css';

// Images
import Im1 from '../../img/gallery/gallery_1_1.jpg';
import Im2 from '../../img/gallery/gallery_1_2.jpg';
import Im3 from '../../img/gallery/gallery_1_3.jpg';
import Im4 from '../../img/gallery/gallery_1_4.jpg';
import Im5 from '../../img/gallery/gallery_1_5.jpg';
import Im6 from '../../img/gallery/gallery_1_6.jpg';
import Im7 from '../../img/gallery/gallery_1_7.jpg';

const images: string[] = [Im1, Im2, Im3, Im4, Im5, Im6, Im7];

const GalleryPopup: FC = () => {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const openPopup = (src: string) => setPopupImage(src);
  const closePopup = () => setPopupImage(null);

  return (
    <>
      <div className="row gy-10 gx-10 justify-content-center align-items-center">
        {images.map((img, index) => (
          <div className="col-md-6 col-lg-2" key={index}>
            <div className="gallery-card">
              <div className="box-img global-img" onClick={() => openPopup(img)}>
                <div className="icon-btn">
                  <i className="fal fa-magnifying-glass-plus"></i>
                </div>
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {popupImage && (
        <div className="custom-lightbox" onClick={closePopup}>
          <div className="custom-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closePopup}>×</button>
            <img src={popupImage} alt="Popup" />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPopup;
