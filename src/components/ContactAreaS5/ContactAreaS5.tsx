import { Link } from 'react-router-dom';
import contact_bg from '../../img/bg/contact_bg_6.jpg';
import VideoModal from '../ModalVideo/ModalVideo';
import type { FC } from 'react';

interface ContactAreaS5Props {
  className?: string;
}

const ContactAreaS5: FC<ContactAreaS5Props> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className={`${props.className}`} style={{ backgroundImage: `url(${contact_bg})` }}>
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-6">
            <div className="text-center text-lg-start">
              <div className="title-area contact6-title pe-xl-5 me-xl-5">
                <span className="sub-title text-white text-anime-style-2">Get in touch</span>
                <h2 className="sec-title text-white text-anime-style-3">
                  Is there anything I can do for you today?
                </h2>
                <p
                  className="contact-text2 text-white scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  We’love to hear from you. Our friendly team is <br /> always here to chat
                </p>
              </div>
              <div className="scroll-text-animation" data-animation="fade_from_bottom">
                <Link
                  to="/contact"
                  onClick={ClickHandler}
                  className="th-btn style7 th-radius th-icon"
                >
                  Contact Us <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="video-box4 video-box7">
              <VideoModal vidclass="play-btn popup-video" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaS5;
