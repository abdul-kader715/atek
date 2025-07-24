import bgimg from '../../img/bg/contact_bg_7.webp';
import VideoModal from '../ModalVideo/ModalVideo';
import ContactForm from '../ContactForm/ContactForm';
import type { FC } from 'react';

interface ContactAreaS6Props {
  className?: string;
}

const ContactAreaS6: FC<ContactAreaS6Props> = (props) => {
  return (
    <div className={`${props.className}`} style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="video-box4 style2">
              <VideoModal vidclass="play-btn popup-video" />
            </div>
          </div>
          <div className="col-lg-6">
            <ContactForm
              subClass="contact-form-area2 pe-xl-5"
              btnClass="form-btn-wrapp form-btn-wrapp2"
              btn1="th-btn th-radius white-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaS6;
