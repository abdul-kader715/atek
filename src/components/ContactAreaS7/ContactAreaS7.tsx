import { Link } from 'react-router-dom';
import bgimg from '../../img/bg/contact_bg_8.jpg';
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
    <div className={`${props.className}`} style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-6">
            <div className="title-area contact8-titlebox">
              <span className="sub-title text-white text-anime-style-2">Need help?</span>
              <h2 className="sec-title text-white text-anime-style-3">
                Easy solutions for all Data problems, keep business & ensure high availability.
              </h2>
            </div>
            <div className="contact-action">
              <Link
                onClick={ClickHandler}
                to="/contact"
                className="th-btn style7 th-radius th-icon"
              >
                Contact With Us <i className="fa-light fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <ContactForm
              subClass="contact8-form-area ms-xl-5"
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
