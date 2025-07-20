import CountUp from 'react-countup';
import bgimg from '../../img/bg/contact_bg_2.jpg';
import ContactForm from '../ContactForm/ContactForm';
import type { FC } from 'react';

interface ContactAreaS2Props {
  className?: string;
}

const ContactAreaS2: FC<ContactAreaS2Props> = (props) => {
  return (
    <div className={`${props.className}`} style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-xxl-6">
            <div className="pe-xxl-4 me-xxl-4">
              <div className="title-area">
                <span className="sub-title text-white text-anime-style-2">Get in touch</span>
                <h2 className="sec-title text-white text-anime-style-2">
                  Do You Need Help For Your Next Projects ?
                </h2>
                <p
                  className="text-white scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  A Startup Tech Agency specializes in providing innovative, scalable, and
                  customized technology solutions to help startups build, grow, and succeed in a
                  competitive market. By combining technical expertise with an understanding.
                </p>
              </div>
              <div className="scroll-text-animation" data-animation="fade_from_bottom">
                <ContactForm
                  subClass="contact-form-area2"
                  btnClass="form-btn-wrapp form-btn-wrapp2"
                  btn1="th-btn white-btn"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-xxl-6">
            <div className="counter-wrap2">
              <div className="row gy-50">

                <div className="col-md-6 col-xl-6 counter-card_wrapp">
                  <div className="counter-card style2">
                    <div className="counter-shape"><span></span></div>
                    <div className="media-body">
                      <h3 className="box-number text-white">
                        <span className="counter-number"><CountUp end={97} /></span>%
                      </h3>
                      <h6 className="counter-title text-white">Retention Rate</h6>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xl-6 counter-card_wrapp">
                  <div className="counter-card style2">
                    <div className="counter-shape"><span></span></div>
                    <div className="media-body">
                      <h3 className="box-number text-white">
                        <span className="counter-number"><CountUp end={19} /></span>k
                      </h3>
                      <h6 className="counter-title text-white">Happy Clients</h6>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xl-6 counter-card_wrapp">
                  <div className="counter-card style2">
                    <div className="counter-shape"><span></span></div>
                    <div className="media-body">
                      <h3 className="box-number text-white">
                        <span className="counter-number"><CountUp end={12} /></span>
                      </h3>
                      <h6 className="counter-title text-white">Years Experience</h6>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xl-6 counter-card_wrapp">
                  <div className="counter-card style2">
                    <div className="counter-shape"><span></span></div>
                    <div className="media-body">
                      <h3 className="box-number text-white">
                        <span className="counter-number"><CountUp end={8} /></span>k
                      </h3>
                      <h6 className="counter-title text-white">Project Completed</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaS2;
