import { Link } from 'react-router-dom';
import bgimg from '../../img/bg/contact_bg_1.webp';
import ContactForm from '../ContactForm/ContactForm';
import type { FC } from 'react';

interface ContactAreaProps {
  className?: string;
}

const ContactArea: FC<ContactAreaProps> = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div
      className={props.className}
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="pt-80 p-lg-0">
              <div className="title-area pe-xl-5">
                <span className="sub-title text-white text-anime-style-2">
                  Get in touch
                </span>
                <h2 className="sec-title text-white text-anime-style-3">
                  We Are Offering 14 Days Free Trial
                </h2>
                <p
                  className="contact-text text-white scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  We’love to hear from you. Our friendly team is always here to chat
                </p>
              </div>
              <div
                className="contact-action scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  className="th-btn style7 th-icon"
                >
                  Try 14 Days Free Trial <i className="fa-light fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6  scroll-text-animation"
            data-animation="fade_from_bottom"
          >
            <ContactForm
              subClass="contact-form-area ms-xl-5"
              btnClass="form-btn-wrapp"
              btn1="th-btn style5 th-radius"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
