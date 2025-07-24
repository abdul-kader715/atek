import bgimg from '../../img/bg/contact_bg_5.webp';
import VideoModal from '../ModalVideo/ModalVideo';
import ContactForm from '../ContactForm/ContactForm';
import type { FC } from 'react';

interface ContactAreaS4Props {
  className?: string;
}

const ContactAreaS4: FC<ContactAreaS4Props> = (props) => {
  return (
    <div className={`${props.className}`} style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="video-box3">
              <VideoModal vidclass="play-btn popup-video" />
            </div>
          </div>
          <div className="col-lg-6">
            <ContactForm
              subClass="contact-form-area contact-form3 ms-xl-5"
              btnClass="form-btn-wrapp form-btn-wrapp2"
              btn1="th-btn white-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaS4;
