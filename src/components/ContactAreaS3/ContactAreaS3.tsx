import type { FC } from 'react';
import bg from '../../img/bg/contact_bg_3.webp';
import ContactForm from '../ContactForm/ContactForm';

interface ContactAreaS3Props {
  className?: string;
}

const ContactAreaS3: FC<ContactAreaS3Props> = (props) => {
  return (
    <div className={`${props.className}`} style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row gy-4 justify-content-between flex-row-reverse">
          <div className="col-lg-6">
            <div className="pt-25 ps-xl-5 ms-xl-4">
              <div className="title-area contact-4-titlebox mb-10">
                <span className="sub-title text-white text-anime-style-2">Get in touch</span>
                <h2 className="sec-title text-white text-anime-style-3">
                  We Are Offering 14 <br /> Days Free Trial
                </h2>
                <p
                  className="text-white mb-0 scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  We’love to hear from you. Our friendly team <br />is always here to chat
                </p>
                <a href="#" className="th-btn style7 th-icon">
                  Try 14 Days Free Trial <i className="fa-light fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ContactForm
              subClass="contact-form-area2  pe-xl-5"
              btnClass="form-btn-wrapp form-btn-wrapp2"
              btn1="th-btn white-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaS3;
